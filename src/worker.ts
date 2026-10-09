import { KokoroTTS, TextSplitterStream } from "kokoro-js";
import { detectWebGPU } from "./utils";

// Device detection
const device = (await detectWebGPU()) ? "webgpu" : "wasm";
self.postMessage({ status: "device", device });
self.postMessage({ status: "idle", device });

let ttsInstance: KokoroTTS | null = null;
let isModelLoading = false;

async function getOrLoadTTS(): Promise<KokoroTTS> {
  if (ttsInstance) {
    return ttsInstance;
  }
  if (isModelLoading) {
    while (isModelLoading) {
      await new Promise(r => setTimeout(r, 100));
    }
    if (ttsInstance) return ttsInstance;
  }

  isModelLoading = true;
  self.postMessage({ status: "loading", device });

  try {
    const model_id = "onnx-community/Kokoro-82M-v1.0-ONNX";
    const tts = await KokoroTTS.from_pretrained(model_id, {
      dtype: device === "wasm" ? "q8" : "fp32",
      device,
      progress_callback: (progress: unknown) => {
        self.postMessage({ status: "progress", progress });
      },
    });
    ttsInstance = tts;
    self.postMessage({ status: "ready", voices: tts.voices, device });
    return tts;
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : String(e);
    self.postMessage({
      status: "error",
      error: errorMsg,
      data: errorMsg,
    });
    throw e;
  } finally {
    isModelLoading = false;
  }
}

let activeJobId = 0;

self.addEventListener("message", async e => {
  if (e.data?.type === "stop") {
    activeJobId = -1;
    return;
  }

  if (e.data?.type === "load") {
    try {
      await getOrLoadTTS();
    } catch {
      // Handled in getOrLoadTTS
    }
    return;
  }

  const { text, voice, speed, id } = e.data;
  activeJobId = id;

  try {
    const tts = await getOrLoadTTS();
    if (activeJobId !== id) return;

    const streamer = new TextSplitterStream();
    streamer.push(text);
    streamer.close(); // Indicate we won't add more text

    const stream = tts.stream(streamer, { voice, speed });

    const chunks = [];
    for await (const { text: chunkText, audio } of stream) {
      if (activeJobId !== id) return;
      self.postMessage({
        status: "stream",
        id,
        chunk: {
          audio: audio.toBlob(),
          text: chunkText,
        },
      });
      chunks.push(audio);
    }

    if (activeJobId !== id) return;

    // Merge chunks
    let mergedAudio: { toBlob: () => Blob } | null = null;
    if (chunks.length > 0) {
      const sampling_rate = chunks[0].sampling_rate;
      const length = chunks.reduce((sum, chunk) => sum + chunk.audio.length, 0);
      const waveform = new Float32Array(length);
      let offset = 0;
      for (const { audio } of chunks) {
        waveform.set(audio, offset);
        offset += audio.length;
      }

      // Create a new merged RawAudio
      // @ts-expect-error - So that we don't need to import RawAudio
      mergedAudio = new chunks[0].constructor(waveform, sampling_rate);
    }

    self.postMessage({
      status: "complete",
      id,
      audio: mergedAudio ? mergedAudio.toBlob() : null,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    self.postMessage({
      status: "error",
      error: errorMsg,
      data: errorMsg,
    });
  }
});
