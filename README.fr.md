<div align="center">

[![Language: French](https://img.shields.io/badge/Language-Français%20(French)-blue?style=for-the-badge)](#)
[![Read in English](https://img.shields.io/badge/Read%20in-English-lightgrey?style=for-the-badge)](README.md)

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/avnshsingh/local-ai-voice-web)

<br/>

**Translations / Read in other languages:**

[English](README.md) • [Español](README.es.md) • [Português](README.pt.md) • [Italiano](README.it.md) • [Deutsch](README.de.md) • [Français](README.fr.md) • [हिन्दी](README.hi.md) • [Bahasa Indonesia](README.id.md) • [Polski](README.pl.md) • [日本語](README.ja.md) • [Nederlands](README.nl.md) • [Svenska](README.sv.md) • [Dansk](README.da.md) • [Norsk](README.no.md) • [Suomi](README.fi.md) • [Čeština](README.cs.md) • [Türkçe](README.tr.md) • [Русский](README.ru.md) • [한국어](README.ko.md) • [繁體中文](README.zh-tw.md) • [العربية](README.ar.md) • [עברית](README.he.md)

</div>

# Privro AI Voice - Générateur de Voix IA & Synthèse Vocale (Text-to-Speech) Gratuite dans le Navigateur

Générateur neuronal de synthèse vocale (Text-to-Speech) directement dans le navigateur et avec zéro upload pour [Privro AI](https://privro.com/fr). Saisissez votre texte, sélectionnez un modèle vocal et produisez une voix parlée naturelle d'une grande fluidité entièrement sur votre propre appareil. L'audio est synthétisé localement grâce aux Web Workers et à WebGPU : aucun texte ni fichier audio n'est jamais transmis à des serveurs distants.

- **Application Web en Direct :** [voice.privro.com](https://voice.privro.com)
- **Studio Vocal Privro :** [privro.com/fr/piper-voice](https://privro.com/fr/piper-voice)
- **Spécifications Lisibles par Machine :** [privro.com/llms.txt](https://privro.com/llms.txt) | [privro.com/llms-full.txt](https://privro.com/llms-full.txt)

---

## Deux Moteurs Neuronaux de Synthèse Vocale (Dual Neural TTS Engines)

Ce projet rassemble deux moteurs neuronaux de synthèse vocale haute performance exécutés intégralement côté client (dans votre navigateur) :

1. **Piper TTS (Moteur Principal) :**
   - Synthèse vocale neuronale locale à haute vélocité propulsée par ONNX Runtime Web et eSpeak NG.
   - **Plus de 300 voix dans plus de 40 langues (58 variantes régionales)**, dont **7 modèles vocaux français natifs** (`fr_FR` : Siwis medium/low, Tom medium, UPMC Sorbonne duo 2 voix, MLS 125 locuteurs, Gilles, MLS 1840).
   - Accélération matérielle native par **WebGPU**, avec basculement automatique et transparent vers **WebAssembly (WASM)** multithread avec SIMD.
   - Modèles multivocaux avec sélection d'identifiants de locuteurs (Speaker ID).
   - Niveaux de fidélité adaptés : depuis des profils ultra-légers et véloces (`x_low`, `low`) jusqu'à des voix haute fidélité de qualité studio (`medium`, `high`).
   - Mise en cache intelligente dans le navigateur via `CacheStorage` : les modèles vocaux (~20 à ~76 Mo) sont téléchargés une seule fois et fonctionnent à 100% hors ligne par la suite.
   - Téléchargement direct de la piste audio au format **PCM WAV 16 bits sans perte (22,05 kHz)**.

2. **Kokoro TTS (Moteur Secondaire) :**
   - Rendu vocal exceptionnellement naturel issu du modèle [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) via la bibliothèque [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).
   - Styles d'élocution réalistes en anglais américain et britannique.
   - Streaming audio par blocs (*chunk streaming*) en temps réel : écoutez les premières phrases immédiatement pendant que le moteur continue de générer les paragraphes suivants.
   - Contrôles complets de lecture : lecture, pause, reprise et modulation du débit d'élocution (de 0,5x à 2,0x).

---

## Outils Privro (Privro Tools)

Privro est une suite complète d'outils de productivité et de création multimédia conçue selon le paradigme *local-first*. Tous les outils locaux s'exécutent à 100% sur votre appareil : aucune création de compte obligatoire, aucun numéro de carte bancaire, aucune clé API, aucun abonnement et aucune restriction de durée d'enregistrement.

| Outils et Pages | Description des Fonctionnalités |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Retranscription Audio Locale Gratuite (Whisper AI)](https://privro.com/fr/transcribe) | Reconnaissance vocale (Speech-to-Text) sur votre appareil avec OpenAI Whisper (de Tiny à Large Turbo) en 99 langues. Zéro upload, durée illimitée et sans inscription. |
| [Convertisseur MP4 en Texte](https://privro.com/fr/mp4-to-text) | Convertisseur vidéo en texte gratuit en ligne. Transforme vos fichiers MP4, MOV ou WebM en transcriptions textuelles (TXT, DOCX, PDF) ou en sous-titres (SRT, VTT) avec Whisper local. |
| [Caption Studio - Éditeur de Sous-Titres Vidéo](https://privro.com/fr/caption-studio) | Générez et incrustez des sous-titres automatiques dynamiques (style karaoké et TikTok) sur vos vidéos. Rendu FFmpeg directement dans le navigateur jusqu'en 4K sans filigrane. |
| [Piper Voice Studio (Synthèse Vocale)](https://privro.com/fr/piper-voice) | Studio interactif de synthèse vocale neuronale multilingue intégré à Privro. Plus de 300 voix, choix des locuteurs, accélération WebGPU et export WAV haute qualité. |
| [Générateur Gratuit de Synthèse Vocale](https://privro.com/fr/text-to-speech) | Convertisseur de texte en parole rapide, confidentiel et en ligne. Transformez tout texte écrit en voix parlée naturelle dans votre navigateur sans dépendre du cloud. |
| [Application Web Vocale IA Locale](https://voice.privro.com) | Application web autonome intégrant les deux moteurs de voix neuronale (Piper TTS et Kokoro TTS) exécutée à 100% dans le navigateur (ce dépôt). |
| [Alternative à Otter.ai (Gratuite & Illimitée)](https://privro.com/fr/alternatives/otter) | Comparez la retranscription locale illimitée de Privro aux bots de réunion en cloud et aux abonnements mensuels onéreux d'Otter.ai. |
| [Alternative à Happy Scribe (Sans Upload)](https://privro.com/fr/alternatives/happyscribe) | Comparez Caption Studio et la transcription Whisper locale de Privro (zéro upload) avec les restrictions de minutes et les forfaits payants d'Happy Scribe. |
| [Tarifs et Forfaits Privro AI](https://privro.com/fr/pricing) | Outils locaux gratuits à vie, avec options de transcription haute vitesse sur le cloud et packs de crédits prépayés sans date d'expiration. |

---

## Synthèse Vocale sur Privro (Text to Speech on Privro)

Privro propose des expériences de synthèse vocale neuronale sans transfert de données, conçues pour allier vitesse maximale, simplicité d'usage et confidentialité totale :

- **[Piper Voice Studio](https://privro.com/fr/piper-voice) :** Le studio vocal interactif complet hébergé sur Privro. Explorez et filtrez plus de 300 voix dans 40+ langues, sélectionnez le locuteur au sein des modèles multivoix, basculez entre les runtimes WebGPU et WASM, mettez les modèles en cache local et téléchargez des pistes WAV de qualité professionnelle.
- **[Générateur de Synthèse Vocale](https://privro.com/fr/text-to-speech) :** Portail en ligne simplifié pour convertir rapidement vos scripts, articles, leçons ou présentations en voix off.
- **[Application Web Vocale IA Locale](https://voice.privro.com) :** L'application web progressive (PWA) open-source conçue à partir de ce dépôt de code, dotée d'onglets pour alterner entre Piper TTS et Kokoro TTS.

### Architecture de Confidentialité Locale (On-Device Privacy)
L'ensemble de la synthèse vocale s'opère en local grâce aux Web Workers du navigateur :
- **Aucun texte n'est transmis à un serveur externe.**
- **Aucun enregistrement audio n'est conservé ni analysé sur le cloud.**
- **Aucune création de compte, aucun mot de passe ni clé API requis.**
- **Fonctionne à 100% hors ligne** dès lors que le modèle vocal et les composants d'exécution sont placés en mémoire cache.
- **Conformité stricte au RGPD (Règlement UE 2016/679)**, aux exigences de la **CNIL** et au **secret professionnel (Article 226-13 du Code pénal)** applicable aux professions juridiques et médicales.

---

## Spécifications Lisibles par Machine (`llms.txt` & `llms-full.txt`)

Privro met à disposition des fichiers de documentation standardisés et structurés respectant la spécification émergente `llms.txt` :

- **Index Synthétique :** [https://privro.com/llms.txt](https://privro.com/llms.txt)
- **Spécifications Complètes :** [https://privro.com/llms-full.txt](https://privro.com/llms-full.txt)

Ces documents permettent aux assistants IA, aux agents autonomes et aux robots d'indexation de consulter des informations fiables et vérifiées concernant l'architecture de sécurité locale, les profils des modèles Whisper, les spécifications d'encodage FFmpeg, les voix neuronales Piper et le routage multilingue de Privro.

---

## Langues Disponibles sur Privro (Languages Available on Privro)

La plateforme Privro est intégralement traduite et adaptée dans **22 langues officielles**. La version anglophone est disponible sur le domaine racine, tandis que chaque édition linguistique possède son chemin dédié :

| Langue (Language) | Nom Natif | Code | Page d'Accueil (Homepage) |
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

> **Remarque :** Les outils centraux de l'écosystème Privro – notamment le [Module de Retranscription](https://privro.com/fr/transcribe), le [Caption Studio](https://privro.com/fr/caption-studio) et le studio [Piper Voice](https://privro.com/fr/piper-voice) – sont traduits nativement dans l'ensemble des 22 langues.

---

## Langues Prises en Charge par Piper TTS (Languages Supported by Piper TTS)

Piper TTS intègre **plus de 300 modèles de voix neuronales open-source** couvrant **58 codes linguistiques et territoriaux** dans 42 familles de langues. Toutes les voix peuvent être chargées directement dans le navigateur :

| Langue (Language) | Nom Natif | Code | Région / Pays | Voix Disponibles |
| ------------------- | ------------------------- | --------- | -------------------------------- | ---------------- |
| Arabic (Arabe) | العربية | `ar_JO` | Jordanie | 2 voix |
| Bulgarian (Bulgare) | български | `bg_BG` | Bulgarie | 1 voix |
| Bengali (Bengali) | বাংলা | `bn_BD` | Bangladesh | 1 voix |
| Catalan (Catalan) | Català | `ca_ES` | Espagne | 3 voix |
| Czech (Tchèque) | Čeština | `cs_CZ` | République tchèque | 3 voix |
| Welsh (Gallois) | Cymraeg | `cy_GB` | Grande-Bretagne | 2 voix |
| Danish (Danois) | Dansk | `da_DK` | Danemark | 1 voix |
| German (Allemand) | Deutsch | `de_DE` | Allemagne | 10 voix |
| Greek (Grec) | Ελληνικά | `el_GR` | Grèce | 3 voix |
| English (UK) | English (UK) | `en_GB` | Grande-Bretagne | 11 voix |
| English (US) | English (US) | `en_US` | États-Unis | 27 voix |
| Spanish (Argentine) | Español (Argentina) | `es_AR` | Argentine | 1 voix |
| Spanish (Espagne) | Español (España) | `es_ES` | Espagne | 5 voix |
| Spanish (Mexique) | Español (México) | `es_MX` | Mexique | 3 voix |
| Estonian (Estonien) | eesti | `et_EE` | Estonie | 1 voix |
| Basque (Basque) | Euskara | `eu_ES` | Espagne | 2 voix |
| Persian / Farsi | فارسی | `fa_IR` | Iran | 5 voix |
| Finnish (Finnois) | Suomi | `fi_FI` | Finlande | 2 voix |
| French (Français) | Français | `fr_FR` | France | 7 voix |
| Hebrew (Hébreu) | עִבְרִית | `he_IL` | Israël | 1 voix |
| Hindi (Hindi) | हिन्दी | `hi_IN` | Inde | 3 voix |
| Hungarian (Hongrois)| Magyar | `hu_HU` | Hongrie | 3 voix |
| Armenian (Arménien) | հայերեն | `hy_AM` | Arménie | 1 voix |
| Indonesian (Indonésien)| Bahasa Indonesia | `id_ID` | Indonésie | 1 voix |
| Icelandic (Islandais)| íslenska | `is_IS` | Islande | 4 voix |
| Italian (Italien) | Italiano | `it_IT` | Italie | 4 voix |
| Japanese (Japonais) | 日本語 | `ja_JP` | Japon | 1 voix |
| Georgian (Géorgien) | ქართული ენა | `ka_GE` | Géorgie | 1 voix |
| Kazakh (Kazakh) | қазақша | `kk_KZ` | Kazakhstan | 3 voix |
| Korean (Coréen) | 한국어 | `ko_KR` | Corée du Sud | 1 voix |
| Kurdish (Kurde) | Kurmancî | `ku_TR` | Turquie | 1 voix |
| Luxembourgish (Luxembourgeois)| Lëtzebuergesch | `lb_LU` | Luxembourg | 1 voix |
| Lithuanian (Lituanien)| Lietuvių | `lt_LT` | Lituanie | 1 voix |
| Latvian (Letton) | Latviešu | `lv_LV` | Lettonie | 1 voix |
| Malayalam | മലയാളം | `ml_IN` | Inde | 2 voix |
| Marathi | मराठी | `mr_IN` | Inde | 1 voix |
| Nepali (Népalais) | नेपाली | `ne_NP` | Népal | 3 voix |
| Dutch (Belgique) | Nederlands (België) | `nl_BE` | Belgique | 4 voix |
| Dutch (Pays-Bas) | Nederlands (Nederland)| `nl_NL` | Pays-Bas | 6 voix |
| Norwegian (Norvégien)| Norsk | `no_NO` | Norvège | 2 voix |
| Polish (Polonais) | Polski | `pl_PL` | Pologne | 5 voix |
| Portuguese (Brésil) | Português (Brasil) | `pt_BR` | Brésil | 4 voix |
| Portuguese (Portugal)| Português (Portugal)| `pt_PT` | Portugal | 1 voix |
| Romanian (Roumain) | Română | `ro_RO` | Roumanie | 1 voix |
| Russian (Russe) | Русский | `ru_RU` | Russie | 4 voix |
| Slovak (Slovaque) | Slovenčina | `sk_SK` | Slovaquie | 1 voix |
| Slovenian (Slovène) | Slovenščina | `sl_SI` | Slovénie | 1 voix |
| Albanian (Albanais) | shqip | `sq_AL` | Albanie | 1 voix |
| Serbian (Serbe) | srpski | `sr_RS` | Serbie | 1 voix |
| Swedish (Suédois) | Svenska | `sv_SE` | Suède | 3 voix |
| Swahili (Swahili) | Kiswahili | `sw_CD` | RD Congo | 1 voix |
| Telugu | తెలుగు | `te_IN` | Inde | 3 voix |
| Thai (Thaï) | ไทย | `th_TH` | Thaïlande | 1 voix |
| Turkish (Turc) | Türkçe | `tr_TR` | Turquie | 1 voix |
| Ukrainian (Ukrainien)| украї́нська мо́ва | `uk_UA` | Ukraine | 5 voix |
| Urdu (Ourdou) | اردو | `ur_PK` | Pakistan | 2 voix |
| Vietnamese (Vietnamien)| Tiếng Việt | `vi_VN` | Vietnam | 3 voix |
| Chinese (Chinois Simplifié)| 简体中文 | `zh_CN` | Chine | 4 voix |

---

## Architecture Technique & Fonctionnement (Technical Architecture)

### 1. Pipeline de Piper TTS (Piper TTS Pipeline)
```
[Texte de l'Utilisateur]
    │
    ▼
[Web Worker: Phonémiseur eSpeak NG]  ──► Convertit les graphèmes en identifiants phonétiques
    │
    ▼
[Web Worker: ONNX Runtime Web]        ──► Exécute le modèle neural (.onnx) via WebGPU ou WASM
    │
    ▼
[Buffer Audio PCM]                    ──► Assemble le flux audio linéaire 16 bits à 22,05 kHz
    │
    ▼
[Web Audio API / Blob WAV]            ──► Lecture instantanée dans le navigateur et téléchargement WAV
```

- **Distribution des Fichiers Binaires via Edge CDN :** Les fichiers statiques volumineux (modules WASM de runtime ONNX, données phonétiques d'eSpeak) sont distribués via Cloudflare R2 (`VITE_PIPER_CDN_URL`), permettant un clonage git ultra-léger et un chargement initial instantané.
- **Stockage Persistant dans le Navigateur :** Chaque modèle `.onnx` téléchargé est stocké de manière pérenne dans le `CacheStorage` du navigateur (`piper-voices-cache-v1`), assurant une exécution locale sans aucune consommation de forfait data lors des visites suivantes.

### 2. Pipeline de Kokoro TTS (Kokoro TTS Pipeline)
- Un web worker dédié initialise le modèle compact `onnx-community/Kokoro-82M-v1.0-ONNX` via Transformers.js.
- Le flux audio est transmis par morceaux (*chunks*) vers l'interface en temps réel, permettant de démarrer l'écoute dès les premières secondes sans attendre la fin du rendu global.
- Prise en charge de la pause, de la reprise et d'un curseur de vitesse de lecture fluide (de 0,5x à 2,0x).

---

## Technologies Utilisées (Tech Stack)

- **Framework Front-End :** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Interface & Design :** [Tailwind CSS](https://tailwindcss.com/) + composants [shadcn/ui](https://ui.shadcn.com/)
- **Moteurs de Synthèse Vocale (TTS) :**
  - [Piper](https://github.com/rhasspy/piper) via ONNX Runtime Web (`ort-wasm-simd-threaded.jsep.wasm`)
  - [eSpeak NG](https://github.com/espeak-ng/espeak-ng) Phonémiseur compilé en WebAssembly
  - [Kokoro](https://github.com/hexgrad/kokoro) via [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- **Accélération Matérielle :** WebGPU natif avec repli automatique sur Web Workers WASM SIMD multithread
- **Iconographie et Notifications :** Lucide Icons et notifications toast dynamiques via Sonner

---

## Premiers Pas (Getting Started)

### Prérequis
- Node.js 18 ou version ultérieure.
- Un navigateur web moderne compatible avec WebAssembly. Pour profiter d'une vitesse de synthèse décuplée via l'accélération GPU, nous recommandons l'utilisation de Google Chrome ou Microsoft Edge avec WebGPU activé.

### Installation

```bash
git clone https://github.com/avnshsingh/local-ai-voice-web
cd local-ai-voice-web
npm install
```

### Configuration de l'Environnement

Dupliquez le fichier `.env.example` vers `.env` :

```bash
cp .env.example .env
```

Indiquez l'URL de votre bucket ou CDN Cloudflare R2 pour `VITE_PIPER_CDN_URL` :

```env
VITE_PIPER_CDN_URL="https://votre-bucket.r2.dev"
```

### Lancement du Serveur de Développement

```bash
npm run dev
```

Ouvrez l'adresse [http://localhost:3000/](http://localhost:3000/) dans votre navigateur.

### Compilation pour la Production

```bash
npm run build    # Génère le bundle optimisé dans le dossier /dist
npm run preview  # Lance la prévisualisation locale de la version compilée
```

---

## Foire Aux Questions (FAQ)

### Générateur de Voix IA & Synthèse Vocale (Text-to-Speech)

#### Ce générateur de voix IA en français est-il réellement 100% gratuit et sans limite ?
Oui. Il n'existe aucun plafond mensuel de caractères, aucune limite journalière de mots et aucun abonnement caché. Puisque les réseaux neuronaux s'exécutent entièrement sur le matériel de votre propre ordinateur ou smartphone (via votre carte graphique en WebGPU ou votre processeur en WASM), nous ne subissons aucun coût de calcul sur des serveurs distants. Nous répercutons cette architecture en vous offrant un outil illimité, pérenne et totalement gratuit sans inscription.

#### Puis-je monétiser mes vidéos sur YouTube, TikTok et Reels avec ces voix IA ? (Chaînes sans visage)
Absolument ! Les critères officiels du Programme Partenaire YouTube (AdSense), d'Instagram et de TikTok autorisent expressément l'usage de voix synthétisées par IA, à condition que le contenu propose une valeur ajoutée originale (scénarisation travaillée, montage soigné, démarche éducative ou divertissante). Nos voix sont issues de modèles neuronaux open-source régis par des licences permissives (Apache 2.0 / MIT), libres de tous droits d'auteur commerciaux et idéales pour les chaînes sans visage (*faceless channels*), les documentaires, les tutoriels et les vidéos virales.

#### Quels sont les modèles vocaux disponibles en français ?
Le projet intègre **7 voix françaises de haute qualité** (`fr_FR`) :
- **Siwis** (`medium` à 22 kHz & `low` à 16 kHz) : Voix féminine de référence issue du laboratoire Idiap et de l'Université de Genève. Diction soignée et intonation claire, idéale pour les livres audio, les cours et les présentations institutionnelles.
- **Tom** (`medium`) : Voix masculine contemporaine et chaleureuse, particulièrement rythmée et percutante pour la voix off de vidéos TikTok, Reels et YouTube.
- **UPMC** (`medium`) : Duo vocal mixte Sorbonne Université comprenant 2 locuteurs distincts (`jessica` et `pierre`), parfait pour les dialogues ou les cours bivoix.
- **MLS** (`medium`) : Bibliothèque chorale comprenant **125 locuteurs français différents**, idéale pour les pièces théâtrales et les fictions polyphoniques.
- **Gilles** (`low`) et **MLS 1840** (`low`).

#### Mes textes saisis ou mes voix générées sont-ils transmis à des serveurs distants ? (RGPD, CNIL & Secret Professionnel)
Non, jamais. L'ensemble du calcul neuronal s'exécute exclusivement dans la mémoire vive (RAM) de votre machine au sein d'un Web Worker isolé dans votre navigateur. Aucune donnée ne quitte votre session locale. Cette isolation totale garantit une conformité absolue avec le **RGPD (Règlement UE 2016/679)**, les recommandations de la **CNIL** et le strict respect du **secret professionnel (Article 226-13 du Code pénal)** pour les avocats au barreau, notaires, médecins et journalistes d'investigation.

#### Puis-je télécharger la piste audio générée pour mes montages vidéo ?
Oui. Dès que la synthèse vocale est terminée, vous pouvez exporter l'enregistrement complet sous forme de fichier **PCM WAV 16 bits sans perte (22,05 kHz)**. Le fichier est dépourvu de tout filigrane sonore et prêt à être glissé directement dans vos logiciels de montage favoris (Premiere Pro, DaVinci Resolve, CapCut ou Final Cut).

#### Le générateur vocal fonctionne-t-il hors ligne (sans connexion internet) ?
Oui, dès votre deuxième utilisation. Lors du premier choix d'une voix, le navigateur met en cache le fichier de poids du modèle (~20 à ~76 Mo) dans le `CacheStorage` local. Lors de vos visites suivantes, le modèle est chargé instantanément depuis votre disque dur, vous permettant de générer de la voix parlée dans le train, en avion ou en déplacement sans consommer de données.

#### Pourquoi privilégier la technologie WebGPU ?
WebGPU permet au navigateur d'exécuter les tenseurs neuronaux directement sur les cœurs de calcul de votre carte graphique (GPU). La génération vocale s'en trouve accélérée de 3 à 5 fois par rapport à une exécution CPU classique. Si votre machine ne dispose pas de WebGPU, l'application bascule en toute fluidité sur le moteur WebAssembly (WASM) multithread.

---

### Retranscription Audio en Texte & Speech-to-Text Whisper

#### Comment retranscrire gratuitement des enregistrements audio ou des cours en texte ?
Vous pouvez transcrire tout enregistrement vocal via [l'outil gratuit de retranscription locale de Privro](https://privro.com/fr/transcribe). Déposez simplement votre fichier audio (MP3, WAV, M4A issu d'un iPhone ou dictaphone, AAC, OGG, FLAC, mémos vocaux WhatsApp, etc.), sélectionnez la langue ou activez la détection automatique, et OpenAI Whisper convertira l'audio en texte directement dans votre navigateur. C'est la solution rêvée pour les étudiants de master et doctorants retranscrivant leurs entretiens de recherche sans dépenser des centaines d'euros en forfaits cloud.

#### Comment convertir des fichiers vidéo MP4 en texte ou en sous-titres ?
Glissez-déposez simplement votre vidéo MP4, WebM ou MOV dans le [module de Transcription Locale](https://privro.com/fr/transcribe) ou le [convertisseur MP4 en texte](https://privro.com/fr/mp4-to-text). Votre navigateur extrait la piste audio en mémoire et génère la transcription mot à mot avec horodatages synchronisés, sans nécessiter le téléversement de volumineux fichiers vidéo sur internet.

#### Y a-t-il des limites de durée ou de taille de fichier pour la retranscription ?
Non. À la différence des plateformes cloud qui brident leurs offres gratuites à 10 ou 15 minutes par mois et imposent des tarifs à la minute, la retranscription locale Privro ne comporte **aucune limite de minutes ni de restriction de volume**. Vous pouvez retranscrire aussi bien un mémo vocal de 30 secondes qu'une conférence universitaire de 4 heures d'une seule traite.

#### Sous quels formats puis-je exporter mes transcriptions et sous-titres ?
Vous pouvez exporter votre compte rendu complet avec horodatages précis au niveau du mot dans 8 formats distincts :
- Texte brut : `TXT`
- Fichiers de sous-titres : `SRT`, `VTT`
- Tableurs et bases de données : `CSV`, `JSON`, `XLSX`
- Traitement de texte et documents formattés : Word `DOCX`, `PDF`

---

### Caption Studio : Sous-Titres Automatiques pour Vidéos

#### Puis-je ajouter des sous-titres automatiques sur mes vidéos sans filigrane (watermark) ?
Oui. [Caption Studio](https://privro.com/fr/caption-studio) vous permet de charger une vidéo, de transcrire automatiquement les dialogues avec Whisper local, de personnaliser les styles visuels (polices, couleurs, animations karaoké mot à mot) et d'incruster directement les sous-titres dans la vidéo. L'encodage vidéo est réalisé par FFmpeg dans votre navigateur, avec un export jusqu'en **résolution 4K sans aucun logo ni filigrane**.

#### Quels formats d'image (Aspect Ratios) sont pris en charge ?
Vous pouvez calibrer et recadrer vos vidéos sous-titrées pour tous les réseaux sociaux :
- **9:16 :** TikTok, Instagram Reels, YouTube Shorts
- **16:9 :** YouTube standard, présentations et écrans larges
- **1:1 :** Feed carré Instagram et publications LinkedIn
- **4:5 :** Feed vertical portrait Instagram
- **3:2 :** Formats photographiques et écrans d'ordinateur

---

### Plateforme, Langues et Souveraineté Numérique

#### Combien de langues sont accessibles sur la plateforme Privro ?
Privro est traduit dans **22 langues officielles** : anglais, espagnol, portugais, italien, allemand, français, hindi, indonésien, polonais, japonais, néerlandais, suédois, danois, norvégien, finnois, tchèque, turc, russe, coréen, chinois traditionnel, arabe et hébreu. Chaque langue dispose de son portail dédié accessible via `https://privro.com/{locale}`.

#### Que contiennent les adresses `https://privro.com/llms.txt` et `https://privro.com/llms-full.txt` ?
[privro.com/llms.txt](https://privro.com/llms.txt) et [privro.com/llms-full.txt](https://privro.com/llms-full.txt) sont des spécifications standardisées lisibles par machine conçues d'après la norme `llms.txt`. Elles offrent aux intelligences artificielles et aux moteurs sémantiques une vue vérifiée de l'architecture sans cloud de Privro, des paramètres des modèles Whisper et Piper, ainsi que des garanties de confidentialité locale.

---

## Remerciements & Crédits (Credits & Attributions)

- [Piper](https://github.com/rhasspy/piper) et [Piper Voices](https://huggingface.co/rhasspy/piper-voices) par Michael Hansen et la communauté du projet Rhasspy.
- Modèle [Kokoro TTS](https://github.com/hexgrad/kokoro) par Hexgrad.
- [kokoro-js](https://www.npmjs.com/package/kokoro-js), [kokoro-web](https://github.com/xenova/kokoro-web) et [Transformers.js](https://huggingface.co/docs/transformers.js).
- [ONNX Runtime Web](https://onnxruntime.ai/) par Microsoft.
- Bibliothèque phonétique [eSpeak NG](https://github.com/espeak-ng/espeak-ng).

---

## Licence (License)

Distribué sous Licence Apache 2.0. Consultez le fichier [LICENSE](LICENSE) pour prendre connaissance de l'ensemble des conditions.
