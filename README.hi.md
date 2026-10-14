<div align="center">

[![Language: Hindi](https://img.shields.io/badge/Language-हिन्दी%20(Hindi)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# प्रिव्रो एआई वॉइस (Privro AI Voice) - फ्री लोकल एआई वॉइस और टेक्स्ट टू स्पीच जनरेटर

[प्रिव्रो एआई (Privro AI)](https://privro.com/hi) के लिए इन-ब्राउज़र, ज़ीरो-अपलोड न्यूरल टेक्स्ट टू स्पीच (Text to Speech) जनरेटर। अपना टेक्स्ट पेस्ट करें, एक वॉइस मॉडल चुनें, और पूरी तरह से अपने डिवाइस पर स्वाभाविक मानवीय आवाज़ (Natural AI Voice) जनरेट करें। ऑडियो आपके ब्राउज़र में Web Workers और WebGPU की मदद से लोकली सिंथेसाइज़ होता है — आपका कोई भी टेक्स्ट या ऑडियो कभी किसी रिमोट सर्वर पर अपलोड नहीं होता।

- **लाइव वेब ऐप्लिकेशन:** [voice.privro.com](https://voice.privro.com)
- **प्रिव्रो वॉइस स्टूडियो:** [privro.com/hi/piper-voice](https://privro.com/hi/piper-voice)
- **मशीन-रीडेबल मेटाडेटा:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## दोहरे न्यूरल टीटीएस इंजन (Dual Neural TTS Engines)

इस प्रोजेक्ट में दो उच्च-प्रदर्शन न्यूरल वॉइस इंजन शामिल हैं जो पूरी तरह से क्लाइंट-साइड (आपके ब्राउज़र में) काम करते हैं:

1. **पाइपर टीटीएस - Piper TTS (प्राइमरी इंजन):**
   - ONNX Runtime Web और eSpeak NG द्वारा संचालित हाई-स्पीड, लोकल न्यूरल वाक् संश्लेषण (Neural Speech Synthesis)।
   - **40+ भाषाओं (58 क्षेत्रीय लहजों) में 300 से अधिक वॉइस मॉडल** (हिंदी सहित 3 समर्पित भारतीय मॉडल)।
   - **WebGPU** के साथ हार्डवेयर-एक्सेलरेटेड, और मल्टी-थ्रेडेड **WebAssembly (WASM)** पर ऑटोमैटिक फॉलबैक।
   - मल्टी-स्पीकर वॉइस मॉडल्स जिसमें आप अलग-अलग वक्ता (Speaker ID) चुन सकते हैं।
   - क्वालिटी टियर्स: लाइटवेट (`x_low`, `low`) से लेकर हाई-फिडेलिटी (`medium`, `high`) तक।
   - `CacheStorage` के माध्यम से ब्राउज़र कैशिंग: वॉइस मॉडल (~20–60 MB) केवल एक बार डाउनलोड होते हैं और उसके बाद बिना इंटरनेट (Offline) तुरंत चलते हैं।
   - दोषरहित (Lossless) 16-बिट PCM WAV (22.05 kHz) ऑडियो डाउनलोड।

2. **कोकोरो टीटीएस - Kokoro TTS (सेकेंडरी इंजन):**
   - [`kokoro-js`](https://www.npmjs.com/package/kokoro-js) के माध्यम से [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) द्वारा निर्मित अत्यंत स्वाभाविक मानवीय आवाज़।
   - नेचुरल अमेरिकन और ब्रिटिश वॉइस स्टाइल्स।
   - ऑडियो चंक्स की रियल-टाइम स्ट्रीमिंग, जिससे पूरी फाइल जनरेट होने से पहले ही प्लेबैक तुरंत शुरू हो जाता है।
   - प्ले, पॉज, रिज्यूम और बोलने की गति (Speaking Rate) को कस्टमाइज़ करने की सुविधा।

---

## प्रिव्रो के मुख्य टूल्स (Privro Tools)

प्रिव्रो (Privro) स्थानीय और गोपनीयता-केंद्रित (Local-first) प्रोडक्टिविटी टूल्स का एक आधुनिक ब्राउज़र सुइट है। ये टूल्स बिना किसी साइन-अप, बिना API की, बिना फ़ाइल अपलोड और बिना किसी सीमा (Quota) के 100% आपके डिवाइस पर चलते हैं।

| टूल्स और मुख्य पेज (Tools & Pages) | यह टूल क्या करता है (What it does) |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [फ्री लोकल ऑडियो ट्रांसक्रिप्शन (Whisper AI)](https://privro.com/hi/transcribe) | 99 भाषाओं में OpenAI Whisper (Tiny से Large Turbo) के साथ ऑन-डिवाइस ऑडियो से टेक्स्ट कनवर्टर। कोई फाइल अपलोड नहीं, कोई लिमिट नहीं और किसी अकाउंट की जरूरत नहीं। |
| [MP4 से टेक्स्ट कनवर्टर (MP4 to Text)](https://privro.com/hi/mp4-to-text) | मुफ़्त ऑनलाइन MP4 वीडियो से टेक्स्ट कनवर्टर। वीडियो को टेक्स्ट ट्रांसक्रिप्ट (TXT, DOCX, PDF) या SRT/VTT सबटाइटल में लोकल Whisper तकनीक से बदलें। |
| [कैप्शन स्टूडियो - वीडियो सबटाइटल एडिटर](https://privro.com/hi/caption-studio) | वीडियो में ऑटोमैटिक सबटाइटल और कराओके एनिमेशन जोड़ें। क्लाइंट-साइड FFmpeg द्वारा 5 आस्पेक्ट रेशियो में 4K रेजोल्यूशन तक बिना वॉटरमार्क वीडियो रेंडरिंग। |
| [पाइपर न्यूरल टेक्स्ट टू स्पीच स्टूडियो](https://privro.com/hi/piper-voice) | प्रिव्रो का इन-ब्राउज़र मल्टीलिंगुअल न्यूरल टेक्स्ट टू स्पीच स्टूडियो। 300+ आवाजें, मल्टी-स्पीकर चयन, WebGPU एक्सेलेरेशन और ओरिजिनल WAV ऑडियो एक्सपोर्ट। |
| [फ्री टेक्स्ट टू स्पीच जनरेटर](https://privro.com/hi/text-to-speech) | तेज़ और सुरक्षित ऑनलाइन टेक्स्ट टू स्पीच कनवर्टर। किसी भी टेक्स्ट को बिना क्लाउड पर भेजे ब्राउज़र में स्पष्ट आवाज़ में बदलें। |
| [लोकल एआई वॉइस ऐप (Local AI Voice App)](https://voice.privro.com) | स्टैंडअलोन डुअल-इंजन न्यूरल वॉइस जनरेटर (Piper TTS और Kokoro TTS) जो सीधे ब्राउज़र में चलता है (यह रिपॉजिटरी)। |
| [Otter.ai अल्टरनेटिव (मुफ़्त और असीमित)](https://privro.com/hi/alternatives/otter) | प्रिव्रो के फ्री ऑन-डिवाइस अनलिमिटेड ब्राउज़र ट्रांसक्रिप्शन की तुलना Otter के क्लाउड बॉट और मासिक शुल्क से करें। |
| [Happy Scribe अल्टरनेटिव (ज़ीरो-अपलोड)](https://privro.com/hi/alternatives/happyscribe) | प्रिव्रो के ज़ीरो-अपलोड कैप्शन स्टूडियो और लोकल व्हिस्पर ट्रांसक्रिप्शन की तुलना Happy Scribe के महंगे क्लाउड प्लान्स और मिनट सीमाओं से करें। |
| [प्रिव्रो एआई प्राइसिंग और प्लान्स](https://privro.com/hi/pricing) | हमेशा के लिए मुफ़्त ऑन-डिवाइस टूल्स, साथ ही वैकल्पिक क्लाउड ट्रांसक्रिप्शन सब्सक्रिप्शन और पे-एज़-यू-गो क्रेडिट पैक्स। |

---

## प्रिव्रो पर टेक्स्ट टू स्पीच (Text to Speech on Privro)

प्रिव्रो गोपनीयता, गति और सरलता के लिए डिज़ाइन किए गए तीन अलग-अलग माध्यमों से ज़ीरो-अपलोड, क्लाइंट-साइड टेक्स्ट टू स्पीच प्रदान करता है:

- **[पाइपर वॉइस स्टूडियो (Piper Voice Studio)](https://privro.com/hi/piper-voice):** प्रिव्रो में एकीकृत पूर्ण-सुविधा संपन्न वॉइस स्टूडियो। 40+ भाषाओं में 300 से अधिक आवाज़ें खोजें और फ़िल्टर करें, मल्टी-स्पीकर मॉडल के लिए स्पीकर आईडी चुनें, WebGPU और WASM रनटाइम के बीच स्विच करें, मॉडल प्री-कैश करें और दोषरहित WAV ऑडियो डाउनलोड करें।
- **[टेक्स्ट टू स्पीच जनरेटर (Text to Speech Generator)](https://privro.com/hi/text-to-speech):** प्रिव्रो का ऑनलाइन टेक्स्ट-टू-स्पीच पोर्टल, जो कंटेंट क्रिएटर्स, यूट्यूबर्स और डेवलपर्स के लिए त्वरित वॉइस जेनरेशन और गाइड्स प्रदान करता है।
- **[लोकल एआई वॉइस ऐप (Local AI Voice App)](https://voice.privro.com):** इस रिपॉजिटरी से निर्मित स्टैंडअलोन प्रोग्रेसिव वेब ऐप्लिकेशन (PWA), जो Piper TTS न्यूरल जनरेटर और Kokoro TTS स्ट्रीमिंग इंजन के बीच आसान टैब स्विचिंग प्रदान करता है।

### ऑन-डिवाइस प्राइवेसी आर्किटेक्चर (On-Device Privacy Architecture)
सभी आवाज़ें ब्राउज़र Web Workers का उपयोग करके सीधे आपके कंप्यूटर पर सिंथेसाइज़ होती हैं:
- **कोई भी टेक्स्ट किसी बाहरी सर्वर पर नहीं भेजा जाता।**
- **कोई भी ऑडियो इंटरनेट पर रिकॉर्ड या स्टोर नहीं होता।**
- **किसी लॉगिन, अकाउंट या API की (Key) की आवश्यकता नहीं है।**
- वॉइस मॉडल और बाइनरी रनटाइम ब्राउज़र में कैश होने के बाद **बिना इंटरनेट (100% Offline)** काम करता है।

---

## मशीन-रीडेबल स्पेसिफिकेशन (`llms.txt` और `llms-full.txt`)

प्रिव्रो एआई एजेंट्स और वेब क्रॉलर्स के लिए संरचित मशीन-रीडेबल दस्तावेज़ प्रकाशित करता है:

- **संक्षिप्त इंडेक्स (Summary Index):** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **पूर्ण विवरण (Full Specification):** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

ये फाइलें LLM सहायकों, स्वायत्त एजेंट्स और खोज इंजनों को प्रिव्रो के ऑन-डिवाइस प्राइवेसी मॉडल, तकनीकी विनिर्देशों (जैसे Whisper मॉडल साइज़, FFmpeg एक्सपोर्ट प्रोफाइल और Piper न्यूरल वॉइस क्षमताओं), क्लाउड ट्रांसक्रिप्शन पैरामीटर्स और अंतरराष्ट्रीय रूटिंग के बारे में सटीक जानकारी प्रदान करती हैं।

---

## प्रिव्रो पर उपलब्ध 22 भाषाएं (Languages Available on Privro)

प्रिव्रो का पूरा प्लेटफ़ॉर्म **22 भाषाओं** में लोकलाइज़्ड है। अंग्रेजी संस्करण मुख्य डोमेन से संचालित होता है, जबकि प्रत्येक स्थानीयकृत संस्करण अपने समर्पित लैंग्वेज पाथ पर उपलब्ध है:

| भाषा (Language) | मूल नाम (Native Name) | कोड (Code) | मुख्य पेज (Homepage) |
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
| Hebrew | עבריत | `he` | [https://privro.com/he](https://privro.com/he) |

> **ध्यान दें:** [ऑडियो ट्रांसक्रिप्शन वेब ऐप](https://privro.com/hi/transcribe), [कैप्शन स्टूडियो](https://privro.com/hi/caption-studio), और [पाइपर वॉइस](https://privro.com/hi/piper-voice) जैसे प्रमुख टूल्स इन सभी 22 भाषाओं में पूरी तरह से लोकलाइज़्ड हैं।

---

## पाइपर टीटीएस द्वारा समर्थित भाषाएं (Languages Supported by Piper TTS)

Piper TTS में 42 भाषा परिवारों के **58 भाषा और क्षेत्रीय कोड** को कवर करने वाले **300+ ओपन-सोर्स न्यूरल वॉइस चेकपॉइंट्स** शामिल हैं। इन सभी आवाज़ों को सीधे ब्राउज़र में लोड किया जा सकता है:

| भाषा (Language) | मूल नाम (Native Name) | कोड (Code) | क्षेत्र / देश (Region) | उपलब्ध आवाजें (Voices) |
| ------------------- | ------------------------- | --------- | -------------------------------- | ---------------- |
| Arabic (अरबी) | العربية | `ar_JO` | Jordan | 2 आवाजें |
| Bulgarian (बुल्गारियाई) | български | `bg_BG` | Bulgaria | 1 आवाज |
| Bengali (बांग्ला) | বাংলা | `bn_BD` | Bangladesh | 1 आवाज |
| Catalan (कैटलन) | Català | `ca_ES` | Spain | 3 आवाजें |
| Czech (चेक) | Čeština | `cs_CZ` | Czech Republic | 3 आवाजें |
| Welsh (वेल्श) | Cymraeg | `cy_GB` | Great Britain | 2 आवाजें |
| Danish (डेनिश) | Dansk | `da_DK` | Denmark | 1 आवाज |
| German (जर्मन) | Deutsch | `de_DE` | Germany | 10 आवाजें |
| Greek (ग्रीक) | Ελληνικά | `el_GR` | Greece | 3 आवाजें |
| English (UK) | English (UK) | `en_GB` | Great Britain | 11 आवाजें |
| English (US) | English (US) | `en_US` | United States | 27 आवाजें |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 आवाज |
| Spanish (Spain) | Español (España) | `es_ES` | Spain | 5 आवाजें |
| Spanish (Mexico) | Español (México) | `es_MX` | Mexico | 3 आवाजें |
| Estonian (एस्टोनियाई) | eesti | `et_EE` | Estonia | 1 आवाज |
| Basque (बास्क) | Euskara | `eu_ES` | Spain | 2 आवाजें |
| Persian / Farsi (फ़ारसी) | فارسی | `fa_IR` | Iran | 5 आवाजें |
| Finnish (फ़िनिश) | Suomi | `fi_FI` | Finland | 2 आवाजें |
| French (फ़्रेंच) | Français | `fr_FR` | France | 7 आवाजें |
| Hebrew (हिब्रू) | עִבְרִית | `he_IL` | Israel | 1 आवाज |
| Hindi (हिन्दी) | हिन्दी | `hi_IN` | India | 3 आवाजें |
| Hungarian (हंगेरियन) | Magyar | `hu_HU` | Hungary | 3 आवाजें |
| Armenian (आर्मीनियाई) | հայերեն | `hy_AM` | Armenia | 1 आवाज |
| Indonesian (इंडोनेशियाई) | Bahasa Indonesia | `id_ID` | Indonesia | 1 आवाज |
| Icelandic (आइसलैंडिक) | íslenska | `is_IS` | Iceland | 4 आवाजें |
| Italian (इतालवी) | Italiano | `it_IT` | Italy | 4 आवाजें |
| Japanese (जापानी) | 日本語 | `ja_JP` | Japan | 1 आवाज |
| Georgian (जॉर्जियाई) | ქართული ენა | `ka_GE` | Georgia | 1 आवाज |
| Kazakh (कज़ाख) | қазақша | `kk_KZ` | Kazakhstan | 3 आवाजें |
| Korean (कोरियाई) | 한국어 | `ko_KR` | South Korea | 1 आवाज |
| Kurdish (कुर्दिश) | Kurmancî | `ku_TR` | Turkey | 1 आवाज |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxembourg | 1 आवाज |
| Lithuanian (लिथुआनियाई) | Lietuvių | `lt_LT` | Lithuania | 1 आवाज |
| Latvian (लातवियाई) | Latviešu | `lv_LV` | Latvia | 1 आवाज |
| Malayalam (मलयालम) | മലയാളം | `ml_IN` | India | 2 आवाजें |
| Marathi (मराठी) | मराठी | `mr_IN` | India | 1 आवाज |
| Nepali (नेपाली) | नेपाली | `ne_NP` | Nepal | 3 आवाजें |
| Dutch (Belgium) | Nederlands (België) | `nl_BE` | Belgium | 4 आवाजें |
| Dutch (Netherlands)| Nederlands (Nederland) | `nl_NL` | Netherlands | 6 आवाजें |
| Norwegian (नॉर्वेजियन) | Norsk | `no_NO` | Norway | 2 आवाजें |
| Polish (पोलिश) | Polski | `pl_PL` | Poland | 5 आवाजें |
| Portuguese (Brazil) | Português (Brasil) | `pt_BR` | Brazil | 4 आवाजें |
| Portuguese (Portugal)| Português (Portugal) | `pt_PT` | Portugal | 1 आवाज |
| Romanian (रोमानियाई) | Română | `ro_RO` | Romania | 1 आवाज |
| Russian (रूसी) | Русский | `ru_RU` | Russia | 4 आवाजें |
| Slovak (स्लोवाक) | Slovenčina | `sk_SK` | Slovakia | 1 आवाज |
| Slovenian (स्लोवेनियाई) | Slovenščina | `sl_SI` | Slovenia | 1 आवाज |
| Albanian (अल्बानियाई) | shqip | `sq_AL` | Albania | 1 आवाज |
| Serbian (सर्बियाई) | srpski | `sr_RS` | Serbia | 1 आवाज |
| Swedish (स्वीडिश) | Svenska | `sv_SE` | Sweden | 3 आवाजें |
| Swahili (स्वाहिली) | Kiswahili | `sw_CD` | DR Congo | 1 आवाज |
| Telugu (तेलुगु) | తెలుగు | `te_IN` | India | 3 आवाजें |
| Thai (थाई) | ไทย | `th_TH` | Thailand | 1 आवाज |
| Turkish (तुर्की) | Türkçe | `tr_TR` | Turkey | 1 आवाज |
| Ukrainian (यूक्रेनी) | украї́нська мо́ва | `uk_UA` | Ukraine | 5 आवाजें |
| Urdu (उर्दू) | اردو | `ur_PK` | Pakistan | 2 आवाजें |
| Vietnamese (वियतनामी) | Tiếng Việt | `vi_VN` | Vietnam | 3 आवाजें |
| Chinese (चीनी सरल) | 简体中文 | `zh_CN` | China | 4 आवाजें |

---

## तकनीकी आर्किटेक्चर और यह कैसे काम करता है (Technical Architecture)

### 1. पाइपर टीटीएस पाइपलाइन (Piper TTS Pipeline)
```
[यूज़र टेक्स्ट (User Text)]
    │
    ▼
[Web Worker: eSpeak NG फ़ोनेमाइज़र]  ──► टेक्स्ट को ध्वन्यात्मक फ़ोनीम (Phoneme IDs) में बदलता है
    │
    ▼
[Web Worker: ONNX Runtime Web]      ──► WebGPU / WASM के माध्यम से न्यूरल मॉडल (.onnx) रन करता है
    │
    ▼
[PCM ऑडियो बफ़र (Audio Buffer)]     ──► 16-bit PCM 22.05 kHz ऑडियो स्ट्रीम तैयार करता है
    │
    ▼
[Web Audio API / WAV Blob]          ──► तुरंत प्लेबैक और लॉसलेस WAV फ़ाइल डाउनलोड
```

- **ऑफलोडेड CDN रनटाइम:** भारी स्टेटिक बाइनरी फाइल्स (ONNX रनटाइम WASM फाइल्स, eSpeak फोनमाइज़र डेटा) Cloudflare R2 एज स्टोरेज (`VITE_PIPER_CDN_URL`) से सर्व की जाती हैं, जिससे गिट क्लोन और ऐप बंडल हल्का रहता है।
- **ब्राउज़र मॉडल स्टोरेज:** डाउनलोड किए गए `.onnx` वॉइस मॉडल्स ब्राउज़र के स्थायी `CacheStorage` (`piper-voices-cache-v1`) में सेव हो जाते हैं। इसके बाद दोबारा आने पर बिना किसी नेटवर्क डाउनलोड के तुरंत वॉइस जनरेट होती है।

### 2. कोकोरो टीटीएस पाइपलाइन (Kokoro TTS Pipeline)
- एक समर्पित वेब वर्कर Transformers.js के माध्यम से `onnx-community/Kokoro-82M-v1.0-ONNX` मॉडल को इनिशियलाइज़ करता है।
- ऑडियो चंक्स रियल-टाइम में यूआई पर स्ट्रीम होते हैं, जिससे आगे के वाक्यों का संश्लेषण जारी रहने के दौरान ही तुरंत ऑडियो सुनना शुरू हो जाता है।
- प्ले, पॉज, रिज्यूम और वेरिएबल बोलने की गति (0.5x से 2.0x) का पूरा समर्थन।

---

## टेक स्टैक (Tech Stack)

- **फ्रंटएंड फ्रेमवर्क:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **स्टाइलिंग और यूआई:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **टीटीएस (TTS) इंजनों की तकनीक:**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm` द्वारा)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) WebAssembly फोनमाइज़र
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js) द्वारा)
- **हार्डवेयर एक्सेलेरेशन:** WebGPU, साथ में मल्टी-थ्रेडेड WASM SIMD Web Workers पर ऑटो-फॉलबैक
- **आइकन्स और नोटिफिकेशन:** Lucide Icons एवं Sonner टोस्ट नोटिफिकेशन

---

## शुरुआत कैसे करें (Getting Started)

### पूर्व-आवश्यकताएं (Prerequisites)
- Node.js 18 या उससे नया संस्करण।
- WebAssembly सपोर्ट वाला आधुनिक वेब ब्राउज़र। अधिकतम गति के लिए WebGPU सपोर्ट वाले Google Chrome या Microsoft Edge की सिफारिश की जाती है।

### इंस्टॉलेशन (Installation)

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### पर्यावरण कॉन्फ़िगरेशन (Environment Configuration)

`.env.example` को `.env` में कॉपी करें:

```bash
cp .env.example .env
```

`VITE_PIPER_CDN_URL` में अपना Cloudflare R2 CDN बकेट एंडपॉइंट सेट करें:

```env
VITE_PIPER_CDN_URL="https://your-bucket-subdomain.r2.dev"
```

### डेवलपमेंट सर्वर (Development)

```bash
npm run dev
```

अपने ब्राउज़र में [http://localhost:3000/](http://localhost:3000/) खोलें।

### प्रोडक्शन बिल्ड (Production Build)

```bash
npm run build    # प्रोडक्शन बंडल को /dist में कंपाइल करता है
npm run preview  # प्रोडक्शन बिल्ड का लोकल प्रीव्यू दिखाता है
```

---

## अक्सर पूछे जाने वाले प्रश्न (FAQ)

### फ्री एआई वॉइस और टेक्स्ट टू स्पीच जनरेटर (Free AI Voice & Text to Speech)

#### क्या यह एआई वॉइस जनरेटर सच में 100% मुफ़्त और असीमित (Unlimited) है?
हाँ, बिल्कुल। लोकली आवाज़ जनरेट करने के लिए कोई दैनिक शब्द सीमा (Word Cap), करैक्टर लिमिट, टोकन या मासिक शुल्क नहीं है। चूंकि सभी न्यूरल मॉडल सीधे आपके कंप्यूटर/ब्राउज़र में आपके अपने हार्डवेयर (CPU या GPU) का उपयोग करके चलते हैं, इसलिए हमारे ऊपर कोई सर्वर कंप्यूटिंग लागत नहीं आती और यह सेवा आपके लिए हमेशा मुफ़्त रहती है।

#### क्या मैं इस एआई आवाज़ का उपयोग यूट्यूब (YouTube) वीडियो और इंस्टाग्राम रील्स में कर सकता हूँ? क्या चैनल मोनेटाइज होगा?
हाँ! जनरेट की गई ऑडियो 100% कमर्शियल उपयोग के लिए मान्य है और इस पर कोई कॉपीराइट क्लेम या वॉटरमार्क नहीं आता। यूट्यूब की मोनेटाइजेशन पॉलिसी के अनुसार, यदि आपका वीडियो ओरिजिनल है और उसमें वैल्यू-ऐड (जैसे अच्छी स्क्रिप्ट, वीडियो एडिटिंग या ट्यूटोरियल) है, तो नेचुरल एआई वॉइस वाले चैनल्स आसानी से मोनेटाइज होते हैं।

#### क्या यह टेक्स्ट टू वॉइस जनरेटर मेरे टेक्स्ट या ऑडियो को किसी सर्वर पर अपलोड करता है?
नहीं। सब कुछ 100% आपके डिवाइस पर सुरक्षित रहता है। जब आप टेक्स्ट पेस्ट करके "Generate" दबाते हैं, तो न्यूरल नेटवर्क आपके कंप्यूटर के बैकग्राउंड Web Worker में आवाज़ बनाता है। आपका कोई भी संवेदनशील टेक्स्ट या जनरेट किया गया भाषण कभी भी इंटरनेट पर किसी सर्वर पर नहीं भेजा जाता।

#### वॉइस जनरेटर में कितनी भाषाएं और आवाजें उपलब्ध हैं?
- **Piper TTS:** 40 से अधिक भाषाओं और 58 क्षेत्रीय लहजों में **300+ न्यूरल आवाजें** सपोर्ट करता है, जिसमें भारतीय हिंदी (`hi_IN`), अमेरिकी अंग्रेजी, ब्रिटिश अंग्रेजी, स्पेनिश, फ्रेंच, जर्मन, जापानी, चीनी, अरबी, रूसी आदि शामिल हैं।
- **Kokoro TTS:** 82 मिलियन पैरामीटर वाले डीप लर्निंग मॉडल के साथ धाराप्रवाह और स्पष्ट अंग्रेजी ऑडियो प्रदान करता है।

#### क्या मैं जनरेट की गई वॉइस फाइल को डाउनलोड कर सकता हूँ?
हाँ। जनरेशन पूरा होते ही आप पूरी ऑडियो को स्टैंडर्ड, लॉसलेस **16-बिट PCM WAV फ़ाइल (22.05 kHz)** के रूप में एक क्लिक में डाउनलोड कर सकते हैं। आप इसे सीधे Premiere Pro, DaVinci Resolve, CapCut या Filmora में बिना किसी पाबंदी के इस्तेमाल कर सकते हैं।

#### क्या यह वॉइस जनरेटर बिना इंटरनेट (Offline) भी काम करता है?
हाँ, पहली बार लोड होने के बाद। जब आप पहली बार कोई वॉइस चुनते हैं, तो ब्राउज़र उस मॉडल फ़ाइल (~20 MB से ~60 MB) को डाउनलोड करके आपके ब्राउज़र के स्थानीय `CacheStorage` में सुरक्षित रख लेता है। इसके बाद बिना इंटरनेट कनेक्शन के भी आप कभी भी तुरंत टेक्स्ट से आवाज़ बना सकते हैं।

#### टेक्स्ट टू स्पीच के लिए WebGPU क्यों आवश्यक है?
WebGPU ब्राउज़र को सीधे आपके ग्राफ़िक्स कार्ड (GPU) पर समानांतर न्यूरल टेंसर ऑपरेशन चलाने की अनुमति देता है। इससे आवाज़ का निर्माण सामान्य CPU की तुलना में 3 से 5 गुना अधिक तेज़ हो जाता है। यदि आपके डिवाइस में GPU नहीं है, तो ऐप अपने-आप मल्टी-थ्रेडेड WebAssembly (WASM) पर स्विच हो जाता है ताकि यह हर कंप्यूटर पर सुचारू रूप से चले।

---

### फ्री ऑडियो से टेक्स्ट, वीडियो से टेक्स्ट और ट्रांसक्रिप्शन (Audio to Text & Transcription)

#### ऑडियो को टेक्स्ट में मुफ़्त कैसे बदलें (Audio to Text Hindi)?
आप [प्रिव्रो के फ्री लोकल ट्रांसक्रिप्शन टूल](https://privro.com/hi/transcribe) का उपयोग करके किसी भी ऑडियो फ़ाइल को तुरंत टेक्स्ट में बदल सकते हैं। बस अपनी ऑडियो फ़ाइल (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS या WEBM) ड्रैग और ड्रॉप करें, भाषा चुनें (या ऑटो-डिटेक्ट पर छोड़ें), और OpenAI Whisper आपके ब्राउज़र में इसे ट्रांसक्राइब कर देगा। काम पूरा होने पर आप टेक्स्ट या सबटाइटल फ़ाइल तुरंत डाउनलोड कर सकते हैं।

#### वीडियो को टेक्स्ट में कैसे बदलें (Video to Text Converter)?
वीडियो को टेक्स्ट में बदलने के लिए, अपनी MP4, WEBM या MOV फ़ाइल को [प्रिव्रो लोकल ट्रांसक्रिप्शन](https://privro.com/hi/transcribe) या समर्पित [MP4 से टेक्स्ट कनवर्टर](https://privro.com/hi/mp4-to-text) में डालें। ब्राउज़र भारी वीडियो फ़ाइल को अपलोड किए बिना सीधे ऑडियो निकालता है और हर बोले गए शब्द को टाइमस्टैम्प और सबटाइटल (SRT/VTT) में बदल देता है।

#### क्या फ्री ट्रांसक्रिप्शन पर कोई मिनट सीमा या फ़ाइल साइज़ लिमिट है?
नहीं। क्लाउड ट्रांसक्रिप्शन सेवाओं के विपरीत, जो मुफ्त उपयोगकर्ताओं को प्रति माह केवल 10 या 15 मिनट तक सीमित करती हैं, प्रिव्रो के ऑन-डिवाइस ट्रांसक्रिप्शन में **शून्य मिनट की सीमा और असीमित फ़ाइल गणना** है। आप 5 मिनट का वॉइस मेमो हो या 4 घंटे का लंबा कॉलेज लेक्चर, सब कुछ पूरी तरह मुफ़्त में ट्रांसक्राइब कर सकते हैं।

#### ट्रांसक्रिप्ट किन-किन फ़ॉर्मेट्स में डाउनलोड की जा सकती है?
आप अपने पूर्ण ट्रांसक्रिप्ट को शब्द-स्तरीय टाइमस्टैम्प के साथ 8 अलग-अलग प्रारूपों में एक्सपोर्ट कर सकते हैं:
- साधारण टेक्स्ट: `TXT`
- सबटाइटल: `SRT`, `VTT`
- डेटा और स्प्रेडशीट: `CSV`, `JSON`, `XLSX`
- फॉर्मैटेड दस्तावेज़: Word `DOCX`, `PDF`

---

### वीडियो सबटाइटल और ऑटो कैप्शन स्टूडियो (Video Captions & Subtitle Studio)

#### क्या मैं अपने वीडियो में मुफ़्त में स्टाइलिश सबटाइटल जोड़ सकता हूँ?
हाँ। [कैप्शन स्टूडियो (Caption Studio)](https://privro.com/hi/caption-studio) की मदद से आप वीडियो अपलोड कर सकते हैं, ऑन-डिवाइस Whisper AI से ऑटोमैटिक सबटाइटल जनरेट कर सकते हैं, फॉन्ट और एनिमेशन स्टाइल चुन सकते हैं और उन्हें सीधे वीडियो में बर्न कर सकते हैं। वीडियो एन्कोडिंग पूरी तरह से ब्राउज़र में FFmpeg द्वारा की जाती है, जो बिना किसी वॉटरमार्क के **4K रेजोल्यूशन** तक वीडियो एक्सपोर्ट करती है।

#### कैप्शन स्टूडियो किन आस्पेक्ट रेशियो (Aspect Ratios) को सपोर्ट करता है?
आप अपने सबटाइटल वाले वीडियो को सभी मुख्य सोशल मीडिया प्लेटफ़ॉर्म के लिए कस्टमाइज़ कर सकते हैं:
- **9:16:** Instagram Reels, YouTube Shorts, TikTok
- **16:9:** YouTube लॉन्ग वीडियो, लैंडस्केप डिस्प्ले
- **1:1:** Instagram चौकोर फ़ीड, LinkedIn
- **4:5:** Instagram पोर्ट्रेट फ़ीड
- **3:2:** फ़ोटोग्राफ़ी और डेस्कटॉप स्क्रीन

---

### प्लेटफ़ॉर्म, भाषाएं और गोपनीयता (Platform, Languages & Privacy)

#### प्रिव्रो प्लेटफ़ॉर्म पर कुल कितनी भाषाएं उपलब्ध हैं?
प्रिव्रो पूरी तरह से **22 भाषाओं** में उपलब्ध है: अंग्रेजी, स्पैनिश, पुर्तगाली, इतालवी, जर्मन, फ्रेंच, हिन्दी, इंडोनेशियाई, पोलिश, जापानी, डच, स्वीडिश, डेनिश, नॉर्वेजियन, फिनिश, चेक, तुर्की, रूसी, कोरियाई, पारंपरिक चीनी, अरबी और हिब्रू। प्रत्येक भाषा का अपना लोकलाइज़्ड होमपेज `https://privro.com/{locale}` पर स्थित है।

#### `llms.txt` और `llms-full.txt` क्या हैं?
[privro.com/llms.txt](https://privro.com/llms.txt) और [privro.com/llms-full.txt](https://privro.com/llms-full.txt) नए `llms.txt` मानक का पालन करने वाली संरचित, मशीन-रीडेबल दस्तावेज़ फ़ाइलें हैं। ये एआई सहायकों और सर्च इंजन क्रॉलर्स को प्रिव्रो के ऑन-डिवाइस प्राइवेसी मॉडल, Whisper और Piper विनिर्देशों, कैप्शन स्टूडियो क्षमताओं और प्राइसिंग टियर्स का सत्यापित तकनीकी डेटा प्रदान करती हैं।

---

## आभार और श्रेय (Credits & Attributions)

- माइकल हैनसेन और Rhasspy प्रोजेक्ट द्वारा [Piper](https://github.com/rhasspy/piper) और [Piper Voices](https://huggingface.co/rhasspy/piper-voices)।
- Hexgrad द्वारा [Kokoro TTS](https://github.com/hexgrad/kokoro) मॉडल।
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web), और [Transformers.js](https://huggingface.co/docs/transformers.js)।
- माइक्रोसॉफ्ट द्वारा [ONNX Runtime Web](https://onnxruntime.ai/)।
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) ध्वन्यात्मक लाइब्रेरी।

---

## लाइसेंस (License)

Apache License 2.0. विस्तृत जानकारी के लिए [LICENSE](LICENSE) फ़ाइल देखें।
