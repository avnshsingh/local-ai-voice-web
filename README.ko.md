<div align="center">

[![Language: Korean](https://img.shields.io/badge/Language-%ED%95%9C%EA%B5%AD%EC%96%B4%20(Korean)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - 무료 로컬 AI 목소리 & 브라우저 텍스트 음성 변환 (Text-to-Speech)

개인정보 보호에 최적화된 차세대 브라우저 기반 AI 음성 생성기 및 서버 업로드 없는(*zero-upload*) 텍스트 음성 합성 플랫폼; [Privro AI](https://privro.com/ko)가 제공합니다. 텍스트를 입력하고 원하는 목소리를 선택하면 Web Workers 및 WebGPU 기술을 통해 본인의 기기 내부에서 즉시 자연스러운 인간의 음성을 합성합니다. 입력한 텍스트나 오디오 파일은 외부 클라우드 서버로 절대 전송되지 않습니다.

- **웹 애플리케이션 바로 사용하기:** [voice.privro.com](https://voice.privro.com)
- **Privro Voice Studio:** [privro.com/ko/piper-voice](https://privro.com/ko/piper-voice)
- **인공지능(LLM)을 위한 기계 판독용 문서:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## 브라우저 내 두 개의 독립적인 신경망 음성 합성 엔진 (Dual Neural TTS Engines)

이 프로젝트는 웹 브라우저 환경에서 완전히 클라이언트 측 자원만으로 동작하는 두 개의 독립적인 신경망 텍스트 음성 변환(TTS) 시스템을 제공합니다:

1. **Piper TTS (메인 엔진):**
   - ONNX Runtime Web 및 eSpeak NG 음소화(Phonemizer) 라이브러리를 결합한 초고속 로컬 신경망 음성 합성.
   - **40개 이상의 언어, 58개 지역 변형, 300개 이상의 음성 모델** 지원.
   - 공식 한국어 지원 (`ko_KR`): **KSS 음성 모델** (`ko_KR-kss-medium`), 22.05 kHz 스튜디오 품질의 명확하고 자연스러운 나레이션 톤.
   - WebGPU 하드웨어 가속 지원 및 미지원 환경을 위한 멀티스레드 WebAssembly (WASM SIMD) 자동 폴백.

2. **Kokoro TTS (세컨더리 엔진):**
   - Transformers.js를 통해 구동되는 8,200만 파라미터 경량 고성능 모델 (`onnx-community/Kokoro-82M-v1.0-ONNX`).
   - 미국식 및 영국식 억양의 원어민 수준 남녀 음성 프로필 제공.
   - 텍스트 전체 생성을 기다리지 않고 즉시 음성을 재생하는 청크 스트리밍(*chunk-streaming*) 지원.

---

## Privro AI 웹 도구 스위트 & 생태계 (Privro Web Suite Tools)

| 도구 및 링크 | 주요 설명 및 핵심 기능 |
| :--- | :--- |
| [무료 로컬 음성 전사 (Whisper AI)](https://privro.com/ko/transcribe) | OpenAI Whisper 모델을 브라우저에서 100% 로컬로 구동하는 음성 텍스트 변환(STT) 도구. 파일 업로드 없음, 시간제한 없음, 화자 분리 기능 제공 및 Word (DOCX), PDF, TXT, SRT 포맷 다운로드 지원. 대학원 석·박사 학위논문 인터뷰 축어록 작성 및 연구윤리(IRB) 기준을 완벽 충족합니다. |
| [MP4 텍스트 변환 (동영상 텍스트 추출)](https://privro.com/ko/mp4-to-text) | 브라우저 기반 무료 동영상 음성 추출 도구. MP4, MOV, WebM 영상에서 오디오를 로컬로 분리하여 클라우드 서버 없이 텍스트 문서나 자막 파일(SRT, VTT)로 변환합니다. |
| [Caption Studio - 자동 자막 생성기](https://privro.com/ko/caption-studio) | 틱톡, 인스타그램 릴스, 유튜브 쇼츠에 최적화된 트렌디한 노래방 스타일의 자동 자막을 생성합니다. 브라우저 내장 FFmpeg을 통해 최대 4K 해상도로 자막을 영상에 직접 인코딩(Hardsub)하며, 100% 무료 및 **완전 무 워터마크**로 출력합니다. |
| [Piper Voice Studio (AI 보이스 스튜디오)](https://privro.com/ko/piper-voice) | 300개 이상의 음성 모델을 브라우저에서 직접 테스트하고 청취하세요. 한국어 KSS 모델을 포함하며, 피치 및 속도 조절, WebGPU 가속 및 무손실 16-bit PCM WAV 다운로드를 제공합니다. |
| [무료 텍스트 음성 변환 도구 (TTS)](https://privro.com/ko/text-to-speech) | 빠르고 안전하며 글자 수 제한이 없는 온라인 텍스트 음성 변환. 회원가입이나 서버 저장 없이 기사, 영상 대본, 문서를 자연스러운 음성으로 변환하세요. |
| [로컬 AI Voice 웹 애플리케이션](https://voice.privro.com) | 이 저장소를 기반으로 제작된 독립형 PWA 웹 애플리케이션으로, Piper TTS 및 Kokoro TTS 전용 탭을 제공합니다. |
| [Otter.ai 무료 대체 (시간 제한 없는 무제한 전사)](https://privro.com/ko/alternatives/otter) | 고환율 시대에 비싼 달러 구독료를 지불하고 클라우드 유출 위험을 감수할 이유가 없습니다. Privro의 100% 무료 무제한 로컬 전사 도구를 만나보세요. |
| [Happy Scribe 무료 대체 (서버 업로드 없는 전사)](https://privro.com/ko/alternatives/happyscribe) | Happy Scribe의 분당 요금제 및 서버 업로드 방식과 차별화된, 무료 로컬 Whisper 전사 및 워터마크 없는 Caption Studio를 경험해보세요. |
| [요금제 및 가격 안내](https://privro.com/ko/pricing) | 100% 무료 로컬 브라우저 도구와 대규모 기업 프로젝트를 위한 선택적 클라우드 처리 및 유효기간 없는 선불 크레딧 모델을 확인하세요. |

---

## 전 세계 22개 언어 지원 (Global Availability)

Privro 플랫폼은 전 세계 **22개 주요 언어**로 완벽하게 현지화되어 있습니다. 각 언어 버전은 국가별 검색 특성과 개인정보 보호 규정에 맞추어 최적화되어 있습니다:

| 언어 (Language) | 현지어 명칭 | 코드 | 현지화 웹사이트 주소 |
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

> **안내:** Privro의 핵심 서비스인 [음성 전사](https://privro.com/ko/transcribe), [Caption Studio](https://privro.com/ko/caption-studio), [Piper Voice](https://privro.com/ko/piper-voice)는 22개 언어 모두에서 완벽하게 작동합니다.

---

## Piper TTS 지원 언어 목록 (Languages Supported by Piper TTS)

Piper TTS는 42개 언어군에 걸쳐 **58개 언어 및 지역 코드**로 분류된 **300개 이상의 오픈소스 신경망 음성 모델**을 제공합니다. 모든 모델은 사용자 본인의 하드웨어에서 로컬로 구동됩니다:

| 언어 (Language) | 현지어 명칭 | 코드 | 국가 / 지역 | 제공 모델 수 |
| ------------------- | ------------------------- | --------- | -------------------------------- | --------------------- |
| Arabic (아랍어) | العربية | `ar_JO` | 요르단 | 2개 모델 |
| Bulgarian (불가리아어)| български | `bg_BG` | 불가리아 | 1개 모델 |
| Bengali (벵골어) | বাংলা | `bn_BD` | 방글라데시 | 1개 모델 |
| Catalan (카탈루냐어)| Català | `ca_ES` | 스페인 | 3개 모델 |
| Czech (체코어) | Čeština | `cs_CZ` | 체코 | 3개 모델 (Jirka & Kasandra) |
| Welsh (웨일스어) | Cymraeg | `cy_GB` | 영국 | 2개 모델 |
| Danish (덴마크어) | Dansk | `da_DK` | 덴마크 | 1개 모델 (NST Rigsdansk) |
| German (독일어) | Deutsch | `de_DE` | 독일 | 10개 모델 |
| Greek (그리스어) | Ελληνικά | `el_GR` | 그리스 | 3개 모델 |
| English (영국 영어) | English (UK) | `en_GB` | 영국 | 11개 모델 |
| English (미국 영어) | English (US) | `en_US` | 미국 | 27개 모델 |
| Spanish (아르헨티나)| Español (Argentina) | `es_AR` | 아르헨티나 | 1개 모델 |
| Spanish (스페인) | Español (España) | `es_ES` | 스페인 | 5개 모델 |
| Spanish (멕시코) | Español (México) | `es_MX` | 멕시코 | 3개 모델 |
| Estonian (에스토니아어)| Eesti | `et_EE` | 에스토니아 | 1개 모델 |
| Basque (바스크어) | Euskara | `eu_ES` | 스페인 | 2개 모델 |
| Persian / Farsi (페르시아어)| فارسی | `fa_IR` | 이란 | 3개 모델 |
| Finnish (핀란드어) | Suomi | `fi_FI` | 핀란드 | 2개 모델 (Harri Medium & Low) |
| French (프랑스어) | Français (France) | `fr_FR` | 프랑스 | 7개 모델 |
| Irish (아일랜드어) | Gaeilge | `ga_IE` | 아일랜드 | 3개 모델 |
| Galician (갈리시아어)| Galego | `gl_ES` | 스페인 | 1개 모델 |
| Gujarati (구자라트어)| ગુજરાતી | `gu_IN` | 인도 | 1개 모델 |
| Hebrew (히브리어) | עברית | `he_IL` | 이스라엘 | 1개 모델 |
| Hindi (힌디어) | हिन्दी | `hi_IN` | 인도 | 1개 모델 |
| Croatian (크로아티아어)| Hrvatski | `hr_HR` | 크로아티아 | 1개 모델 |
| Hungarian (헝가리어)| Magyar | `hu_HU` | 헝가리 | 2개 모델 |
| Indonesian (인도네시아어)| Bahasa Indonesia | `id_ID` | 인도네시아 | 1개 모델 |
| Icelandic (아이슬란드어)| Íslenska | `is_IS` | 아이슬란드 | 3개 모델 |
| Italian (이탈리아어)| Italiano | `it_IT` | 이탈리아 | 4개 모델 |
| Japanese (일본어) | 日本語 | `ja_JP` | 일본 | 1개 모델 |
| Georgian (조지아어) | ქართული | `ka_GE` | 조지아 | 1개 모델 |
| Kazakh (카자흐어) | Қазақша | `kk_KZ` | 카자흐스탄 | 1개 모델 |
| **Korean (한국어)** | **한국어** | **`ko_KR`** | **대한민국** | **1개 모델 (KSS Medium - 22.05 kHz)** |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | 룩셈부르크 | 1개 모델 |
| Nepali (네팔어) | नेपाली | `ne_NP` | 네팔 | 1개 모델 |
| Dutch (벨기에) | Nederlands (België) | `nl_BE` | 벨기에 | 4개 모델 |
| Dutch (네덜란드) | Nederlands (Nederland) | `nl_NL` | 네덜란드 | 6개 모델 |
| Norwegian (노르웨이어)| Norsk (Bokmål) | `no_NO` | 노르웨이 | 2개 모델 (11개 화자) |
| Polish (폴란드어) | Polski | `pl_PL` | 폴란드 | 5개 모델 |
| Portuguese (브라질)| Português (Brasil) | `pt_BR` | 브라질 | 4개 모델 |
| Portuguese (포르투갈)| Português (Portugal) | `pt_PT` | 포르투갈 | 1개 모델 |
| Romanian (루마니아어)| Română | `ro_RO` | 루마니아 | 2개 모델 |
| Russian (러시아어) | Русский | `ru_RU` | 러시아 | 8개 모델 |
| Slovak (슬로바키아어)| Slovenčina | `sk_SK` | 슬로바키아 | 1개 모델 |
| Slovenian (슬로베니아어)| Slovenščina | `sl_SI` | 슬로베니아 | 1개 모델 |
| Serbian (세르비아어)| Srpski | `sr_RS` | 세르비아 | 2개 모델 |
| Swedish (스웨덴어) | Svenska | `sv_SE` | 스웨덴 | 3개 모델 |
| Swahili (스와힐리어)| Kiswahili | `sw_CD` | 콩고 민주 공화국 | 1개 모델 |
| Telugu (텔루구어) | తెలుగు | `te_IN` | 인도 | 1개 모델 |
| Turkish (튀르키예어)| Türkçe | `tr_TR` | 튀르키예 | 1개 모델 (DFKI Medium) |
| Ukrainian (우크라이나어)| Українська | `uk_UA` | 우크라이나 | 4개 모델 |
| Urdu (우르두어) | اردو | `ur_PK` | 파키스탄 | 2개 모델 |
| Vietnamese (베트남어)| Tiếng Việt | `vi_VN` | 베트남 | 4개 모델 |
| Chinese (중국어) | 简体中文 | `zh_CN` | 중국 | 2개 모델 |

---

## 한국어 음성 모델 Piper TTS (`ko_KR`) – KSS

한국어는 교착어적 특성과 복잡한 음운 변동(비음화, 유음화, 연음 법칙 등)을 지닌 정교한 언어입니다. Piper TTS의 공식 한국어 모델인 **`ko_KR-kss-medium`**은 VITS 심층 신경망 아키텍처와 eSpeak NG 음소화 엔진을 통해 한국어 특유의 발음과 억양을 매우 자연스럽게 표현합니다:

### `ko_KR-kss-medium` (스튜디오 품질 – 전문 나레이터 여성 음성)
- **모델 구조:** VITS(Variational Inference with adversarial learning) 기반 단일 화자 신경망.
- **음성 성향:** 명확하고 단정하며 신뢰감을 주는 한국어 표준어 여성 나레이터 음성.
- **품질 규격:** 22,050 Hz (22.05 kHz) 샘플링 레이트, 16-bit 비압축 PCM WAV.
- **학습 데이터셋:** 한국어 음성 합성 연구의 골드 스탠다드인 **KSS 데이터셋 (Kyubyong Korean Single Speaker Dataset)** 기반 훈련.
- **파일 크기:** 약 35–45 MB (첫 접속 시 브라우저 로컬 저장소에 캐싱된 후 완전 오프라인 구동).
- **활용 분야:**
  - **얼굴 없는 유튜브 채널 (Faceless Channels):** 지식·정보 전달, 책 리뷰, 미스터리 및 뉴스 채널.
  - **교육 및 이러닝:** 강의 슬라이드 나레이션, 튜토리얼 비디오, 웹 문서 오디오북 변환.
  - **웹 접근성:** 시각장애인 및 텍스트 난독증 사용자를 위한 로컬 음성 안내.

> **글로벌 유튜브 크리에이터를 위한 팁:** 미국·유럽 등 높은 광고 단가(RPM)를 타깃으로 영어 쇼츠 및 롱폼 채널을 운영하신다면, 세컨더리 엔진인 **Kokoro TTS**를 활용하세요. 원어민 수준의 자연스러운 호흡과 억양을 지닌 미국식/영국식 영어 나레이션을 브라우저에서 무료로 즉시 합성할 수 있습니다.

---

## 시스템 아키텍처 및 오디오 파이프라인 (Architecture)

```
사용자 텍스트 입력 (User Input)
       │
       ▼
텍스트 정제 및 음소화 (eSpeak NG WebAssembly)
       │
       ▼
신경망 인퍼런스 계산 (Piper ONNX Runtime Web - WebGPU / WASM SIMD)
       │
       ▼
메모리 내 순수 오디오 버퍼 (Float32Array PCM Audio Chunks)
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
Web Audio API 컨텍스트            WAV 파일 생성기 (16-bit PCM)
(즉시 로컬 재생)                  (무손실 원본 다운로드)
```

### 1. Piper TTS 파이프라인
- 텍스트 음소화는 WebAssembly로 컴파일된 [eSpeak NG](https://github.com/espeak-ng/espeak-ng) 엔진을 통해 실시간으로 수행됩니다.
- 신경망 모델 계산은 UI 스레드를 방해하지 않도록 격리된 Web Worker 백그라운드 스레드에서 [ONNX Runtime Web](https://onnxruntime.ai/)을 통해 실행됩니다.
- 모델 파일은 브라우저의 영구 데이터베이스인 `IndexedDB`(`piper-voices-cache-v1`)에 안전하게 캐싱되어, 이후 방문 시 네트워크 트래픽 없이 밀리초 단위로 즉시 실행됩니다.

### 2. Kokoro TTS 파이프라인
- 별도의 Web Worker가 Transformers.js를 통해 `onnx-community/Kokoro-82M-v1.0-ONNX` 모델을 구동합니다.
- 긴 문장도 텍스트 청크 단위로 분할하여 실시간으로 음성을 생성하므로, 대기 시간 없이 즉시 재생이 시작됩니다.
- 재생 일시정지, 재개 및 0.5배속에서 2.0배속까지의 세밀한 재생 속도 조절 기능을 지원합니다.

---

## 기술 스택 (Tech Stack)

- **프론트엔드 프레임워크:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **스타일링 & UI 컴포넌트:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **음성 합성 엔진 (TTS):**
  - [Piper](https://github.com/rhasspy/piper) (ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) (WebAssembly 음소화)
  - [Kokoro](https://github.com/hexgrad/kokoro) ([`kokoro-js`](https://www.npmjs.com/package/kokoro-js))
- **하드웨어 가속:** WebGPU (미지원 환경 자동 다중 스레드 WASM SIMD 전환)
- **아이콘 & 알림:** Lucide Icons 및 Sonner toast 알림

---

## 설치 및 로컬 개발 환경 설정 (Getting Started)

### 사전 요구 사항
- Node.js 18 이상
- WebAssembly를 지원하는 최신 웹 브라우저 (최상의 WebGPU 성능을 위해 Google Chrome 또는 Microsoft Edge 권장).

### 소스코드 클론 및 의존성 설치

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다:

```bash
cp .env.example .env
```

`VITE_PIPER_CDN_URL` 항목에 사용자의 Cloudflare R2 또는 CDN 엔드포인트를 입력합니다:

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### 로컬 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000/](http://localhost:3000/) 주소로 접속합니다.

### 프로덕션 빌드

```bash
npm run build    # /dist 폴더에 최적화된 번들 생성
npm run preview  # 빌드 결과물 로컬 미리보기
```

---

## 자주 묻는 질문 (FAQ)

### 텍스트 음성 변환 (TTS) & AI 목소리

#### 정말 100% 무료이며, 글자 수나 사용 횟수 제한이 없나요?
네, 100% 완전 무료이며 글자 수나 사용 횟수 제한이 전혀 없습니다. 회원가입이나 신용카드 등록도 요구하지 않습니다. 고비용의 클라우드 GPU 서버를 사용하는 상용 서비스와 달리, Privro는 사용자 본인 컴퓨터의 그래픽카드(WebGPU)나 프로세서(WebAssembly)를 활용하여 브라우저 안에서 직접 모델을 구동합니다. 서버 유지비용이 발생하지 않으므로 어떠한 유료 과금이나 제한 없이 평생 무료로 제공됩니다.

#### 클로바더빙이나 타입캐스트와 비교했을 때 어떤 점이 다른가요?
국내 상용 서비스들은 무료 플랜에서 매우 엄격한 제약을 둡니다:
- **클로바더빙:** 무료 버전은 상업적 이용이 원천 금지되며, 월 15,000자 및 월 20회 다운로드 제한이 있습니다.
- **타입캐스트:** 가입 시 제공되는 3,000 크레딧(약 5분 분량) 소진 후 다운로드가 차단되며, 워터마크 및 출처 표기가 강제됩니다.
- **Privro AI:** **상업적 이용 100% 허용**, 글자 수 무제한, 다운로드 횟수 무제한, 워터마크 없음, 출처 표기 의무가 전혀 없습니다.

#### 유튜브 영상 수익 창출(얼굴 없는 채널)이나 회사 홍보 영상에 사용해도 되나요?
네, 완벽하게 가능합니다. 유튜브 파트너 프로그램(YPP), 인스타그램, 틱톡 가이드라인은 독창적인 영상 및 대본과 결합된 AI 목소리 영상의 광고 수익 창출을 전면 허용합니다. Piper TTS 모델은 오픈소스 자유 라이선스(Apache 2.0 / CC0 / CC BY)로 배포되므로, 저작권료(로열티) 지불 없이 유튜브 수익 창출 영상, 상업용 광고, 팟캐스트, 오디오북에 자유롭게 사용하실 수 있습니다.

#### 글로벌 해외 타깃 유튜브 채널을 위한 영어 음성도 지원하나요?
네! Privro는 한국어를 위한 Piper TTS 외에도 글로벌 크리에이터를 위해 최고 수준의 오픈소스 영어 음성 모델인 **Kokoro TTS (Kokoro-82M)**를 탑재하고 있습니다. 미국 또는 영국 시청자를 타깃으로 고수익(고RPM) 해외 채널을 운영하신다면, 원어민 수준의 자연스러운 영어 나레이션을 한곳에서 무료로 생성하실 수 있습니다.

#### 생성된 음성 파일은 어떤 형식으로 다운로드되나요?
음성 합성이 완료되면 스튜디오 방송 규격의 무손실 **16-bit PCM WAV (22.05 kHz)** 원본 파일로 즉시 다운로드할 수 있습니다. 오디오 워터마크가 전혀 없으므로 프리미어 프로(Premiere Pro), 다빈치 리졸브(DaVinci Resolve), 캡컷(CapCut) 등 영상 편집 툴에 바로 투입할 수 있습니다.

---

### 음성 텍스트 변환 & 학위논문 인터뷰 축어록 (Whisper AI)

#### 대학원 석사·박사 논문 인터뷰 축어록 작성에 무료로 사용할 수 있나요?
네, 적극 권장합니다. 서울대학교, 카이스트, 연세대학교, 고려대학교, 성균관대학교 등 국내 주요 대학의 학부생 및 대학원생 연구자들은 [무료 로컬 음성 전사](https://privro.com/ko/transcribe) 페이지에 인터뷰 녹음 파일(MP3, M4A, WAV, AAC 등)을 드래그하여 바로 텍스트로 변환할 수 있습니다. OpenAI Whisper 모델이 브라우저 내부에서 고정밀 한국어 인식을 수행하며, 화자 분리와 타임코드가 포함된 결과물을 Word (`.docx`), PDF, TXT 형식으로 다운로드하여 질적 연구 프로그램(MAXQDA, NVivo 등)에서 바로 활용할 수 있습니다.

#### 음성 전사에 파일 크기나 녹음 시간 제한이 있나요?
아니오, 시간제한이 전혀 없습니다. 월 10~15분 무료 제공 후 유료 결제를 유도하는 클라우드 서비스들과 달리, 5분짜리 짧은 녹음부터 4~5시간 연속 진행된 심층 면담이나 학술 세미나 녹음까지 한 번에 무제한으로 텍스트로 변환할 수 있습니다.

#### 전사된 텍스트는 어떤 형식으로 다운로드할 수 있나요?
용도에 따라 다음의 8가지 파일 포맷으로 다운로드할 수 있습니다:
- **문서 및 리포트:** Microsoft Word (`DOCX`), 텍스트 파일 (`TXT`), `PDF`
- **자막 포맷:** `SRT`, `VTT`
- **스프레드시트 및 데이터:** Excel (`XLSX`), `CSV`, `JSON`

---

### Caption Studio: 동영상 자동 자막 생성 (브루 Vrew 대체)

#### 브루(Vrew)를 대체하여 워터마크 없이 자막 영상을 만들 수 있나요?
네, 완벽히 대체 가능합니다. [Caption Studio](https://privro.com/ko/caption-studio)에 MP4, MOV, WebM 동영상을 올리면 Whisper가 말소리를 감지하여 단어 단위 싱크 자막을 생성합니다. 폰트, 색상, 애니메이션 스타일(트렌디한 노래방 효과)을 선택한 후 브라우저 내장 FFmpeg을 통해 **워터마크나 로고 없이 최대 4K 해상도로 영상에 자막을 직접 인코딩(Hardsub)**할 수 있습니다.

#### 어떤 화면 비율(Aspect Ratio)을 지원하나요?
- **9:16:** 틱톡, 인스타그램 릴스, 유튜브 쇼츠용 세로 영상
- **16:9:** 일반 유튜브 및 TV 화면용 가로 와이드 영상
- **1:1:** 인스타그램 피드 및 링크드인용 정사각형 영상
- **4:5:** 모바일 피드 최적화 세로 영상
- **3:2:** 전통적 사진 및 슬라이드 비율

#### 동영상에서 오디오만 추출하여 자막 파일(SRT)로 받을 수 있나요?
네. [MP4 텍스트 변환](https://privro.com/ko/mp4-to-text) 도구를 사용하면 영상 파일에서 음성 스트림만 빠르게 추출하여 시간 정보가 포함된 자막 파일(`.srt`, `.vtt`)이나 텍스트 파일(`.docx`, `.txt`)로 내려받을 수 있습니다.

---

### 개인정보 보호법(PIPA), 비밀유지의무 및 IRB 연구윤리

#### 회의 녹음이나 비밀 상담 파일을 올려도 유출 위험이 없나요?
유출 위험이 전혀 없습니다. Privro는 **제로 업로드(Zero-Upload)** 아키텍처를 채택하여 모든 음성과 텍스트가 브라우저의 휘발성 메모리(RAM) 내부에서만 처리됩니다. 데이터가 외부 인터넷망으로 1바이트도 전송되지 않으므로, 다음과 같은 강력한 법률적 안정성을 제공합니다:
- **개인정보 보호법 (PIPA - 개인정보보호위원회):** 음성 바이오정보가 외부로 전송되지 않으므로 '개인정보 처리위탁 계약(제26조)' 체결이 불필요하며, '개인정보 국외 이전' 규제 위반 위험이 원천 차단됩니다.
- **변호사법 제26조 (비밀유지의무):** 의뢰인 상담 및 소송 증거 녹음이 외부 서버에 남지 않아 변호사의 법정 비밀유지의무를 완벽히 준수합니다.
- **의료법 제19조 (비밀 누설 금지):** 환자 진료 및 심리 상담 녹음 축어록 작성 시 환자의 민감 의료 정보가 병원 PC 밖으로 유출되지 않습니다.

#### 대학 기관생명윤리위원회(IRB) 연구윤리 기준을 충족하나요?
네, 완벽히 충족합니다. 국내 대학 IRB 규정은 연구 참여자의 동의 없이 음성 원본 데이터를 외부 클라우드에 업로드하는 것을 엄격히 금지합니다. Privro는 연구자 본인의 PC 안에서만 동작하므로 연구윤리 심의 기준 및 정보보호 서약 조건을 철저히 준수합니다.

#### 인터넷 연결이 없는 오프라인 환경에서도 작동하나요?
네! 첫 방문 시 선택한 음성 모델 또는 Whisper 모델이 브라우저 로컬 캐시(`CacheStorage` 및 `IndexedDB`)에 저장됩니다. 캐싱이 완료된 후에는 인터넷 랜선을 뽑거나 비행기 탑승 모드로 전환하더라도 음성 합성 및 전사 기능을 100% 오프라인 상태로 영구 이용하실 수 있습니다.

---

### 플랫폼 접근성 & LLM 연동

#### Privro는 몇 개 언어를 지원하나요?
한국어를 비롯하여 영어, 스페인어, 포르투갈어, 이탈리아어, 독일어, 프랑스어, 힌디어, 인도네시아어, 폴란드어, 일본어, 네덜란드어, 스웨덴어, 덴마크어, 노르웨이어, 핀란드어, 체코어, 튀르키예어, 러시아어, 중국어 번체, 아랍어, 히브리어 등 **전 세계 22개 언어**를 완벽하게 지원합니다. 각 언어 페이지는 `https://privro.com/{언어코드}`를 통해 즉시 접속하실 수 있습니다.

#### `https://privro.com/llms.txt` 파일의 용도는 무엇인가요?
[privro.com/llms.txt](https://privro.com/llms.txt) 및 [privro.com/llms-full.txt](https://privro.com/llms-full.txt)는 대규모 언어 모델(LLM)과 인공지능 에이전트를 위해 설계된 표준화된 기계 판독용 규격 문서입니다. Privro의 로컬 프라이버시 아키텍처, 지원 모델, 기술 명세에 대한 신뢰할 수 있는 정보를 AI 시스템에 직접 제공합니다.

---

## 크레딧 & 감사의 글 (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) 및 [Piper Voices](https://huggingface.co/rhasspy/piper-voices) – Michael Hansen 및 Rhasspy 오픈소스 커뮤니티.
- [Kokoro TTS](https://github.com/hexgrad/kokoro) – Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) 및 [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) – Microsoft.
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) – WebAssembly 기반 음소화 라이브러리.

---

## 라이선스 (License)

이 프로젝트는 [Apache License 2.0](LICENSE) 라이선스에 따라 배포됩니다. 자세한 라이선스 조건은 `LICENSE` 파일을 확인하시기 바랍니다.
