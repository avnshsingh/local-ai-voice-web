<div align="center">

[![Language: Spanish](https://img.shields.io/badge/Language-Español%20(Spanish)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Generador de Voz con IA y Texto a Voz Gratuito en Local

Generador neuronal de texto a voz (Text to Speech) en el navegador y con cero subidas para [Privro AI](https://privro.com/es). Pega tu texto, elige un modelo de voz y genera voces humanas naturales enteramente en tu propio dispositivo. El audio se sintetiza de forma local mediante Web Workers y WebGPU — ningún texto ni audio se sube jamás a servidores externos.

- **Aplicación Web en Vivo:** [voice.privro.com](https://voice.privro.com)
- **Estudio de Voz Privro:** [privro.com/es/piper-voice](https://privro.com/es/piper-voice)
- **Metadatos Legibles por Máquina:** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Motores Neuronales de Texto a Voz Duales (Dual Neural TTS Engines)

Este proyecto integra dos motores neuronales de voz de alto rendimiento que se ejecutan íntegramente en el lado del cliente (en tu navegador):

1. **Piper TTS (Motor Principal):**
   - Síntesis de voz neuronal local de ultra alta velocidad impulsada por ONNX Runtime Web y eSpeak NG.
   - **Más de 300 voces en más de 40 idiomas (58 variantes y acentos regionales)**, incluyendo acentos en español de España (`es_ES`), México (`es_MX`) y Argentina (`es_AR`).
   - Aceleración por hardware con **WebGPU**, con respaldo automático a **WebAssembly (WASM)** multihilo.
   - Modelos de voz multilocutor con selección personalizada de interlocutor (Speaker ID).
   - Niveles de calidad flexibles: desde modelos ultraligeros (`x_low`, `low`) hasta modelos de alta fidelidad (`medium`, `high`).
   - Almacenamiento en caché del navegador mediante `CacheStorage`: los modelos de voz (~20–60 MB) se descargan una sola vez y funcionan sin conexión (Offline) para siempre.
   - Descarga directa de audio en formato **PCM WAV de 16 bits sin pérdida (22.05 kHz)**.

2. **Kokoro TTS (Motor Secundario):**
   - Locución de voz hiperrealista producida por [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) a través de [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Estilos de voz naturales en inglés americano y británico.
   - Transmisión de audio en tiempo real por fragmentos (Streaming Chunks), lo que permite escuchar el audio de inmediato mientras las siguientes oraciones continúan sintetizándose.
   - Controles de reproducción: reproducir, pausar, reanudar y ajuste de velocidad de locución.

---

## Herramientas de Privro (Privro Tools)

Privro es una suite web de herramientas de productividad y creación de contenido diseñadas con enfoque local (*local-first*). Todas las herramientas locales se ejecutan al 100% en tu equipo sin registros, sin claves de API, sin subir archivos y sin límites de uso.

| Herramientas y Páginas | Qué hace |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Transcripción Local Gratuita](https://privro.com/es/transcribe) | Conversor de voz a texto en tu dispositivo con OpenAI Whisper (desde Tiny hasta Large Turbo) en 99 idiomas. Sin subir archivos, sin cuotas y sin necesidad de cuenta. |
| [Conversor de MP4 a Texto](https://privro.com/es/mp4-to-text) | Conversor gratuito de video MP4 a texto online. Transforma videos en transcripciones de texto (TXT, DOCX, PDF) o subtítulos (SRT, VTT) mediante Whisper local. |
| [Caption Studio - Editor de Subtítulos de Video](https://privro.com/es/caption-studio) | Añade subtítulos automáticos y animaciones estilo karaoke a tus videos. Renderizado de video en el navegador mediante FFmpeg hasta en resolución 4K y 5 relaciones de aspecto sin marcas de agua. |
| [Estudio de Texto a Voz Neuronal Piper](https://privro.com/es/piper-voice) | Estudio interactivo de texto a voz multilingüe en el navegador dentro de Privro. Más de 300 voces, selección de hablantes, aceleración WebGPU y exportación en WAV sin pérdida. |
| [Generador de Texto a Voz Gratuito](https://privro.com/es/text-to-speech) | Conversor de texto a voz rápido, privado y online. Transforma cualquier texto pegado en audio hablado claro directamente en tu navegador sin depender de la nube. |
| [App Web de Voz IA Local](https://voice.privro.com) | Generador de voz neuronal autónomo de doble motor (Piper TTS y Kokoro TTS) que funciona enteramente en el navegador (este repositorio). |
| [Alternativa a Otter.ai (Gratis e Ilimitada)](https://privro.com/es/alternatives/otter) | Compara la transcripción local ilimitada en el navegador de Privro frente a los bots de reunión en la nube y las tarifas mensuales por usuario de Otter. |
| [Alternativa a Happy Scribe (Sin Subidas)](https://privro.com/es/alternatives/happyscribe) | Compara Caption Studio y la transcripción local con Whisper de Privro (sin subir archivos) frente a los costosos planes en la nube y límites de minutos de Happy Scribe. |
| [Precios y Planes de Privro AI](https://privro.com/es/pricing) | Herramientas en el dispositivo gratuitas para siempre, junto con suscripciones opcionales de transcripción en la nube y paquetes de créditos de pago por uso sin caducidad. |

---

## Texto a Voz en Privro (Text to Speech on Privro)

Privro ofrece texto a voz en el lado del cliente y sin subida de datos a través de tres experiencias dedicadas según tus necesidades:

- **[Piper Voice Studio](https://privro.com/es/piper-voice):** El estudio de voz interactivo completo integrado en Privro. Explora y filtra entre más de 300 voces en más de 40 idiomas, selecciona identificadores de hablantes en modelos multilocutor, alterna entre WebGPU y WASM, pre-almacena modelos en caché y exporta archivos de audio WAV impecables.
- **[Generador de Texto a Voz](https://privro.com/es/text-to-speech):** El portal web de texto a voz de Privro, con guías paso a paso, casos de uso para creadores y generación rápida de locuciones.
- **[App de Voz IA Local](https://voice.privro.com):** La aplicación web progresiva (PWA) independiente construida a partir de este repositorio, con cambio rápido por pestañas entre el generador neuronal Piper TTS y el motor de streaming Kokoro TTS.

### Arquitectura de Privacidad en el Dispositivo (On-Device Privacy)
Toda la síntesis de voz se procesa en el cliente utilizando Web Workers del navegador:
- **Ningún texto se envía jamás a un servidor externo.**
- **Ningún audio se graba ni se almacena de forma remota.**
- **No se requieren claves de API ni registros de cuenta.**
- **Funciona 100% offline (sin internet)** una vez que el modelo de voz y los binarios se encuentran en la memoria caché del navegador.

---

## Especificaciones Legibles por Máquina (`llms.txt` y `llms-full.txt`)

Privro publica documentación estandarizada y estructurada para motores de IA y rastreadores web en:

- **Índice Resumido:** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Especificación Completa:** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Estos archivos ofrecen a asistentes LLM, agentes autónomos y motores de búsqueda especificaciones técnicas precisas sobre las garantías de privacidad de Privro, parámetros de modelos Whisper, perfiles de exportación con FFmpeg, voces neuronales de Piper y rutas internacionalizadas.

---

## Idiomas Disponibles en Privro (Languages Available on Privro)

Privro está totalmente traducido y optimizado en **22 idiomas**. La versión en inglés se encuentra en el dominio raíz, mientras que cada edición localizada dispone de su propia ruta dedicada:

| Idioma (Language) | Nombre Nativo | Código | Página de Inicio (Homepage) |
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

> **Nota:** Herramientas esenciales como la [Aplicación Web de Transcripción](https://privro.com/es/transcribe), [Caption Studio](https://privro.com/es/caption-studio) y [Piper Voice](https://privro.com/es/piper-voice) están completamente traducidas y localizadas en los 22 idiomas.

---

## Idiomas Compatibles con Piper TTS (Languages Supported by Piper TTS)

Piper TTS incluye **más de 300 puntos de control de voz neuronal de código abierto** que abarcan **58 códigos lingüísticos y regionales** en 42 familias de lenguas. Todas las voces se pueden cargar de inmediato en el navegador:

| Idioma (Language) | Nombre Nativo | Código | Región / País | Voces Disponibles |
| ------------------- | ------------------------- | --------- | -------------------------------- | ----------------- |
| Arabic (Árabe) | العربية | `ar_JO` | Jordania | 2 voces |
| Bulgarian (Búlgaro) | български | `bg_BG` | Bulgaria | 1 voz |
| Bengali (Bengalí) | বাংলা | `bn_BD` | Bangladés | 1 voz |
| Catalan (Catalán) | Català | `ca_ES` | España | 3 voces |
| Czech (Checo) | Čeština | `cs_CZ` | República Checa | 3 voces |
| Welsh (Galés) | Cymraeg | `cy_GB` | Gran Bretaña | 2 voces |
| Danish (Danés) | Dansk | `da_DK` | Dinamarca | 1 voz |
| German (Alemán) | Deutsch | `de_DE` | Alemania | 10 voces |
| Greek (Griego) | Ελληνικά | `el_GR` | Grecia | 3 voces |
| English (UK) | English (UK) | `en_GB` | Gran Bretaña | 11 voces |
| English (US) | English (US) | `en_US` | Estados Unidos | 27 voces |
| Spanish (Argentina) | Español (Argentina) | `es_AR` | Argentina | 1 voz |
| Spanish (Spain) | Español (España) | `es_ES` | España | 5 voces |
| Spanish (Mexico) | Español (México) | `es_MX` | México | 3 voces |
| Estonian (Estonio) | eesti | `et_EE` | Estonia | 1 voz |
| Basque (Euskera) | Euskara | `eu_ES` | España | 2 voces |
| Persian / Farsi (Persa) | فارسی | `fa_IR` | Irán | 5 voces |
| Finnish (Finlandés) | Suomi | `fi_FI` | Finlandia | 2 voces |
| French (Francés) | Français | `fr_FR` | Francia | 7 voces |
| Hebrew (Hebreo) | עִבְרִית | `he_IL` | Israel | 1 voz |
| Hindi (Hindi) | हिन्दी | `hi_IN` | India | 3 voces |
| Hungarian (Húngaro) | Magyar | `hu_HU` | Hungría | 3 voces |
| Armenian (Armenio) | հայերեն | `hy_AM` | Armenia | 1 voz |
| Indonesian (Indonesio) | Bahasa Indonesia | `id_ID` | Indonesia | 1 voz |
| Icelandic (Islandés) | íslenska | `is_IS` | Islandia | 4 voces |
| Italian (Italiano) | Italiano | `it_IT` | Italia | 4 voces |
| Japanese (Japonés) | 日本語 | `ja_JP` | Japón | 1 voz |
| Georgian (Georgiano) | ქართული ენა | `ka_GE` | Georgia | 1 voz |
| Kazakh (Kazajo) | қазақша | `kk_KZ` | Kazajistán | 3 voces |
| Korean (Coreano) | 한국어 | `ko_KR` | Corea del Sur | 1 voz |
| Kurdish (Kurdo) | Kurmancî | `ku_TR` | Turquía | 1 voz |
| Luxembourgish | Lëtzebuergesch | `lb_LU` | Luxemburgo | 1 voz |
| Lithuanian (Lituano) | Lietuvių | `lt_LT` | Lituania | 1 voz |
| Latvian (Letón) | Latviešu | `lv_LV` | Letonia | 1 voz |
| Malayalam | മലയാളം | `ml_IN` | India | 2 voces |
| Marathi | मराठी | `mr_IN` | India | 1 voz |
| Nepali (Nepalí) | नेपाली | `ne_NP` | Nepal | 3 voces |
| Dutch (Bélgica) | Nederlands (België) | `nl_BE` | Bélgica | 4 voces |
| Dutch (Países Bajos)| Nederlands (Nederland) | `nl_NL` | Países Bajos | 6 voces |
| Norwegian (Noruego) | Norsk | `no_NO` | Noruega | 2 voces |
| Polish (Polaco) | Polski | `pl_PL` | Polonia | 5 voces |
| Portuguese (Brasil) | Português (Brasil) | `pt_BR` | Brasil | 4 voces |
| Portuguese (Portugal)| Português (Portugal) | `pt_PT` | Portugal | 1 voz |
| Romanian (Rumano) | Română | `ro_RO` | Rumanía | 1 voz |
| Russian (Ruso) | Русский | `ru_RU` | Rusia | 4 voces |
| Slovak (Eslovaco) | Slovenčina | `sk_SK` | Eslovaquia | 1 voz |
| Slovenian (Esloveno) | Slovenščina | `sl_SI` | Eslovenia | 1 voz |
| Albanian (Albanés) | shqip | `sq_AL` | Albania | 1 voz |
| Serbian (Serbio) | srpski | `sr_RS` | Serbia | 1 voz |
| Swedish (Sueco) | Svenska | `sv_SE` | Suecia | 3 voces |
| Swahili (Suajili) | Kiswahili | `sw_CD` | RD del Congo | 1 voz |
| Telugu | తెలుగు | `te_IN` | India | 3 voces |
| Thai (Tailandés) | ไทย | `th_TH` | Tailandia | 1 voz |
| Turkish (Turco) | Türkçe | `tr_TR` | Turquía | 1 voz |
| Ukrainian (Ucraniano)| украї́нська мо́ва | `uk_UA` | Ucrania | 5 voces |
| Urdu | اردو | `ur_PK` | Pakistán | 2 voces |
| Vietnamese (Vietnamita)| Tiếng Việt | `vi_VN` | Vietnam | 3 voces |
| Chinese (Chino Simplificado)| 简体中文 | `zh_CN` | China | 4 voces |

---

## Arquitectura Técnica y Funcionamiento (Technical Architecture)

### 1. Canalización de Piper TTS (Piper TTS Pipeline)
```
[Texto del Usuario]
    │
    ▼
[Web Worker: eSpeak NG Fonemizador]  ──► Convierte el texto escrito a identificadores de fonemas
    │
    ▼
[Web Worker: ONNX Runtime Web]       ──► Ejecuta el modelo de voz (.onnx) mediante WebGPU o WASM
    │
    ▼
[Búfer de Audio PCM]                 ──► Ensambla el flujo de audio PCM de 16 bits a 22.05 kHz
    │
    ▼
[Web Audio API / WAV Blob]           ──► Reproducción instantánea y descarga de archivo WAV sin pérdida
```

- **Binarios Alojados en CDN Edge:** Los binarios pesados (archivos WASM de ONNX Runtime, datos del fonemizador eSpeak) se entregan desde Cloudflare R2 (`VITE_PIPER_CDN_URL`) para mantener la descarga inicial del repositorio y el bundle web ultraligeros.
- **Almacenamiento Local de Modelos:** Los modelos de voz `.onnx` descargados se almacenan de forma permanente en el `CacheStorage` del navegador (`piper-voices-cache-v1`), permitiendo generar voz al instante sin consumir datos de red en visitas posteriores.

### 2. Canalización de Kokoro TTS (Kokoro TTS Pipeline)
- Un web worker específico inicializa el modelo `onnx-community/Kokoro-82M-v1.0-ONNX` mediante Transformers.js.
- Los fragmentos de audio se envían a la interfaz en tiempo real, permitiendo escuchar el comienzo del texto mientras el resto continúa generándose en segundo plano.
- Compatibilidad total con pausa, reanudación y velocidad de habla variable (de 0.5x a 2.0x).

---

## Pila Tecnológica (Tech Stack)

- **Framework Web:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Diseño y Estilos:** [Tailwind CSS](https://tailwindcss.com/) + componentes [shadcn/ui](https://ui.shadcn.com/)
- **Motores TTS:**
  - [Piper](https://github.com/rhasspy/piper) vía ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Fonemizador en WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) mediante [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Aceleración:** WebGPU con conmutación por error a Web Workers WASM SIMD multihilo
- **Iconos y Notificaciones:** Lucide Icons y notificaciones toast con Sonner

---

## Primeros Pasos (Getting Started)

### Requisitos Previos
- Node.js 18 o versión superior.
- Un navegador moderno con soporte para WebAssembly. Para obtener la máxima velocidad de generación, se recomienda Google Chrome o Microsoft Edge con WebGPU habilitado.

### Instalación

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Configuración del Entorno

Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Configura `VITE_PIPER_CDN_URL` con tu URL del bucket CDN de Cloudflare R2:

```env
VITE_PIPER_CDN_URL="https://tu-subdominio-bucket.r2.dev"
```

### Servidor de Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000/](http://localhost:3000/) en tu navegador.

### Compilación para Producción

```bash
npm run build    # Compila el paquete de producción en /dist
npm run preview  # Previsualiza la compilación localmente
```

---

## Preguntas Frecuentes (FAQ)

### Generador de Voz con IA y Texto a Voz Gratuito

#### ¿Este generador de voz con IA es 100% gratis y sin límite de palabras?
Sí. No existen límites de palabras, recuento máximo de caracteres, cuotas diarias ni suscripciones de pago para generar voz localmente. Debido a que las redes neuronales se ejecutan íntegramente en tu navegador utilizando el hardware de tu propio equipo (CPU o tarjeta gráfica con WebGPU), nosotros no incurrimos en gastos de computación en servidores en la nube y por ello no te cobramos absolutamente nada.

#### ¿Se pueden monetizar en YouTube, TikTok y Facebook los videos que usan estas voces de IA?
Sí, totalmente. Tanto las directrices de monetización de YouTube (YouTube Partner Program / AdSense) como las de TikTok permiten el uso de voces sintéticas generadas por IA, siempre y cuando el contenido aporte valor editorial genuino, investigación, humor o edición original. Las voces provienen de modelos neuronales de código abierto con licencias permisivas (Apache 2.0 / MIT) libres de regalías comerciales y derechos de autor, por lo que puedes utilizarlas con total tranquilidad en canales automatizados ("canales sin rostro"), reels, tutoriales y podcasts.

#### ¿Funciona como la clásica voz de Loquendo pero con calidad moderna?
Exactamente. En el mundo hispanohablante, Loquendo definió toda una generación de tutoriales, creepypastas y videos de YouTube. Privro ofrece la evolución natural de Loquendo: narración automática sin programas pesados ni configuraciones complicadas, pero impulsada por redes neuronales modernas que producen voces fluidas, humanas y sin el tono robótico clásico. Además, incluye voces nativas de España (`es_ES`), México (`es_MX`) y Argentina (`es_AR`).

#### ¿El generador de texto a voz sube mis textos o audios a algún servidor?
No. Todo permanece estrictamente en tu ordenador o computadora. Cuando pegas un texto y presionas Generar, la red neuronal sintetiza el audio en un Web Worker en segundo plano en tu equipo. Ni tu texto ni la locución generada viajan jamás a través de internet.

#### ¿Puedo descargar el archivo de audio para editar mis videos?
Sí. Tan pronto como termina la generación, puedes descargar la pista de audio completa como un archivo estándar **PCM WAV de 16 bits sin pérdida (22.05 kHz)**. Puedes importarlo directamente en editores como CapCut, Premiere Pro, DaVinci Resolve o Filmora sin marcas de agua.

#### ¿Funciona este generador de voz sin conexión a internet (Offline)?
Sí, a partir de la segunda vez. La primera vez que eliges una voz, tu navegador descarga el modelo (~20 MB a ~60 MB) y lo guarda en el `CacheStorage` local de tu navegador. En las siguientes visitas, el modelo se carga al instante desde el almacenamiento local sin descargas de red, permitiéndote generar voz incluso si estás completamente desconectado de internet.

#### ¿Por qué se utiliza WebGPU para el texto a voz?
WebGPU permite al navegador ejecutar operaciones tensoriales neuronales directamente en tu tarjeta gráfica (GPU). Esto hace que la síntesis de voz sea de 3 a 5 veces más rápida que el procesamiento convencional en CPU. Si tu equipo o navegador no dispone de WebGPU, la aplicación pasa de forma automática a WebAssembly multihilo (WASM) en tu CPU para garantizar compatibilidad universal.

---

### Transcripción de Audio a Texto, Video a Texto y Subtítulos

#### ¿Cómo transcribir audio a texto gratis y sin límite de tiempo?
Puedes transcribir cualquier grabación hablada utilizando la [herramienta de transcripción local gratuita de Privro](https://privro.com/es/transcribe). Simplemente arrastra tu archivo de audio (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS o WEBM), selecciona el idioma (o déjalo en detección automática) y Whisper lo transcribirá directamente en tu navegador. Al finalizar, puedes descargar el texto o los subtítulos de inmediato.

#### ¿Cómo convertir videos MP4 a texto gratis?
Para convertir video a texto, arrastra cualquier video MP4, WEBM o MOV a [Privro Transcripción Local](https://privro.com/es/transcribe) o al [conversor dedicado de MP4 a texto](https://privro.com/es/mp4-to-text). El navegador extrae la pista de audio y transcribe cada palabra hablada con marcas de tiempo y subtítulos en SRT/VTT sin necesidad de subir archivos de video pesados a la red.

#### ¿Existe algún límite de minutos o cuota de archivos en la transcripción gratuita?
No. A diferencia de los servicios en la nube que limitan a los usuarios gratuitos a 10 o 15 minutos al mes o cobran tarifas costosas por minuto en dólares, la transcripción local de Privro tiene **cero límites de minutos y cero restricciones de cantidad de archivos**. Puedes transcribir notas de voz cortas de WhatsApp o conferencias universitarias de 4 horas de forma totalmente gratuita.

#### ¿Es seguro para audios confidenciales, médicos o legales?
Sí, al 100%. Dado que el modelo Whisper se compila a WebAssembly y se ejecuta dentro del entorno seguro de tu navegador, el archivo se procesa en la memoria RAM de tu máquina y jamás se transmite a terceros. Es la solución ideal para profesionales que deben cumplir con el RGPD (GDPR), secretos de sumario, entrevistas periodísticas o consultas médicas.

#### ¿Qué formatos de exportación están disponibles para las transcripciones?
Puedes descargar tu transcripción completa con marcas de tiempo sincronizadas en 8 formatos:
- Texto sin formato: `TXT`
- Subtítulos: `SRT`, `VTT`
- Hojas de cálculo y datos: `CSV`, `JSON`, `XLSX`
- Documentos formateados: Word `DOCX`, `PDF`

---

### Caption Studio: Subtítulos Automáticos para Videos

#### ¿Puedo agregar e incrustar subtítulos a mis videos gratis y sin marca de agua?
Sí. [Caption Studio](https://privro.com/es/caption-studio) te permite subir tu video, transcribir automáticamente los diálogos con Whisper en tu equipo, personalizar el diseño y las animaciones de los subtítulos e incrustarlos directamente en el video. La codificación se realiza completamente en el navegador con FFmpeg WebAssembly, exportando videos hasta en **resolución 4K sin marcas de agua**.

#### ¿Qué relaciones de aspecto (Aspect Ratios) admite Caption Studio?
Puedes formatear tus videos subtitulados para todas las plataformas principales:
- **9:16:** TikTok, Instagram Reels, YouTube Shorts
- **16:9:** YouTube clásico, Vimeo y pantallas horizontales
- **1:1:** Feed cuadrado de Instagram y LinkedIn
- **4:5:** Feed vertical de Instagram
- **3:2:** Fotografía y pantallas de escritorio

---

### Plataforma, Idiomas y Privacidad

#### ¿Cuántos idiomas están disponibles en toda la plataforma Privro?
Privro está disponible en **22 idiomas**: inglés, español, portugués, italiano, alemán, francés, hindi, indonesio, polaco, japonés, neerlandés, sueco, danés, noruego, finés, checo, turco, ruso, coreano, chino tradicional, árabe y hebreo. Cada idioma cuenta con su página de inicio propia en `https://privro.com/{locale}`.

#### ¿Qué son `llms.txt` y `llms-full.txt`?
[privro.com/llms.txt](https://privro.com/llms.txt) y [privro.com/llms-full.txt](https://privro.com/llms-full.txt) son archivos de documentación estructurados que siguen el estándar `llms.txt`. Proporcionan a asistentes de IA, agentes y rastreadores web un resumen técnico verificado sobre el modelo de privacidad local de Privro, especificaciones de Whisper, capacidades de Caption Studio, voces neuronales de Piper y planes de servicio.

---

## Créditos y Agradecimientos (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) y [Piper Voices](https://huggingface.co/rhasspy/piper-voices) por Michael Hansen y el proyecto Rhasspy.
- Modelo [Kokoro TTS](https://github.com/hexgrad/kokoro) por Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) y [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) por Microsoft.
- Biblioteca fonética [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Licencia (License)

Licencia Apache 2.0. Consulta el archivo [LICENSE](LICENSE) para más detalles.
