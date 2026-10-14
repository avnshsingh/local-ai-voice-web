<div align="center">

[![Language: Portuguese](https://img.shields.io/badge/Language-Português%20(Portuguese)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

</div>

# Privro AI Voice - Gerador de Voz com IA e Texto para Voz Grátis no Navegador

Gerador neural de texto para voz (Text to Speech) direto no navegador e com zero upload para o [Privro AI](https://privro.com/pt). Digite ou cole seu texto, escolha um modelo de voz e gere locuções humanas naturais totalmente no seu próprio dispositivo. O áudio é sintetizado localmente com Web Workers e WebGPU — nenhum texto ou áudio é enviado para servidores externos.

- **Aplicação Web em Tempo Real:** [voice.privro.com](https://voice.privro.com)
- **Estúdio de Voz Privro:** [privro.com/pt/piper-voice](https://privro.com/pt/piper-voice)
- **Metadados Legíveis por Máquina:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Dois Motores Neuronais de Texto para Voz (Dual Neural TTS Engines)

Este projeto integra dois motores de síntese de voz neural de alto desempenho que rodam inteiramente no lado do cliente (no seu navegador):

1. **Piper TTS (Motor Principal):**
   - Síntese de voz neural local de alta velocidade alimentada por ONNX Runtime Web e eSpeak NG.
   - **Mais de 300 vozes em mais de 40 idiomas (58 variantes regionais)**, incluindo vozes em português do Brasil (`pt_BR` - Cadu, Edresson, Faber e Jeff) e de Portugal (`pt_PT` - Tugão).
   - Aceleração por hardware com **WebGPU**, com alternância automática para **WebAssembly (WASM)** multithread.
   - Modelos de voz com suporte a múltiplos locutores e seleção personalizada de locutor (Speaker ID).
   - Níveis de qualidade sob medida: desde modelos ultraleves (`x_low`, `low`) até modelos de alta fidelidade sonora (`medium`, `high`).
   - Armazenamento em cache no navegador via `CacheStorage`: os modelos de voz (~20–60 MB) são baixados apenas uma vez e funcionam 100% offline a partir de então.
   - Download direto de áudio em formato **PCM WAV de 16 bits sem perda (22.05 kHz)**.

2. **Kokoro TTS (Motor Secundário):**
   - Vozes ultrarrealistas geradas pelo modelo [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) através do pacote [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Estilos de voz expressivos e naturais em inglês americano e britânico.
   - Streaming de áudio em tempo real por blocos, permitindo ouvir o início da fala imediatamente enquanto os parágrafos seguintes continuam sendo processados.
   - Controles completos de reprodução: play, pause, retomar e ajuste de velocidade de fala.

---

## Ferramentas Privro (Privro Tools)

O Privro é uma suíte de ferramentas de produtividade e criação desenvolvida sob o conceito *local-first*. Todas as ferramentas locais rodam 100% no seu computador, sem necessidade de cadastro, sem chaves de API, sem envio de arquivos e sem cobranças em dólares.

| Ferramentas e Páginas | O que faz |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Transcrição Local Gratuita (Whisper AI)](https://privro.com/pt/transcribe) | Conversor de voz para texto no seu dispositivo com OpenAI Whisper (de Tiny até Large Turbo) em 99 idiomas. Sem upload, sem limites de minutos e sem necessidade de conta. |
| [Conversor de MP4 para Texto](https://privro.com/pt/mp4-to-text) | Conversor gratuito de vídeo MP4 em texto online. Transforma gravações em transcrições de texto (TXT, DOCX, PDF) ou legendas (SRT, VTT) usando Whisper local. |
| [Caption Studio - Editor de Legendas de Vídeo](https://privro.com/pt/caption-studio) | Adicione legendas automáticas animadas estilo TikTok e karaokê aos seus vídeos. Renderização de vídeo no navegador com FFmpeg até em resolução 4K sem marca d'água. |
| [Estúdio de Texto para Voz Neuronal Piper](https://privro.com/pt/piper-voice) | Estúdio completo de síntese de voz no navegador dentro do Privro. Mais de 300 vozes, seleção de locutor, aceleração WebGPU e exportação em WAV cristalino. |
| [Gerador de Texto para Voz Gratuito](https://privro.com/pt/text-to-speech) | Conversor de texto para voz rápido, seguro e online. Transforme textos em áudios falados naturais diretamente no navegador sem depender da nuvem. |
| [App Web de Voz IA Local](https://voice.privro.com) | Aplicativo autônomo com motores duplos de voz neural (Piper TTS e Kokoro TTS) executado diretamente no navegador (este repositório). |
| [Alternativa ao Otter.ai (Grátis e Ilimitado)](https://privro.com/pt/alternatives/otter) | Compare a transcrição ilimitada no navegador do Privro com os bots de reunião em nuvem e as mensalidades caras em dólares do Otter. |
| [Alternativa ao Happy Scribe (Sem Upload)](https://privro.com/pt/alternatives/happyscribe) | Compare o Caption Studio e a transcrição Whisper local do Privro (zero upload) com os planos restritivos e taxas por minuto do Happy Scribe. |
| [Preços e Planos do Privro AI](https://privro.com/pt/pricing) | Ferramentas locais gratuitas para sempre, além de assinaturas opcionais de transcrição na nuvem e pacotes de créditos pré-pagos sem validade. |

---

## Texto para Voz no Privro (Text to Speech on Privro)

O Privro oferece soluções de síntese de voz no cliente, sem upload e focadas em velocidade e privacidade:

- **[Piper Voice Studio](https://privro.com/pt/piper-voice):** O estúdio interativo completo integrado à plataforma Privro. Filtre entre mais de 300 vozes em mais de 40 idiomas, escolha o locutor em modelos multivoz, alterne entre WebGPU e WASM, armazene modelos em cache e exporte arquivos WAV profissionais.
- **[Gerador de Texto para Voz](https://privro.com/pt/text-to-speech):** Portal online com guias práticos e geração simplificada de narrações para vídeos e apresentações.
- **[App de Voz IA Local](https://voice.privro.com):** A aplicação web progressiva (PWA) de código aberto construída neste repositório, com abas dedicadas para alternar entre Piper TTS e Kokoro TTS.

### Arquitetura de Privacidade no Dispositivo (On-Device Privacy)
Toda a síntese de áudio é processada localmente por meio de Web Workers do navegador:
- **Nenhum texto é transmitido para servidores remotos.**
- **Nenhum áudio gerado é gravado ou monitorado.**
- **Sem necessidade de cadastro, senhas ou chaves de API.**
- **Funciona 100% offline** assim que o modelo de voz e os arquivos de execução são salvos no cache do navegador.
- **Em total conformidade com a LGPD** (Brasil) e o **RGPD** (União Europeia).

---

## Especificações Legíveis por Máquina (`llms.txt` e `llms-full.txt`)

O Privro disponibiliza documentação estruturada e padronizada para inteligências artificiais e crawlers web em:

- **Índice Resumido:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Especificação Técnica Completa:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Esses arquivos fornecem a assistentes LLM e agentes autônomos informações técnicas detalhadas sobre o modelo de privacidade local, perfis de exportação FFmpeg, parâmetros de modelos Whisper, catálogo de vozes neuronais e rotas internacionais.

---

## Idiomas Disponíveis no Privro (Languages Available on Privro)

O Privro é totalmente traduzido e adaptado em **22 idiomas**. A versão em inglês é hospedada na raiz do domínio, enquanto cada idioma possui sua rota dedicada:

| Idioma (Language) | Nome Nativo | Código | Página Inicial (Homepage) |
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

> **Nota:** As ferramentas essenciais, incluindo o [App de Transcrição](https://privro.com/pt/transcribe), o [Caption Studio](https://privro.com/pt/caption-studio) e o [Piper Voice](https://privro.com/pt/piper-voice), estão 100% traduzidas e localizadas em todos os 22 idiomas.

---

## Idiomas Compatíveis com o Piper TTS (Languages Supported by Piper TTS)

O Piper TTS inclui **mais de 300 checkpoints de voz neural de código aberto** abrangendo **58 códigos linguísticos e regionais** em 42 famílias de idiomas. Todas as vozes podem ser carregadas instantaneamente no navegador:

| Idioma (Language) | Nome Nativo | Código | Região / País | Vozes Disponíveis |
| ------------------- | ------------------------- | --------- | -------------------------------- | ----------------- |
| Arabic (Árabe) | العربية | `ar_JO` | Jordânia | 2 vozes |
| Bulgarian (Búlgaro) | български | `bg_BG` | Bulgária | 1 voz |
| Bengali (Bengali) | বাংলা | `bn_BD` | Bangladesh | 1 voz |
| Catalan (Catalão) | Català | `ca_ES` | Espanha | 3 vozes |
| Czech (Tcheco) | Čeština | `cs_CZ` | República Tcheca | 3 vozes |
| Welsh (Galês) | Cymraeg | `cy_GB` | Grã-Bretanha | 2 vozes |
| Danish (Dinamarquês)| Dansk | `da_DK` | Dinamarca | 1 voz |
| German (Alemão) | Deutsch | `de_DE` | Alemanha | 10 vozes |
| Greek (Grego) | Ελληνικά | `el_GR` | Grécia | 3 vozes |
| English (UK) | English (UK) | `en_GB` | Grã-Bretanha | 11 vozes |
| English (US) | English (US) | `en_US` | Estados Unidos | 27 vozes |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 voz |
| Spanish (Spain) | Español (España) | `es_ES` | Espanha | 5 vozes |
| Spanish (Mexico) | Español (México) | `es_MX` | México | 3 vozes |
| Estonian (Estoniano)| eesti | `et_EE` | Estônia | 1 voz |
| Basque (Basco) | Euskara | `eu_ES` | Espanha | 2 vozes |
| Persian / Farsi | فارسی | `fa_IR` | Irã | 5 vozes |
| Finnish (Finlandês) | Suomi | `fi_FI` | Finlândia | 2 vozes |
| French (Francês) | Français | `fr_FR` | França | 7 vozes |
| Hebrew (Hebraico) | עִבְרִית | `he_IL` | Israel | 1 voz |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Índia | 3 vozes |
| Hungarian (Húngaro) | Magyar | `hu_HU` | Hungria | 3 vozes |
| Armenian (Armênio) | հայերեն | `hy_AM` | Armênia | 1 voz |
| Indonesian (Indonésio)| Bahasa Indonesia | `id_ID` | Indonésia | 1 voz |
| Icelandic (Islandês)| íslenska | `is_IS` | Islândia | 4 vozes |
| Italian (Italiano) | Italiano | `it_IT` | Itália | 4 vozes |
| Japanese (Japonês) | 日本語 | `ja_JP` | Japão | 1 voz |
| Georgian (Georgiano)| ქართული ენა | `ka_GE` | Geórgia | 1 voz |
| Kazakh (Cazaque) | қазақша | `kk_KZ` | Cazaquistão | 3 vozes |
| Korean (Coreano) | 한국어 | `ko_KR` | Coreia do Sul | 1 voz |
| Kurdish (Curdo) | Kurmancî | `ku_TR` | Turquia | 1 voz |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxemburgo | 1 voz |
| Lithuanian (Lituano)| Lietuvių | `lt_LT` | Lituânia | 1 voz |
| Latvian (Letão) | Latviešu | `lv_LV` | Letônia | 1 voz |
| Malayalam | മലയാളം | `ml_IN` | Índia | 2 vozes |
| Marathi | मराठी | `mr_IN` | Índia | 1 voz |
| Nepali (Nepalês) | नेपाली | `ne_NP` | Nepal | 3 vozes |
| Dutch (Bélgica) | Nederlands (België) | `nl_BE` | Bélgica | 4 vozes |
| Dutch (Países Baixos)| Nederlands (Nederland)| `nl_NL` | Países Baixos | 6 vozes |
| Norwegian (Norueguês)| Norsk | `no_NO` | Noruega | 2 vozes |
| Polish (Polonês) | Polski | `pl_PL` | Polônia | 5 vozes |
| Portuguese (Brasil) | Português (Brasil) | `pt_BR` | Brasil | 4 vozes |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 voz |
| Romanian (Romeno) | Română | `ro_RO` | Romênia | 1 voz |
| Russian (Russo) | Русский | `ru_RU` | Rússia | 4 vozes |
| Slovak (Eslovaco) | Slovenčina | `sk_SK` | Eslováquia | 1 voz |
| Slovenian (Esloveno)| Slovenščina | `sl_SI` | Eslovênia | 1 voz |
| Albanian (Albanês) | shqip | `sq_AL` | Albânia | 1 voz |
| Serbian (Sérvio) | srpski | `sr_RS` | Sérvia | 1 voz |
| Swedish (Sueco) | Svenska | `sv_SE` | Suécia | 3 vozes |
| Swahili (Suaíli) | Kiswahili | `sw_CD` | RD do Congo | 1 voz |
| Telugu | తెలుగు | `te_IN` | Índia | 3 vozes |
| Thai (Tailandês) | ไทย | `th_TH` | Tailândia | 1 voz |
| Turkish (Turco) | Türkçe | `tr_TR` | Turquia | 1 voz |
| Ukrainian (Ucraniano)| украї́нська мо́ва | `uk_UA` | Ucrânia | 5 vozes |
| Urdu (Urdu) | اردو | `ur_PK` | Paquistão | 2 vozes |
| Vietnamese (Vietnamita)| Tiếng Việt | `vi_VN` | Vietnã | 3 vozes |
| Chinese (Chinês Simplificado)| 简体中文 | `zh_CN` | China | 4 vozes |

---

## Arquitetura Técnica e Funcionamento (Technical Architecture)

### 1. Pipeline do Piper TTS (Piper TTS Pipeline)
```
[Texto do Usuário]
    │
    ▼
[Web Worker: eSpeak NG Fonemizador]  ──► Converte o texto escrito em IDs de fonemas
    │
    ▼
[Web Worker: ONNX Runtime Web]       ──► Executa o modelo neural (.onnx) via WebGPU ou WASM
    │
    ▼
[Buffer de Áudio PCM]                ──► Monta o fluxo de áudio PCM de 16 bits a 22.05 kHz
    │
    ▼
[Web Audio API / WAV Blob]           ──► Reprodução instantânea e download de arquivo WAV sem perda
```

- **Binários Hospedados em CDN Edge:** Os binários estáticos pesados (arquivos WASM do ONNX Runtime, dados do fonemizador eSpeak) são distribuídos via Cloudflare R2 (`VITE_PIPER_CDN_URL`) para manter os clones do repositório e o pacote inicial leves.
- **Armazenamento de Modelos no Navegador:** Os modelos de voz `.onnx` baixados são gravados de forma persistente no `CacheStorage` do navegador (`piper-voices-cache-v1`), possibilitando a síntese instantânea em acessos subsequentes sem consumir dados da internet.

### 2. Pipeline do Kokoro TTS (Kokoro TTS Pipeline)
- Um web worker dedicado inicializa o modelo `onnx-community/Kokoro-82M-v1.0-ONNX` via Transformers.js.
- O áudio é transmitido em blocos (*chunks*) para a interface em tempo real, permitindo reproduzir a introdução enquanto os parágrafos seguintes ainda estão em geração.
- Suporte a pausa, retomada e velocidade de narração ajustável (0.5x a 2.0x).

---

## Tecnologias Utilizadas (Tech Stack)

- **Framework Web:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Interface e Estilização:** [Tailwind CSS](https://tailwindcss.com/) + componentes [shadcn/ui](https://ui.shadcn.com/)
- **Motores de Síntese TTS:**
  - [Piper](https://github.com/rhasspy/piper) via ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Fonemizador WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Aceleração de Hardware:** WebGPU com alternância automática para Web Workers WASM SIMD multithread
- **Ícones e Notificações:** Lucide Icons e notificações toast com Sonner

---

## Primeiros Passos (Getting Started)

### Pré-requisitos
- Node.js 18 ou versão superior.
- Um navegador de internet moderno com suporte a WebAssembly. Para obter máxima velocidade de síntese, recomenda-se o uso do Google Chrome ou Microsoft Edge com suporte a WebGPU.

### Instalação

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Configuração do Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Configure `VITE_PIPER_CDN_URL` com a URL do seu bucket de CDN Cloudflare R2:

```env
VITE_PIPER_CDN_URL="https://seu-subdominio-bucket.r2.dev"
```

### Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000/](http://localhost:3000/) no seu navegador.

### Compilação para Produção

```bash
npm run build    # Compila o pacote otimizado em /dist
npm run preview  # Visualiza o build de produção localmente
```

---

## Perguntas Frequentes (FAQ)

### Gerador de Voz com IA e Texto para Voz Gratuito

#### Este gerador de voz com IA é 100% gratuito e sem limite de caracteres?
Sim. Não há limites de palavras, travas diárias de caracteres nem assinaturas pagas em dólares para gerar voz localmente. Como as redes neurais rodam inteiramente no seu navegador usando o hardware do seu próprio computador (CPU ou placa de vídeo com WebGPU), nós não temos custos de computação em servidores e repassamos essa economia para você com uma ferramenta ilimitada e gratuita.

#### Posso monetizar vídeos no YouTube, TikTok e Reels com essas vozes de IA? (Canais Dark)
Sim, com certeza! As diretrizes oficiais de monetização do Programa de Parcerias do YouTube (AdSense) e do TikTok autorizam expressamente o uso de vozes sintetizadas por IA, desde que o vídeo tenha valor agregado (roteiro original, boa edição, humor ou curadoria informativa). Nossas vozes vêm de modelos neurais de código aberto com licenças permissivas (Apache 2.0 / MIT) livres de royalties e sem direitos autorais, permitindo o uso seguro em canais dark, canais de curiosidades, tutoriais e anúncios.

#### Essas vozes soam como o antigo Loquendo ou são naturais?
É a evolução moderna do clássico Loquendo. Enquanto o Loquendo tradicional marcou época no YouTube com uma voz robótica e exigia programas complexos no Windows, o Privro traz redes neurais modernas com entonação humana, pausas naturais e fluidez, sem precisar instalar nada no PC. Além disso, conta com 4 vozes nativas em português brasileiro (`pt_BR`: Cadu, Edresson, Faber, Jeff) e 1 voz em português europeu (`pt_PT`: Tugão).

#### Meus textos ou áudios são enviados para algum servidor externo?
Não. Tudo permanece estritamente na memória da sua própria máquina. Quando você cola um texto e clica em "Generate", a rede neural sintetiza o áudio em um Web Worker em segundo plano no seu navegador. Nenhum roteiro, gravação ou informação confidencial sai do seu computador.

#### Posso baixar o arquivo de áudio gerado para editar vídeos?
Sim. Assim que a síntese for concluída, você pode baixar a faixa de áudio completa como um arquivo **PCM WAV de 16 bits sem perda (22.05 kHz)**. O arquivo é 100% limpo, sem marcas d'água e pronto para ser arrastado para o CapCut, Premiere Pro, DaVinci Resolve ou Filmora.

#### O gerador de voz funciona sem conexão à internet (Offline)?
Sim, a partir do segundo uso. Na primeira vez em que você seleciona uma voz, o navegador baixa o arquivo do modelo (~20 MB a ~60 MB) e o armazena no `CacheStorage` do seu navegador. Nas visitas seguintes, o modelo carrega instantaneamente do disco local sem consumir sua internet, permitindo gerar locuções mesmo sem rede.

#### Por que a tecnologia WebGPU é utilizada?
A WebGPU permite que o navegador acerte e execute tensores neurais diretamente na sua placa de vídeo (GPU), gerando voz de 3 a 5 vezes mais rápido do que um processador convencional. Se o seu dispositivo não possuir placa de vídeo dedicada, o sistema chaveia automaticamente para WebAssembly multithread (WASM) na sua CPU.

---

### Transcrição de Áudio para Texto e Conversor de Vídeo em Texto

#### Como transcrever áudio em texto grátis e sem limite de minutos?
Você pode transcrever qualquer áudio gravado usando a [ferramenta gratuita de transcrição local do Privro](https://privro.com/pt/transcribe). Basta arrastar seu arquivo de áudio (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, gravações de voz do WhatsApp, etc.), escolher o idioma (ou deixar em detecção automática) e o modelo Whisper transcreverá tudo no seu navegador. Ao finalizar, exporte em texto ou legendas.

#### Como converter vídeos MP4 em texto ou gerar legendas?
Para converter vídeos em texto, arraste seu arquivo MP4, WEBM ou MOV para o [Privro Transcrição Local](https://privro.com/pt/transcribe) ou para o [conversor de MP4 para texto](https://privro.com/pt/mp4-to-text). O navegador extrai o áudio internamente e transcreve cada palavra com marcação de tempo sem que você precise fazer o upload de vídeos pesados na internet.

#### Existe limite de minutos ou de tamanho de arquivo na transcrição?
Não. Diferente de plataformas na nuvem que bloqueiam contas gratuitas após 10 ou 15 minutos e cobram mensalidades caras em dólares, a transcrição local do Privro tem **zero limite de minutos e zero cotas de quantidade**. Você pode transcrever notas de voz curtas ou aulas universitárias de 3 horas inteiramente grátis.

#### É seguro para dados confidenciais de advogados, médicos e jornalistas?
Sim, com garantia absoluta. Como o modelo OpenAI Whisper roda dentro da sandbox WebAssembly do seu navegador, o áudio é decodificado apenas na memória RAM do seu computador e nunca viaja pela rede. É a solução ideal para profissionais sujeitos ao sigilo médico, jurídico ou jornalístico em total conformidade com a **LGPD** (Brasil) e o **RGPD** (Portugal/UE).

#### Em quais formatos posso baixar as transcrições?
Você pode exportar a transcrição com marcações de tempo sincronizadas em 8 formatos:
- Texto simples: `TXT`
- Legendas: `SRT`, `VTT`
- Planilhas e dados: `CSV`, `JSON`, `XLSX`
- Documentos formatados: Word `DOCX`, `PDF`

---

### Caption Studio: Legendas Automáticas para Vídeos

#### Posso colocar legendas automáticas animadas nos meus vídeos sem marca d'água?
Sim. O [Caption Studio](https://privro.com/pt/caption-studio) permite que você envie seu vídeo, transcreva as falas automaticamente com Whisper local, personalize estilos de legenda estilo karaokê e queime/embuta o texto diretamente no vídeo. A renderização é feita no navegador via FFmpeg em resolução de até **4K sem marcas d'água**.

#### Quais proporções de tela (Aspect Ratios) são suportadas?
Você pode formatar seus vídeos para todas as principais redes sociais:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts
- **16:9:** YouTube tradicional, monitores e paisagem
- **1:1:** Feed quadrado do Instagram e LinkedIn
- **4:5:** Feed vertical do Instagram
- **3:2:** Fotografia e telas de desktop

---

### Plataforma, Idiomas e Privacidade

#### Quantos idiomas estão disponíveis em toda a plataforma Privro?
O Privro está localizado em **22 idiomas**: inglês, espanhol, português, italiano, alemão, francês, hindi, indonésio, polonês, japonês, holandês, sueco, dinamarquês, norueguês, finlandês, tcheco, turco, russo, coreano, chinês tradicional, árabe e hebraico. Cada idioma possui sua página inicial própria em `https://privro.com/{locale}`.

#### O que são os arquivos `llms.txt` e `llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) e [privro.com/llms-full.txt](https://privro.com/llms-full.txt) são especificações técnicas estruturadas que seguem o padrão emergente `llms.txt`. Elas fornecem a assistentes de inteligência artificial e indexadores um resumo verificado sobre o modelo de privacidade local, especificações de modelos Whisper e vozes Piper do Privro.

---

## Créditos e Agradecimentos (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) e [Piper Voices](https://huggingface.co/rhasspy/piper-voices) por Michael Hansen e projeto Rhasspy.
- Modelo [Kokoro TTS](https://github.com/hexgrad/kokoro) por Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) e [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) pela Microsoft.
- Biblioteca fonética [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Licença (License)

Licença Apache 2.0. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes completos.
