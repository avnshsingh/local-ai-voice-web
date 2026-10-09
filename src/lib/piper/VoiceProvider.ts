import { FetchProvider } from "./FetchProvider";
import { PIPER_CDN_URL } from "./OnnxWorkerRuntime";
import type { DownloadProgress, PiperVoiceCatalog } from "./types";

export class HuggingFaceVoiceProvider {
  #provider: FetchProvider;
  #baseUrl: string;
  #separator: string;
  #voices: PiperVoiceCatalog | null = null;

  constructor({
    provider = new FetchProvider(),
    baseUrl = "https://huggingface.co/rhasspy/piper-voices/resolve/main/",
    separator = "-",
  } = {}) {
    this.#provider = provider;
    this.#baseUrl = baseUrl;
    this.#separator = separator;
  }

  destroy() {
    this.#provider.destroy();
  }

  getModelUrls(voiceKey: string): [string, string] {
    const voicePath = voiceKey.split(this.#separator);
    const modelPath =
      this.#baseUrl +
      voicePath[0].split("_")[0] +
      "/" +
      voicePath.join("/") +
      "/" +
      voicePath.join("-");
    return [modelPath + ".onnx.json", modelPath + ".onnx"];
  }

  async isVoiceCached(voiceKey: string): Promise<boolean> {
    const [, onnxUrl] = this.getModelUrls(voiceKey);
    return this.#provider.isCached(onnxUrl);
  }

  async list(): Promise<PiperVoiceCatalog> {
    if (this.#voices && Object.keys(this.#voices).length > 0) {
      return this.#voices;
    }

    // Try reading from sessionStorage for instant zero-latency loading
    if (typeof window !== "undefined" && window.sessionStorage) {
      try {
        const cachedStr = sessionStorage.getItem("piper_voice_catalog_cache_v1");
        if (cachedStr) {
          const cachedJson = JSON.parse(cachedStr);
          if (cachedJson && typeof cachedJson === "object" && Object.keys(cachedJson).length > 0) {
            this.#voices = cachedJson;
            return cachedJson;
          }
        }
      } catch {
        // Ignore storage read error
      }
    }

    const cdnUrl = PIPER_CDN_URL;

    let voices: PiperVoiceCatalog | null = null;

    if (cdnUrl) {
      try {
        voices = (await this.#provider.fetch(`${cdnUrl}/piper/voices.json`)) as PiperVoiceCatalog;
      } catch {
        // Fall back to Hugging Face
      }
    }

    if (!voices) {
      voices = (await this.#provider.fetch(this.#baseUrl + "voices.json")) as PiperVoiceCatalog;
    }

    this.#voices = voices;

    if (typeof window !== "undefined" && window.sessionStorage && voices) {
      try {
        sessionStorage.setItem("piper_voice_catalog_cache_v1", JSON.stringify(voices));
      } catch {
        // Ignore storage quota error
      }
    }

    return voices || {};
  }

  async fetch(
    voiceKey: string,
    onProgress?: (event: DownloadProgress) => void
  ): Promise<[unknown, string]> {
    const voicePath = voiceKey.split(this.#separator);
    const modelPath =
      this.#baseUrl +
      voicePath[0].split("_")[0] +
      "/" +
      voicePath.join("/") +
      "/" +
      voicePath.join("-");
    const urls = [modelPath + ".onnx.json", modelPath + ".onnx"];
    const progress = urls.map(url => ({
      loaded: 0,
      total: this.#expectedSize(voiceKey, url),
    }));

    const report = () => {
      onProgress?.({
        loaded: progress.reduce((sum, file) => sum + file.loaded, 0),
        total: progress.reduce((sum, file) => sum + file.total, 0),
      });
    };

    const results = await Promise.all(
      urls.map((url, index) =>
        this.#provider.fetch(url, event => {
          if (event.cached) {
            progress[index].loaded = progress[index].total || 1;
            progress[index].total = progress[index].total || 1;
          } else {
            progress[index].loaded = event.loaded;
            if (event.total) progress[index].total = event.total;
          }
          report();
        })
      )
    );

    return results as [unknown, string];
  }

  #expectedSize(voiceKey: string, url: string): number {
    const files = this.#voices?.[voiceKey]?.files;
    if (!files) return 0;
    for (const [path, file] of Object.entries(files)) {
      if (url.endsWith(path)) return file.size_bytes || 0;
    }
    return 0;
  }
}
