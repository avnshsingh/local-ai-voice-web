# Privro AI Voice

In-browser text-to-speech for [Privro AI](https://privro.com). Paste text, pick a voice, and generate speech on your device. Nothing is uploaded.

Live app: [voice.privro.com](https://voice.privro.com)

Speech is produced by [Kokoro](https://github.com/hexgrad/kokoro) (`Kokoro-82M`) through [`kokoro-js`](https://www.npmjs.com/package/kokoro-js).

## Privro tools

This repo is the **AI Voice** app. Privro is a browser suite of local tools: no account, no upload to Privro, and no usage quota for on-device processing.

| Tool                                                | What it does                                 |
| --------------------------------------------------- | -------------------------------------------- |
| [Transcribe](https://privro.com/transcribe)         | Speech-to-text with Whisper on your device   |
| [Caption Studio](https://privro.com/caption-studio) | Style subtitles on video and export up to 4K |
| [AI Voice](https://voice.privro.com)                | Text-to-speech with Kokoro (this project)    |

### Transcribe

[Free local transcription](https://privro.com/transcribe) turns video, audio, a microphone recording, or a media URL into text with Whisper running in the browser. Files are not uploaded to Privro for local jobs.

- **Import:** audio (MP3, WAV, M4A, AAC, OGG, FLAC, OPUS, WEBM), video (MP4, WEBM, MOV), URL, or record
- **Export:** TXT, JSON, CSV, SRT, VTT, XLSX, DOCX, PDF
- **Languages:** OpenAI Whisper (99 languages), with auto-detect when available
- Typical uses: meeting recordings, voice memos, interviews, and video-to-text or SRT captions

### Caption Studio

[Caption Studio](https://privro.com/caption-studio) styles subtitles on your video in the browser, previews them on the file, and exports captioned video. Media stays on your device.

- Import video, transcribe, style, then export
- Custom subtitle styles and karaoke effects
- Aspect ratios: 16:9, 9:16, 1:1, 4:5, 3:2 (YouTube, TikTok, Instagram, Reddit, X, LinkedIn)
- Local preview and export up to 4K

### AI Voice

This project. On-device text-to-speech at [voice.privro.com](https://voice.privro.com). No API key and no upload for local voice generation.

## What it does

- Generates natural-sounding speech in the browser with Kokoro TTS
- Runs locally: WebGPU when available, WASM otherwise
- Lets you choose American and British voices and adjust speaking speed
- Streams audio in chunks so you can play while generation continues
- Supports pause, resume, stop, and WAV download
- Light and dark theme

The Kokoro ONNX model (~350MB) downloads once and is cached by the browser.

## Requirements

- Node.js 18 or later
- A modern browser. Chrome with WebGPU is recommended. Without WebGPU, generation still works on CPU and is slower.

## Run locally

```bash
git clone https://github.com/avnshsingh/local-tts-react.git
cd local-tts-react
npm install
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/).

```bash
npm run build    # production build
npm run preview  # preview the production build
```

## How it works

1. A web worker loads `onnx-community/Kokoro-82M-v1.0-ONNX`.
2. The main thread sends text, voice, and speed to the worker.
3. Kokoro streams audio chunks back. You can play, pause, or stop without reloading the model.
4. Finished audio can be downloaded as a WAV file.

## Stack

- React 19 and Vite
- Tailwind CSS
- [`kokoro-js`](https://www.npmjs.com/package/kokoro-js)
- WebGPU / ONNX Runtime in a web worker

## Credits

- [Kokoro](https://github.com/hexgrad/kokoro) TTS model
- [kokoro-web](https://github.com/xenova/kokoro-web) and [Transformers.js](https://huggingface.co/docs/transformers.js)

## License

Apache License 2.0. See [LICENSE](LICENSE).
