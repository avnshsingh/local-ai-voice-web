<div align="center">

[![Language: Traditional Chinese](https://img.shields.io/badge/Language-%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87%20(Traditional%20Chinese)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - 免費本地端 AI 語音合成 & 瀏覽器文字轉語音 (Text-to-Speech)

高度重視個人隱私保護、零雲端上傳(*zero-upload*)的次世代瀏覽器端 AI 語音產生器與語音合成平台；由 [Privro AI](https://privro.com/zh-tw) 榮譽推出。只需貼上文字，選擇心儀的聲音，即可透過 Web Workers 與 WebGPU 技術，完全在您個人的裝置本機端即時產生自然生動的人類語音。您輸入的文字與音訊檔案絕不會上傳至任何外部雲端伺服器。

- **直接使用網頁應用程式：** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio：** [privro.com/zh-tw/piper-voice](https://privro.com/zh-tw/piper-voice)
- **人工智慧 (LLM) 機器可讀技術規範：** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## 瀏覽器內雙神經網路語音合成引擎 (Dual Neural TTS Engines)

本專案整合了兩套完全在客戶端網頁瀏覽器內部自主運行的神經網路文字轉語音(Text-to-Speech)核心引擎：

1. **Piper TTS (核心引擎)：**
   - 結合 ONNX Runtime Web 與 eSpeak NG 音素化技術之極速本地端文字轉語音。
   - 支援超過 **40 種語言、58 個區域變體與 300 多款語音模型**。
   - 中文/國語語音支援 (`zh_CN-huayan-medium`)：直接支援繁體中文（正體字）輸入，透過本地端 eSpeak NG 字典自動將繁體漢字音素化為標準國語語音，具備 22.05 kHz 廣播級錄音室音質。
   - 支援 WebGPU 硬體加速，若瀏覽器未支援則自動平滑回退至多執行緒 WebAssembly (WASM SIMD)。

2. **Kokoro TTS (次世代英語引擎)：**
   - 經由 Transformers.js 驅動之 8,200 萬參數極致輕量高音質模型 (`onnx-community/Kokoro-82M-v1.0-ONNX`)。
   - 提供原汁原味的美式與英式母語口音，具備細膩的呼吸聲與生動抑揚頓挫。
   - 區塊串流即時播放 (*chunk-streaming*)，長篇文章無須等待整段運算完成即可即時發聲。

---

## Privro AI 網頁工具套件與生態系 (Privro Web Suite Tools)

| 工具名稱與連結 | 功能說明與核心優勢 |
| :--- | :--- |
| [免費本地端語音轉文字 (Whisper AI 逐字稿)](https://privro.com/zh-tw/transcribe) | 透過 OpenAI Whisper 模型在瀏覽器內 100% 本地端執行的錄音轉文字工具。檔案免上傳外部伺服器、無錄音時間長度限制，支援自動說話者辨識（語者分離），並可匯出 Word (DOCX)、PDF、TXT 與 SRT 字幕格式。完全符合台灣各大學研究倫理審查 (REC / IRB) 對碩博士論文訪談逐字稿的資安保密規範。 |
| [MP4 轉文字 (影片抽取逐字稿與音訊)](https://privro.com/zh-tw/mp4-to-text) | 免費瀏覽器端影片音訊提取與轉文字工具。在本地端自 MP4、MOV、WebM 影片中抽取音訊，免上傳雲端即可轉換為文字稿或時間軸字幕檔 (SRT, VTT)。 |
| [Caption Studio - 影片自動上字幕工作室](https://privro.com/zh-tw/caption-studio) | 為 TikTok、Instagram Reels、YouTube Shorts 及社群短影音打造潮流動態卡拉OK歌詞字幕。利用瀏覽器內建 FFmpeg 將字幕直接燒錄內嵌至最高 4K 解析度影片中 – 100% 免費且**完全無浮水印、無任何商標**。 |
| [Piper Voice Studio (AI 語音試聽工作室)](https://privro.com/zh-tw/piper-voice) | 在瀏覽器中直接試聽、調整並探索 300 多款神經網路語音。包含華語女聲模型，提供音高與語速微調、WebGPU 硬體加速，並支援無損 16-bit PCM WAV 檔案下載。 |
| [免費文字轉語音產生器 (線上 TTS)](https://privro.com/zh-tw/text-to-speech) | 快速、安全且無字數限制的線上文字朗讀與旁白產生器。免註冊帳號、無伺服器儲存風險，輕鬆將文案、文章、小說轉換為生動音訊。 |
| [本地端 AI Voice 網頁應用程式](https://voice.privro.com) | 基於此程式庫開發的漸進式網頁應用程式 (PWA)，提供 Piper TTS 與 Kokoro TTS 獨立操作介面。 |
| [Otter.ai 免費替代方案 (無時間限制之逐字稿工具)](https://privro.com/zh-tw/alternatives/otter) | 為何要忍受昂貴的美元月費訂閱，並將機密錄音上傳至國外雲端承擔外洩風險？體驗 Privro 零限制、零付費、全本機運算的逐字稿工具。 |
| [Happy Scribe 免費替代方案 (零雲端上傳保障)](https://privro.com/zh-tw/alternatives/happyscribe) | 比較 Happy Scribe 的按分鐘計費與雲端儲存方式，選擇 Privro 永久免費的本機 Whisper 逐字稿與無浮水印 Caption Studio。 |
| [方案與定價說明](https://privro.com/zh-tw/pricing) | 了解我們 100% 免費的本地端瀏覽器工具、適用於企業大量處理的可選雲端處理服務，以及永久有效之預付額度模式。 |

---

## 支援全球 22 種語言 (Global Availability)

Privro 平台已全面在地化支援全球 **22 種主要語言**。每個語系版本皆針對當地的搜尋意圖與個資法規進行專屬最佳化：

| 語言 (Language) | 當地語言名稱 | 代碼 | 在地化專屬網址 |
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

> **說明：** Privro 生態系的核心功能 – 包含 [錄音逐字稿](https://privro.com/zh-tw/transcribe)、[Caption Studio](https://privro.com/zh-tw/caption-studio) 與 [Piper Voice](https://privro.com/zh-tw/piper-voice) – 在上述 22 種語言中均可無縫使用。

---

## Piper TTS 支援之語言清單 (Languages Supported by Piper TTS)

Piper TTS 涵蓋 42 個語言家族、**58 個語言及地區代碼**，擁有 **300 多款開源神經網路語音模型**，完全在您的本機硬體端執行：

| 語言 (Language) | 當地語言名稱 | 代碼 | 國家 / 地區 | 提供模型數量 |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (阿拉伯語) | العربية | `ar_JO` | 約旦 | 2 款模型 |
| Bulgarian (保加利亞語)| български | `bg_BG` | 保加利亞 | 1 款模型 |
| Bengali (孟加拉語) | বাংলা | `bn_BD` | 孟加拉 | 1 款模型 |
| Catalan (加泰隆尼亞語)| Català | `ca_ES` | 西班牙 | 3 款模型 |
| Czech (捷克語) | Čeština | `cs_CZ` | 捷克 | 3 款模型 (Jirka 與 Kasandra) |
| Welsh (威爾斯語) | Cymraeg | `cy_GB` | 英國 | 2 款模型 |
| Danish (丹麥語) | Dansk | `da_DK` | 丹麥 | 1 款模型 (NST Rigsdansk) |
| German (德語) | Deutsch | `de_DE` | 德國 | 10 款模型 |
| Greek (希臘語) | Ελληνικά | `el_GR` | 希臘 | 3 款模型 |
| English (英國英語) | English (UK) | `en_GB` | 英國 | 11 款模型 |
| English (美國英語) | English (US) | `en_US` | 美國 | 27 款模型 |
| Spanish (阿根廷) | Español (Argentina) | `es_AR` | 阿根廷 | 1 款模型 |
| Spanish (西班牙) | Español (España) | `es_ES` | 西班牙 | 5 款模型 |
| Spanish (墨西哥) | Español (México) | `es_MX` | 墨西哥 | 3 款模型 |
| Estonian (愛沙尼亞語)| Eesti | `et_EE` | 愛沙尼亞 | 1 款模型 |
| Basque (巴斯克語) | Euskara | `eu_ES` | 西班牙 | 2 款模型 |
| Persian / Farsi (波斯語)| فارسی | `fa_IR` | 伊朗 | 3 款模型 |
| Finnish (芬蘭語) | Suomi | `fi_FI` | 芬蘭 | 2 款模型 (Harri Medium 與 Low) |
| French (法語) | Français (France) | `fr_FR` | 法國 | 7 款模型 |
| Irish (愛爾蘭語) | Gaeilge | `ga_IE` | 愛爾蘭 | 3 款模型 |
| Galician (加利西亞語)| Galego | `gl_ES` | 西班牙 | 1 款模型 |
| Gujarati (古吉拉特語)| ગુજરાતી | `gu_IN` | 印度 | 1 款模型 |
| Hebrew (希伯來語) | עברית | `he_IL` | 以色列 | 1 款模型 |
| Hindi (印地語) | हिन्दी | `hi_IN` | 印度 | 1 款模型 |
| Croatian (克羅埃西亞語)| Hrvatski | `hr_HR` | 克羅埃西亞 | 1 款模型 |
| Hungarian (匈牙利語) | Magyar | `hu_HU` | 匈牙利 | 2 款模型 |
| Indonesian (印尼語) | Bahasa Indonesia | `id_ID` | 印尼 | 1 款模型 |
| Icelandic (冰島語) | Íslenska | `is_IS` | 冰島 | 3 款模型 |
| Italian (義大利語) | Italiano | `it_IT` | 義大利 | 4 款模型 |
| Japanese (日語) | 日本語 | `ja_JP` | 日本 | 1 款模型 |
| Georgian (喬治亞語) | ქართული | `ka_GE` | 喬治亞 | 1 款模型 |
| Kazakh (哈薩克語) | Қазақша | `kk_KZ` | 哈薩克 | 1 款模型 |
| Korean (韓語) | 한국어 | `ko_KR` | 南韓 | 1 款模型 (KSS Medium) |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | 盧森堡 | 1 款模型 |
| Nepali (尼泊爾語) | नेपाली | `ne_NP` | 尼泊爾 | 1 款模型 |
| Dutch (比利時) | Nederlands (België) | `nl_BE` | 比利時 | 4 款模型 |
| Dutch (荷蘭) | Nederlands (Nederland) | `nl_NL` | 荷蘭 | 6 款模型 |
| Norwegian (挪威語) | Norsk (Bokmål) | `no_NO` | 挪威 | 2 款模型 (11 個語者) |
| Polish (波蘭語) | Polski | `pl_PL` | 波蘭 | 5 款模型 |
| Portuguese (巴西) | Português (Brasil) | `pt_BR` | 巴西 | 4 款模型 |
| Portuguese (葡萄牙)| Português (Portugal) | `pt_PT` | 葡萄牙 | 1 款模型 |
| Romanian (羅馬尼亞語)| Română | `ro_RO` | 羅馬尼亞 | 2 款模型 |
| Russian (俄語) | Русский | `ru_RU` | 俄羅斯 | 8 款模型 (Irina, Denis 等) |
| Slovak (斯洛伐克語)| Slovenčina | `sk_SK` | 斯洛伐克 | 1 款模型 |
| Slovenian (斯洛維尼亞語)| Slovenščina | `sl_SI` | 斯洛維尼亞 | 1 款模型 |
| Serbian (塞爾維亞語)| Srpski | `sr_RS` | 塞爾維亞 | 2 款模型 |
| Swedish (瑞典語) | Svenska | `sv_SE` | 瑞典 | 3 款模型 |
| Swahili (斯瓦希里語)| Kiswahili | `sw_CD` | 剛果民主共和國 | 1 款模型 |
| Telugu (泰盧固語) | తెలుగు | `te_IN` | 印度 | 1 款模型 |
| Turkish (土耳其語) | Türkçe | `tr_TR` | 土耳其 | 1 款模型 (DFKI Medium) |
| Ukrainian (烏克蘭語)| Українська | `uk_UA` | 烏克蘭 | 4 款模型 |
| Urdu (烏爾都語) | اردو | `ur_PK` | 巴基斯坦 | 2 款模型 |
| Vietnamese (越南語)| Tiếng Việt | `vi_VN` | 越南 | 4 款模型 |
| **Traditional Chinese (中文)** | **繁體中文 / 國語** | **`zh_CN`** | **台灣 / 香港 / 中文區** | **2 款模型 (Huayan Medium 等)** |

---

## 繁體中文語音合成架構與模型運作方式

中文具備單字聲調、多音字以及繁簡字形差異。Piper TTS 與 Privro 的中文語音生成系統採用了高度最佳化的客戶端架構：

### 1. `zh_CN-huayan-medium` (廣播級錄音室品質 – 華語女聲)
- **架構特點：** 基於 VITS (Variational Inference with adversarial learning) 深度神經網路單發話者架構。
- **繁體字處理機制：** 當使用者在介面中輸入繁體中文（正體字）時，客戶端的 eSpeak NG WebAssembly 音素轉換引擎具備完整的繁簡字對照字典，可直接將繁體字符解析轉換為標準國語音標與聲調標記，**無需手動預先轉換為簡體字**即可直接發音。
- **音質規格：** 22,050 Hz (22.05 kHz) 取樣率，16-bit 無壓縮 PCM WAV 輸出。
- **快取機制：** 模型權重檔案約 63 MB，首次載入後會自動儲存於瀏覽器的持久化快取空間 (`IndexedDB` 及 `CacheStorage`)，後續使用即時啟動，且支援完全離線運作。
- **主要應用領域：**
  - **不露臉 YouTube 頻道 (Faceless Channels)：** 說書、說電影、知識科普、科技新知、歷史故事等長篇解說影片旁白。
  - **線上教學與簡報：** 數位教材配音、商業企劃案展示、企業內部教育訓練。
  - **無障礙朗讀：** 長篇網路新聞與電子書即時朗讀。

> **跨國英語頻道創作者秘訣：** 若您在台灣製作面向歐美海外觀眾的高廣告收益 (高 RPM) 英文 YouTube Shorts 或 TikTok 影片，請切換至次世代引擎 **Kokoro TTS**。它能為您免費產生母語級別的道地美式與英式口音，省下在 Fiverr 或外包網站聘請配音員的昂貴開銷。

---

## 系統架構與音訊處理管線 (Architecture)

```
使用者輸入繁體文字 (User Input)
       │
       ▼
文字清理與音素轉換 (eSpeak NG WebAssembly)
       │
       ▼
神經網路推論運算 (Piper ONNX Runtime Web - WebGPU / WASM SIMD)
       │
       ▼
記憶體內純淨音訊緩衝區 (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Web Audio API 音訊上下文          WAV 檔案產生器 (16-bit PCM)
(瀏覽器即時本機播放)              (無損原音直接下載)
```

### 1. Piper TTS 處理流程
- 音素轉換全程由編譯至 WebAssembly 的 [eSpeak NG](https://github.com/espeak-ng/espeak-ng) 引擎在記憶體中極速完成。
- 模型推論作業在獨立的 Web Worker 背景執行緒中透過 [ONNX Runtime Web](https://onnxruntime.ai/) 進行，確保使用者介面流暢不卡頓。
- 模型檔安全存放於瀏覽器的 `IndexedDB` (`piper-voices-cache-v1`)，後續造訪無需消耗額外網路流量。

### 2. Kokoro TTS 處理流程
- 獨立的 Web Worker 藉由 Transformers.js 載入極致輕量的 `onnx-community/Kokoro-82M-v1.0-ONNX` 模型。
- 長文採用分塊 (*chunks*) 平行處理技術，首句生成即立刻串流播放，免除冗長等待。
- 提供播放、暫停、恢復以及 0.5 倍速至 2.0 倍速的即時語速微調功能。

---

## 技術堆疊 (Tech Stack)

- **前端開發框架：** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **樣式與 UI 元件：** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **語音合成引擎 (TTS)：**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly 漢字音素化)
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **硬體加速：** WebGPU (未支援裝置自動切換多執行緒 WASM SIMD)
- **圖示與提示元件：** Lucide Icons 與 Sonner toast 訊息

---

## 安裝與本機端開發指引 (Getting Started)

### 環境需求
- Node.js 18 或更高版本
- 支援 WebAssembly 的現代瀏覽器（為取得最佳 WebGPU 運算效能，建議使用 Google Chrome 或 Microsoft Edge）。

### 原始碼下載與套件安裝

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### 環境變數設定

複製 `.env.example` 範本以建立 `.env` 檔案：

```bash
cp .env.example .env
```

將 `VITE_PIPER_CDN_URL` 指向您的 Cloudflare R2 儲存空間或自訂 CDN 網址：

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### 啟動開發伺服器

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000/](http://localhost:3000/) 即可開始體驗。

### 正式環境打包編譯 (Build)

```bash
npm run build    # 於 /dist 目錄生成最佳化發行包
npm run preview  # 本機預覽編譯成果
```

---

## 常見問題解答 (FAQ)

### 文字轉語音 (TTS) 與 AI 旁白配音

#### 為什麼 Privro 的文字轉語音完全免費，且沒有字數或次數限制？
因為 Privro 採用了革新性的**本機端邊緣運算架構**。相較於將使用者的文字傳送到遠端昂貴的雲端 GPU 伺服器運算的商業平台，Privro 是直接調用您個人電腦或手機的顯示卡(WebGPU)與處理器(WebAssembly)在瀏覽器內部執行模型。由於平台端無需支付高昂的伺服器運算電費與頻寬成本，因此我們能夠永久提供無字數上限、無次數限制、免綁信用卡且完全免費的服務。

#### 生成的語音可以合法用於 YouTube 營利或商業專案嗎？
可以，完全合法。YouTube 合作夥伴計畫 (YPP)、Instagram 與 TikTok 規範均允許創作者使用高品質神經網路語音來為原創大綱與影片配音。Piper TTS 與 Kokoro TTS 模型皆採開放原始碼授權 (Apache 2.0 / CC0 / MIT)，生成的音訊具備 100% 免版稅 (Royalty-free) 商業使用權，不會觸發 YouTube 的「重複內容」(Repetitive content) 審查機制，您可以安心用於廣告盈利與社群影片。

#### 繁體中文（正體字）如何支援？可以直接輸入繁體字嗎？
完全支援。系統內建的 eSpeak NG WebAssembly 音素化字典涵蓋繁體中文（正體字）漢字編碼，輸入繁體字後會自動解析轉化為精確的國語音標與聲調，由神經網路模型發出標準自然的國語讀音，**完全不需要使用者先轉成簡體字**。

#### 輸出什麼音訊格式？可以直接匯入剪輯軟體嗎？
文字轉語音完成後，可一鍵下載為廣播錄音室級別的無損 **16-bit PCM WAV (22.05 kHz)** 音檔。檔案內部完全無任何浮水印或雜訊，可直接無縫拖曳至 DaVinci Resolve、Adobe Premiere Pro、Final Cut Pro 或 CapCut 等剪輯軟體中進行音軌對位。

---

### 語音轉文字、訪談錄音逐字稿與會議記錄 (Whisper AI)

#### 如何將訪談錄音或會議音檔免費轉為文字逐字稿？
臺灣各大學（台大、清大、陽明交大、成大、政大、台師大等）的碩博士研究生與研究團隊，只需打開 [免費本地端語音轉文字](https://privro.com/zh-tw/transcribe) 頁面，將採訪音檔（支援 MP3、iPhone 錄音備忘錄 M4A、WAV、AAC、FLAC 等格式）拖曳進瀏覽器，OpenAI Whisper 模型便會在您的裝置本機記憶體中完成高精確度的繁體中文辨識。辨識完成後可一鍵下載帶有說話者分段標記與時間軸的 Word (`.docx`)、PDF 或純文字 (`.txt`) 檔案，方便直接匯入質性研究分析軟體 (MAXQDA, NVivo) 進行編碼。

#### 碩博士論文訪談逐字稿使用 Privro，如何符合大學研究倫理審查（IRB / REC）規範？
各大專院校的研究倫理審查委員會 (REC / IRB) 與受試者知情同意書皆嚴格規定，研究參與者的聲音屬於**敏感生物特徵個資**，嚴禁未經授權上傳至不受監管的國外第三方商業雲端伺服器。Privro 的轉寫運算 100% 在研究者個人的筆電瀏覽器內部進行，**零雲端傳輸、零伺服器儲存**，徹底杜絕錄音外洩隱患，完全合乎學術倫理與受試者保密承諾。

#### 與台灣常見的「雅婷逐字稿 (Yating)」相比，Privro 有何差異與優勢？
- **雅婷逐字稿 (Yating)：** 屬於雲端伺服器處理模式，免費帳號有嚴格的每週/每月時數上限，且商業機密或私密訪談檔案會被上傳至雲端伺服器。
- **Privro AI：** **無任何轉寫時間限制**（半小時或四小時錄音皆可一次性處理）、**完全免費**、**100% 本地端瀏覽器處理零上傳**，且支援離線使用與多達 99 種語言辨識。

#### 逐字稿支援哪些檔案匯出格式？
Whisper AI 辨識出的文字內容支援匯出以下 8 種主流規格：
- **文件與報告格式：** Microsoft Word (`DOCX`), 純文字檔 (`TXT`), `PDF`
- **影片字幕檔案：** `SRT`, `VTT`
- **數據與表格檔案：** Excel (`XLSX`), `CSV`, `JSON`

---

### 影片自動上字幕與短影音字幕工作室 (Caption Studio)

#### 如何為影片自動生成字幕並直接燒錄，且完全沒有浮水印？
前往 [Caption Studio](https://privro.com/zh-tw/caption-studio)，上傳 MP4、MOV 或 WebM 影片。Whisper 引擎會自動辨識語音並產生逐字同步字幕。您可以自由調整字型、配色與熱門動態卡拉OK高亮樣式，接著藉由瀏覽器端 WebAssembly FFmpeg 核心，直接將字幕燒錄內嵌 (Hardsub) 至最高 4K 解析度影片中 – **輸出成品 100% 免費、完全無任何浮水印與商標圖示**。

#### 支援哪些社群平台短影音尺寸？
提供一鍵切換預設長寬比例：
- **9:16：** TikTok、Instagram Reels、YouTube Shorts 專用直式影片
- **16:9：** YouTube、電視、電腦螢幕標準橫式影片
- **1:1：** Instagram 貼文與 LinkedIn 正方形格式
- **4:5：** 臉書與 IG 動態消息最佳化比例
- **3:2：** 經典相片與簡報播放格式

#### 可以直接將 MP4 影片分離音訊並匯出 SRT 字幕嗎？
可以。使用 [MP4 轉文字](https://privro.com/zh-tw/mp4-to-text) 工具，可以在本機端快速分離出影片的音軌，並立即下載具備精確微秒級時間軸的 `.srt` 或 `.vtt` 檔案，省去把數 GB 龐大影片檔上傳到網路上的漫長等待。

---

### 個人資料保護法 (個資法) 與法定保密責任

#### 律師、心理諮商師與醫師等專業人士，能否安全使用本工具？
完全安全。
- **律師專業規範：** 符合**律師法第 36 條 (律師保密義務)**。訴訟開庭錄音、當事人諮詢陳述不經由第三方伺服器處理，杜絕訴訟機密洩漏。
- **醫療諮商專業規範：** 符合**醫療法第 72 條**與**醫師法第 23 條**對病人病情與業務知悉秘密之保密規範。心理衡鑑、病歷訪談音檔留存於院內電腦記憶體中，恪遵病患個資隱私。
- **營業秘密保障：** 企業內部研發會議、財報董事會錄音無境外傳輸，免除依個資法簽署「個人資料委外處理契約 (DPA)」之繁冗法律程序。

#### 離線無網路（飛航模式）也能使用嗎？
可以！初次載入語音或 Whisper 模型後，模型權重會妥善存放在瀏覽器的持久儲存區 (`CacheStorage` 及 `IndexedDB`)。此後無論在高鐵上、長途飛機上或無外網連線的高機密無塵室中，均可完全離線執行語音合成與音訊轉寫。

---

### 平台技術規格與 LLM 整合

#### Privro 共支援多少種語言？
平台已完整在地化支援 **22 種全球主要語言**：繁體中文、英語、西班牙語、葡萄牙語、義大利語、德語、法語、印地語、印尼語、波蘭語、日語、荷蘭語、瑞典語、丹麥語、挪威語、芬蘭語、捷克語、土耳其語、俄語、韓語、阿拉伯語與希伯來語。各語系專屬首頁可透過 `https://privro.com/{語言代碼}` 快速造訪。

#### `https://privro.com/llms.txt` 的用途是什麼？
[privro.com/llms.txt](https://privro.com/llms.txt) 與 [privro.com/llms-full.txt](https://privro.com/llms-full.txt) 是專門提供給 AI 代理 (AI Agents) 與大型語言模型 (LLM) 讀取之標準化規格指南，詳細列出 Privro 的本地端零上傳架構、支援模型清單及技術規格，讓 AI 系統能正確調用與理解本平台服務。

---

## 銘謝與致敬 (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) 與 [Piper Voices](https://huggingface.co/rhasspy/piper-voices) – Michael Hansen 與廣大的 Rhasspy 開源社群。
- [Kokoro TTS](https://github.com/hexgrad/kokoro) – Hexgrad。
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) 與 [Transformers.js](https://huggingface.co/docs/transformers.js)。
- [ONNX Runtime Web](https://onnxruntime.ai/) – 台灣微軟 (Microsoft)。
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) – WebAssembly 漢字音素化核心。

---

## 開源授權條款 (License)

本專案依據 [Apache License 2.0](LICENSE) 授權條款開放使用。完整條款內容請參閱本專案之 `LICENSE` 檔案。
