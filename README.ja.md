<div align="center">

[![Language: Japanese](https://img.shields.io/badge/Language-日本語%20(Japanese)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - 完全無料・ローカル完結のAI音声読み上げ & Whisper文字起こし

ブラウザ上で動作し、クラウドへのデータ送信が一切発生しないゼロアップロード設計の次世代AI音声合成（Text-to-Speech）ジェネレーターです。[Privro AI](https://privro.com/ja) の技術を活用し、テキストを入力して音声モデルを選択するだけで、お使いの端末内（Web WorkersおよびWebGPU）で極めて自然な人間の話し声を直接生成します。テキストや生成音声が外部サーバーに送信されることは一切ありません。

- **Webアプリ（即時利用可能）：** [voice.privro.com](https://voice.privro.com)
- **Privro ボイススタジオ：** [privro.com/ja/piper-voice](https://privro.com/ja/piper-voice)
- **機械可読仕様書（LLM向け）：** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## デュアルAI音声エンジン（Dual Neural TTS Engines）

本プロジェクトは、クライアントサイド（お使いのブラウザ内部）で完全に動作する2つの高性能ニューラル音声合成エンジンを搭載しています。

1. **Piper TTS（メインエンジン）：**
   - ONNX Runtime Web と eSpeak NG 音素化ライブラリを組み合わせた、超高速ローカル音声合成。
   - **40以上の言語・58の地域バリアント、300以上の高品質モデル**をサポート。日本語公式モデル（`ja_JP-hi_fi_captain-medium`：女性音声・男性音声の2話者）を標準搭載。
   - **WebGPU** によるハードウェアアクセラレーションに対応し、非対応環境ではマルチスレッド **WebAssembly (WASM SIMD)** へ自動フォールバック。
   - 話者ID（Speaker ID）を選択可能なマルチスピーカー対応。
   - 軽量・高速な動作設定（`x_low`, `low`）からスタジオ品質のクリアな音質（`medium`, `high`）まで柔軟に対応。
   - ブラウザの `CacheStorage` を活用したローカル保存：約20MB〜75MBのモデルファイルは初回のみダウンロードされ、2回目以降は完全オフライン（通信量ゼロ）で即座に動作。
   - 非圧縮で劣化のない **16-bit PCM WAV（22.05 kHz）** 形式での音声直接ダウンロード。

2. **Kokoro TTS（セカンダリエンジン）：**
   - [Kokoro](https://github.com/hexgrad/kokoro)（`Kokoro-82M`、8200万パラメータ）および [`kokoro-js`](https://www.npmjs.com/package/kokoro-js) をベースにした人間味あふれる表現力豊かな音声合成。
   - アメリカ英語およびイギリス英語の極めて滑らかな発音と抑揚。
   - リアルタイム・チャンクストリーミング：長文の合成完了を待たずに、生成された最初の段落から即時に再生を開始。
   - 再生、一時停止、再開、および話速調整（0.5倍速〜2.0倍速）のフルコントロール。

---

## Privro ツール群（Privro Tools）

Privro は、完全端末内処理（*local-first*）の思想で設計されたブラウザ完結型のクリエイター＆生産性向上ツール群です。すべてのローカルツールは、会員登録不要・ログイン不要・クレジットカード不要・APIキー不要・容量や時間の制限なしで100%端末内で動作します。

| ツール & 各種ページ | 機能概要・主な特徴 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [完全無料 ローカル音声文字起こし (Whisper AI)](https://privro.com/ja/transcribe) | お使いの端末内で OpenAI Whisper（Tiny から Large Turbo まで）が直接動作する音声テキスト変換。ファイル送信なし、時間制限なし、登録不要。 |
| [MP4 動画文字起こし・テキスト変換](https://privro.com/ja/mp4-to-text) | 無料オンライン動画文字起こしツール。MP4、MOV、WebM 動画から音声をローカル抽出し、Whisper でテキスト（TXT, DOCX, PDF）や字幕（SRT, VTT）へ変換。 |
| [Caption Studio - 動画テロップ・自動字幕生成](https://privro.com/ja/caption-studio) | TikTokやリール風の動くカラオケ字幕・テロップを自動作成。ブラウザ内 FFmpeg により最大4K解像度までウォーターマーク（ロゴ透かし）なしで動画書き出し。 |
| [Piper Voice Studio (AI音声読み上げスタジオ)](https://privro.com/ja/piper-voice) | 300以上の音声をブラウザ上で自由に試聴・生成できる多言語AI音声スタジオ。話者選択、WebGPUアクセラレーション、高音質WAV書き出しに対応。 |
| [無料テキスト音声変換ジェネレーター](https://privro.com/ja/text-to-speech) | 高速かつ安全なオンラインテキスト読み上げ。外部クラウドに依存することなく、入力したテキストを自然な日本語音声へ変換。 |
| [ローカルAIボイスWebアプリ](https://voice.privro.com) | 本リポジトリのソースコードからビルドされた、Piper TTS と Kokoro TTS を切り替え可能なスタンドアローン型PWAアプリ。 |
| [Otter.ai 代替ツール (時間無制限・完全無料)](https://privro.com/ja/alternatives/otter) | 会議録音のアップロードや高額な月額ドル課金が必要な Otter に対し、完全無料・無制限・ローカル動作の安心感を比較。 |
| [Happy Scribe 代替ツール (ゼロアップロード)](https://privro.com/ja/alternatives/happyscribe) | 分単位の課金制限やクラウド転送を伴う Happy Scribe に対し、Privro のゼロアップロード・完全無料テロップスタジオの優位性を比較。 |
| [Privro AI 料金プラン](https://privro.com/ja/pricing) | 永久無料のローカル端末内ツールに加え、大量処理向けの高速クラウド文字起こしオプションおよび有効期限のない従量課金パック。 |

---

## Privro での音声読み上げ機能（Text to Speech on Privro）

Privro は、プライバシーの保護、高速性、使いやすさを極限まで高めたゼロアップロード型の音声読み上げ環境を提供します。

- **[Piper Voice Studio](https://privro.com/ja/piper-voice):** Privro プラットフォーム内のフル機能対話型音声スタジオ。40言語・300以上の音声モデルから検索・フィルタリングし、話者IDの切り替え、WebGPU/WASMランタイムの選択、モデルの事前キャッシュ、WAVファイル出力が可能です。
- **[テキスト音声変換ジェネレーター](https://privro.com/ja/text-to-speech):** クリエイターやビジネス用途向けに、原稿テキストから素早くナレーション音声を書き出せるオンラインポータル。
- **[ローカルAIボイスWebアプリ](https://voice.privro.com):** 本オープンソースリポジトリから提供される、Piper TTS と Kokoro TTS をタブで瞬時に切り替え可能なPWAアプリケーション。

### 端末内完結のプライバシーアーキテクチャ（On-Device Privacy）
すべての音声合成処理は、ブラウザのバックグラウンド Web Workers 内で完結します。
- **テキストが外部サーバーへ送信されることは一切ありません。**
- **生成された音声が外部クラウドに保存・ログ記録されることはありません。**
- **会員登録、アカウント作成、APIキーの取得は一切不要です。**
- **完全オフライン動作対応：** 音声モデルがブラウザにキャッシュされた後は、インターネット接続のない機密環境でも動作します。
- **日本の「個人情報保護法（APPI）」および社内セキュリティ規定（NDA / 機密保持）を完全遵守。**

---

## AIエージェント・機械可読仕様書（`llms.txt` & `llms-full.txt`）

Privro は、最新の標準規格である `llms.txt` に準拠した構造化ドキュメントを公開しています。

- **サマリーインデックス：** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **詳細技術仕様書：** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

これらのファイルにより、AIアシスタント、検索エンジン、クローラーが、Privro のローカルプライバシー構造、Whisperモデル仕様、FFmpeg動画エンコード設定、Piper音声ラインナップ、国際化URL構成を正確に解析できます。

---

## Privro で利用可能な言語（Languages Available on Privro）

Privro は世界 **22の公式言語** に完全ローカライズされています。英語エディションはルートドメインで提供され、各国語版は専用の言語パスからアクセス可能です。

| 言語 (Language) | 現地語表記 (Native Name) | 言語コード | ホームページURL (Homepage) |
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

> **注記：** [音声文字起こしアプリ](https://privro.com/ja/transcribe)、[Caption Studio（テロップ作成）](https://privro.com/ja/caption-studio)、[Piper Voice](https://privro.com/ja/piper-voice) などの主力ツールは、全22言語に完全対応しています。

---

## Piper TTS 対応言語一覧（Languages Supported by Piper TTS）

Piper TTS は、42言語ファミリー・**58の言語・地域コード** にわたる **300以上のオープンソース・ニューラル音声モデル** を内蔵しています。すべてのモデルはブラウザから直接読み込み可能です。

| 言語 (Language) | 現地語表記 | 言語コード | 対象地域・国 | 音声モデル数 |
| ------------------- | ------------------------- | --------- | -------------------------------- | ------------ |
| Arabic (アラビア語) | العربية | `ar_JO` | ヨルダン | 2モデル |
| Bulgarian (ブルガリア語)| български | `bg_BG` | ブルガリア | 1モデル |
| Bengali (ベンガル語) | বাংলা | `bn_BD` | バングラデシュ | 1モデル |
| Catalan (カタルーニャ語)| Català | `ca_ES` | スペイン | 3モデル |
| Czech (チェコ語) | Čeština | `cs_CZ` | チェコ | 3モデル |
| Welsh (ウェールズ語) | Cymraeg | `cy_GB` | イギリス | 2モデル |
| Danish (デンマーク語) | Dansk | `da_DK` | デンマーク | 1モデル |
| German (ドイツ語) | Deutsch | `de_DE` | ドイツ | 10モデル |
| Greek (ギリシャ語) | Ελληνικά | `el_GR` | ギリシャ | 3モデル |
| English (UK) (イギリス英語)| English (UK) | `en_GB` | イギリス | 11モデル |
| English (US) (アメリカ英語)| English (US) | `en_US` | アメリカ合衆国 | 27モデル |
| Spanish (アルゼンチン) | Español (Argentina) | `es_AR` | アルゼンチン | 1モデル |
| Spanish (スペイン) | Español (España) | `es_ES` | スペイン | 5モデル |
| Spanish (メキシコ) | Español (México) | `es_MX` | メキシコ | 3モデル |
| Estonian (エストニア語) | eesti | `et_EE` | エストニア | 1モデル |
| Basque (バスク語) | Euskara | `eu_ES` | スペイン | 2モデル |
| Persian / Farsi (ペルシャ語)| فارسی | `fa_IR` | イラン | 5モデル |
| Finnish (フィンランド語)| Suomi | `fi_FI` | フィンランド | 2モデル |
| French (フランス語) | Français | `fr_FR` | フランス | 7モデル |
| Hebrew (ヘブライ語) | עִבְרִית | `he_IL` | イスラエル | 1モデル |
| Hindi (ヒンディー語) | हिन्दी | `hi_IN` | インド | 3モデル |
| Hungarian (ハンガリー語)| Magyar | `hu_HU` | ハンガリー | 3モデル |
| Armenian (アルメニア語)| հայերեն | `hy_AM` | アルメニア | 1モデル |
| Indonesian (インドネシア語)| Bahasa Indonesia | `id_ID` | インドネシア | 1モデル |
| Icelandic (アイスランド語)| íslenska | `is_IS` | アイスランド | 4モデル |
| Italian (イタリア語) | Italiano | `it_IT` | イタリア | 4モデル |
| Japanese (日本語) | 日本語 | `ja_JP` | 日本 | 1モデル（2話者） |
| Georgian (ジョージア語)| ქართული ენა | `ka_GE` | ジョージア | 1モデル |
| Kazakh (カザフ語) | қазақша | `kk_KZ` | カザフスタン | 3モデル |
| Korean (韓国語) | 한국어 | `ko_KR` | 大韓民国 | 1モデル |
| Kurdish (クルド語) | Kurmancî | `ku_TR` | トルコ | 1モデル |
| Luxembourgish (ルクセンブルク語)| Lëtzebuergesch | `lb_LU` | ルクセンブルク | 1モデル |
| Lithuanian (リトアニア語)| Lietuvių | `lt_LT` | リトアニア | 1モデル |
| Latvian (ラトビア語) | Latviešu | `lv_LV` | ラトビア | 1モデル |
| Malayalam (マラヤーラム語)| മലയാളം | `ml_IN` | インド | 2モデル |
| Marathi (マラーティー語)| मराठी | `mr_IN` | インド | 1モデル |
| Nepali (ネパール語) | नेपाली | `ne_NP` | ネパール | 3モデル |
| Dutch (ベルギー) | Nederlands (België) | `nl_BE` | ベルギー | 4モデル |
| Dutch (オランダ) | Nederlands (Nederland)| `nl_NL` | オランダ | 6モデル |
| Norwegian (ノルウェー語)| Norsk | `no_NO` | ノルウェー | 2モデル |
| Polish (ポーランド語) | Polski | `pl_PL` | ポーランド | 5モデル |
| Portuguese (ブラジル)| Português (Brasil) | `pt_BR` | ブラジル | 4モデル |
| Portuguese (ポルトガル)| Português (Portugal)| `pt_PT` | ポルトガル | 1モデル |
| Romanian (ルーマニア語)| Română | `ro_RO` | ルーマニア | 1モデル |
| Russian (ロシア語) | Русский | `ru_RU` | ロシア | 4モデル |
| Slovak (スロバキア語) | Slovenčina | `sk_SK` | スロバキア | 1モデル |
| Slovenian (スロベニア語)| Slovenščina | `sl_SI` | スロベニア | 1モデル |
| Albanian (アルバニア語)| shqip | `sq_AL` | アルバニア | 1モデル |
| Serbian (セルビア語) | srpski | `sr_RS` | セルビア | 1モデル |
| Swedish (スウェーデン語)| Svenska | `sv_SE` | スウェーデン | 3モデル |
| Swahili (スワヒリ語) | Kiswahili | `sw_CD` | コンゴ民主共和国 | 1モデル |
| Telugu (テルグ語) | తెలుగు | `te_IN` | インド | 3モデル |
| Thai (タイ語) | ไทย | `th_TH` | タイ | 1モデル |
| Turkish (トルコ語) | Türkçe | `tr_TR` | トルコ | 1モデル |
| Ukrainian (ウクライナ語)| украї́нська мо́ва | `uk_UA` | ウクライナ | 5モデル |
| Urdu (ウルドゥー語) | اردو | `ur_PK` | パキスタン | 2モデル |
| Vietnamese (ベトナム語)| Tiếng Việt | `vi_VN` | ベトナム | 3モデル |
| Chinese (簡体字中国語)| 简体中文 | `zh_CN` | 中国 | 4モデル |

---

## 技術アーキテクチャ & 処理パイプライン（Technical Architecture）

### 1. Piper TTS パイプライン
```
[入力テキスト]
    │
    ▼
[Web Worker: eSpeak NG 音素化エンジン] ──► テキスト文字列を標準音素ID列へ変換
    │
    ▼
[Web Worker: ONNX Runtime Web]         ──► WebGPUまたはWASM上でニューラルモデル(.onnx)を実行
    │
    ▼
[PCM 音声バッファ]                     ──► 22.05 kHz 16-bit PCM リニア音声ストリームを構築
    │
    ▼
[Web Audio API / WAV Blob]             ──► 即時プレビュー再生および非圧縮WAVファイルのダウンロード
```

- **エッジCDNによるバイナリ配信：** ONNX Runtime WASM モジュールや音素データなどの静的バイナリは、Cloudflare R2（`VITE_PIPER_CDN_URL`）経由でグローバル配信され、Gitクローンや初回アクセス時のバンドルサイズを最小限に抑えています。
- **ブラウザ内ローカルキャッシュ：** ダウンロードされた音声モデル（`.onnx`）は、ブラウザの `CacheStorage`（`piper-voices-cache-v1`）に永続保存されます。2回目以降の利用では通信が発生せず、ミリ秒単位で即時起動します。

### 2. Kokoro TTS パイプライン
- 独立した Web Worker が Transformers.js を介して軽量な `onnx-community/Kokoro-82M-v1.0-ONNX` モデルを初期化。
- 音声ストリームをリアルタイムに分割生成（チャンク配信）し、文頭の再生を待機時間ゼロで実現。
- 一時停止、再開、および話速スライダー（0.5x〜2.0x）を標準装備。

---

## 採用技術スタック（Tech Stack）

- **フロントエンドフレームワーク：** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI & スタイリング：** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) コンポーネント群
- **音声合成エンジン（TTS）：**
  - [Piper](https://github.com/rhasspy/piper)（ONNX Runtime Web `ort-wasm-simd-threaded.jsep.wasm` 経由）
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng)（WebAssembly 音素化ライブラリ）
  - [Kokoro](https://github.com/hexgrad/kokoro)（[`kokoro-js`](https://www.npmjs.com/package/kokoro-js) 経由）
- **ハードウェアアクセラレーション：** WebGPU ネイティブ実行（マルチスレッド WASM SIMD への自動フォールバック付き）
- **アイコン & 通知：** Lucide Icons および Sonner によるリアクティブ・トースト通知

---

## クイックスタートガイド（Getting Started）

### 前提条件
- Node.js 18 以降
- WebAssembly に対応した最新のWebブラウザ。GPUアクセラレーションによる最大速度を得るには、WebGPUが有効な Google Chrome または Microsoft Edge の利用を強く推奨します。

### インストール手順

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### 環境設定

`.env.example` をコピーして `.env` を作成します。

```bash
cp .env.example .env
```

`VITE_PIPER_CDN_URL` にご自身の Cloudflare R2 バケットまたはCDNのURLを設定します。

```env
VITE_PIPER_CDN_URL="https://your-bucket.r2.dev"
```

### ローカル開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000/](http://localhost:3000/) を開きます。

### 本番用ビルドの作成

```bash
npm run build    # 最適化された本番用バンドルを /dist に生成
npm run preview  # ビルド成果物のローカルプレビューを実行
```

---

## よくある質問（FAQ）

### 無料AI音声読み上げ & テキスト音声変換 (Text-to-Speech)

#### なぜ完全無料で、文字数や時間の制限がないのですか？
Privro の音声読み上げおよび文字起こしは、お客様のパソコンの計算資源（ブラウザ内蔵の WebGPU または WebAssembly）を活用してローカルで直接AI推論を実行しています。クラウドサーバーの計算コストが発生しないため、文字数制限・分数上限・月額料金・ウォーターマーク（ロゴ透かし）なしで、完全無料・無制限でご利用いただけます。

#### 音声データやテキストが外部サーバーに送信されることはありますか？（個人情報保護法・機密保持）
いいえ、一切送信されません。入力されたテキスト、アップロードされた音声・動画ファイル、生成された音声データは、すべてお使いのブラウザ内部（メモリ上）のみで完結して処理されます。外部サーバーへの通信は発生しないため、日本の**「個人情報保護法（APPI）」**を完全に遵守し、情報漏洩リスクゼロで**「社外秘会議」「役員会議」「機密保持契約（NDA）対象の商談」「未公開の取材音声」**の議事録作成や文字起こしに安心してご利用いただけます。

#### 生成した音声やテロップ動画は、YouTube収益化や商用利用に使えますか？
はい、すべて商用利用可能です。商用利用のための追加ライセンス購入やクレジット表記は不要です。YouTube動画の広告収益化、TikTok/Instagramリール、社内プレゼンテーション、ポッドキャスト、販促用動画のナレーションなど、商用・非商用を問わず自由にご活用いただけます。

#### YouTubeの「顔出しなし動画」や「ゆっくり解説」の代替として使えますか？
最適です。Piper TTS の日本語モデル（`hi_fi_captain`）は、自然な女性音声（話者 0）および男性音声（話者 1）を搭載しています。従来のゆっくりボイス（AquesTalk）のような有償商用ライセンスの手続きや更新料が不要であり、VOICEVOXのようなキャラクター利用規約・クレジット表記義務を気にすることなく利用できます。また、YouTubeの「繰り返しの多いコンテンツ（再利用コンテンツ）」による収益化審査落ち対策としても極めて有効です。

#### 日本語の音声モデルと話者（声質）は選べますか？
はい。Piper TTS の言語セレクターから「日本語 (Japanese / ja_JP)」を選択すると、`ja_JP-hi_fi_captain-medium` モデルが読み込まれます。「設定」アイコンから「話者ID（Speaker ID）」を切り替えることで、**話者 0（女性音声）** と **話者 1（男性音声）** を選択可能です。さらに、英語ナレーションには最高水準の自然さを誇る「Kokoro TTS」タブもご利用いただけます。

#### 生成された音声ファイルは動画編集ソフトで使えますか？
はい。音声合成が完了すると、非圧縮の高品質 **16-bit PCM WAVファイル（22.05 kHz）** として直接ダウンロードできます。音声にノイズやロゴ音などの透かしは一切なく、Premiere Pro、DaVinci Resolve、Final Cut Pro、CapCut などのタイムラインにそのまま配置して編集可能です。

#### オフライン環境（インターネット非接続）でも動作しますか？
はい。初回利用時に音声モデルやWhisperモデルがブラウザ（CacheStorage）に一度キャッシュされた後は、インターネット接続が途切れた環境や機密隔離環境（オフラインPC、新幹線・航空機内）でもそのまま音声合成や文字起こしが動作します。

#### なぜWebGPUテクノロジーを採用しているのですか？
WebGPU は、ブラウザがお客様のパソコンやスマートフォンのグラフィックボード（GPU）の並列計算コアへ直接アクセスできるようにする最新Web標準仕様です。これにより、従来のCPU処理と比較して3倍から5倍の超高速音声合成を実現しています。お使いの端末がWebGPUに対応していない場合でも、自動的にマルチスレッド WebAssembly（WASM）へフォールバックするため安心です。

---

### 音声文字起こし & 会議議事録・動画テキスト化 (Whisper)

#### 会議の録音や講義の音声を無料で文字起こしするには？
[Privro 無料ローカル文字起こしツール](https://privro.com/ja/transcribe) に音声ファイル（MP3, WAV, iPhoneのボイスメモM4A, AAC, OGG, FLAC 等）をドラッグ＆ドロップするだけで、OpenAI Whisper がブラウザ内で直接音声をテキスト化します。長時間の大学講義、インタビュー調査、対面会議の録音も、クラウドの分単位料金を気にせず完全無料でテキスト化できます。

#### MP4動画からテロップ（字幕）やテキストを抽出できますか？
はい。[MP4テキスト変換ツール](https://privro.com/ja/mp4-to-text) または [文字起こしツール](https://privro.com/ja/transcribe) に MP4、WebM、MOV 動画をドラッグ＆ドロップするだけです。重い動画全体をアップロードすることなく、ブラウザ内で音声ストリームのみを即座に抽出し、正確なタイムスタンプ付きのテキストやSRT字幕ファイルを生成します。

#### 文字起こしの分数制限やファイルサイズの上限はありますか？
ありません。毎月10〜15分しか無料で使えない海外の文字起こしクラウドSaaSとは異なり、Privro のローカル文字起こしには**時間制限もファイル数上限もありません**。3分間の短い音声メモから、3〜4時間に及ぶ長時間シンポジウムや株主総会の録音まで、何時間でも完全無料で文字起こし可能です。

#### 文字起こし結果の保存形式は何に対応していますか？
単語レベルの高精度タイムスタンプが付与されたテキストを、用途に合わせて以下の8形式でダウンロードできます。
- プレーンテキスト：`TXT`
- 字幕ファイル：`SRT`, `VTT`
- データ・表計算：`CSV`, `JSON`, `XLSX`
- 書式付きドキュメント：Microsoft Word `DOCX`, `PDF`

---

### Caption Studio : 自動字幕・テロップ生成エディタ

#### 動画にウォーターマーク（ロゴ透かし）なしでテロップを付けられますか？
はい。[Caption Studio](https://privro.com/ja/caption-studio) を使用すると、動画を読み込んで Whisper で自動文字起こしを行い、フォント、カラー、カラオケ風の動くテキストアニメーションを設定して、動画にテロップを焼き付け（ハードサブ化）できます。動画の再エンコードはブラウザ内 FFmpeg により実行され、**透かしロゴなし・最大4K解像度** でクリアに出力されます。

#### 対応している動画のアスペクト比（画面比率）は？
主要なすべての動画・SNSプラットフォーム向けにプリセットを用意しています。
- **9:16：** TikTok、Instagram リール、YouTube ショート（縦型ショート動画）
- **16:9：** 通常の横型 YouTube、ワイドモニター、テレビ画面
- **1:1：** Instagram 正方形フィード、LinkedIn 投稿
- **4:5：** Instagram 縦型フィード投稿
- **3:2：** デスクトップ表示および写真スライドショー

---

### プラットフォーム・多言語展開・データ主権

#### Privro プラットフォーム全体で何言語がサポートされていますか？
Privro は、日本語、英語、スペイン語、ポルトガル語、イタリア語、ドイツ語、フランス語、ヒンディー語、インドネシア語、ポーランド語、オランダ語、スウェーデン語、デンマーク語、ノルウェー語、フィンランド語、チェコ語、トルコ語、ロシア語、韓国語、繁体字中国語、アラビア語、ヘブライ語の **世界22言語** に対応しています。各言語エディションは `https://privro.com/{言語コード}` で提供されています。

#### `https://privro.com/llms.txt` とは何ですか？
[privro.com/llms.txt](https://privro.com/llms.txt) および [privro.com/llms-full.txt](https://privro.com/llms-full.txt) は、LLMやAI検索エージェント向けに最適化された技術仕様書です。Privro のローカルプライバシー構造、Whisperモデル性能、FFmpeg設定、Piper音声パラメータなどの正確な技術情報をAIへ提供します。

---

## クレジット & 謝辞（Credits & Attributions）

- [Piper](https://github.com/rhasspy/piper) および [Piper Voices](https://huggingface.co/rhasspy/piper-voices)（Michael Hansen 氏および Rhasspy コミュニティ）
- [Kokoro TTS](https://github.com/hexgrad/kokoro) モデル（Hexgrad 氏）
- [kokoro-js](https://www.npmjs.com/package/kokoro-js)、[kokoro-web](https://github.com/xenova/kokoro-web)、[Transformers.js](https://huggingface.co/docs/transformers.js)
- [ONNX Runtime Web](https://onnxruntime.ai/)（Microsoft 社）
- [eSpeak NG](https://github.com/espeak-ng/espeak-ng) 音素化ライブラリ

---

## ライセンス（License）

Apache License 2.0 に基づき公開されています。詳細は [LICENSE](LICENSE) ファイルをご参照ください。
