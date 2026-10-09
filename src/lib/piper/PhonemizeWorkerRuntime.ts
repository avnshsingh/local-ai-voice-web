import { FetchProvider } from "./FetchProvider";
import { createPiperWorker, PIPER_CDN_URL } from "./OnnxWorkerRuntime";
import { WebWorkerEvent, type DownloadProgress } from "./types";

const PHONEMIZE_WASM_SIZE = 629166;
const PHONEMIZE_DATA_SIZE = 18077249;

export class PhonemizeWebWorkerRuntime {
  #provider: FetchProvider;
  #basePath: string;
  #worker: Worker | null = null;
  #isModuleLoaded = false;
  #loadPromise: Promise<unknown> | null = null;

  constructor({
    provider = new FetchProvider(),
    basePath,
    workerPath,
  }: {
    provider?: FetchProvider;
    basePath?: string;
    workerPath?: string;
  } = {}) {
    this.#provider = provider;
    this.#basePath =
      basePath || (PIPER_CDN_URL ? `${PIPER_CDN_URL}/piper/` : "/piper/");
    const resolvedWorker =
      workerPath ||
      (PIPER_CDN_URL
        ? `${PIPER_CDN_URL}/worker/PhonemizeWebWorker.js`
        : "/worker/PhonemizeWebWorker.js");

    this.#worker = createPiperWorker(resolvedWorker);
    this.#worker.postMessage(
      new WebWorkerEvent("constructor", { basePath: this.#basePath })
    );
  }

  get isModuleLoaded(): boolean {
    return this.#isModuleLoaded;
  }

  destroy() {
    this.#provider.destroy();
    if (this.#worker) {
      try {
        this.#worker.postMessage(new WebWorkerEvent("destroy"));
        this.#worker.terminate();
      } catch {
        // Ignore termination errors
      }
      this.#worker = null;
    }
    this.#isModuleLoaded = false;
    this.#loadPromise = null;
  }

  async loadModule(
    wasmUrl: string | null = null,
    dataUrl: string | null = null,
    onProgress?: (progress: DownloadProgress) => void,
    onStatusChange?: (status: string) => void
  ): Promise<unknown> {
    if (this.#isModuleLoaded) return;
    if (this.#loadPromise) return this.#loadPromise;

    this.#loadPromise = (async () => {
      onStatusChange?.("Downloading phonemizer model...");

      const progress = [
        { loaded: 0, total: PHONEMIZE_WASM_SIZE },
        { loaded: 0, total: PHONEMIZE_DATA_SIZE },
      ];

      const reportProgress = () => {
        onProgress?.({
          loaded: progress.reduce((acc, p) => acc + p.loaded, 0),
          total: progress.reduce((acc, p) => acc + p.total, 0),
        });
      };

      const [resolvedWasm, resolvedData] = await Promise.all([
        wasmUrl ||
          this.#provider.fetch(this.#basePath + "piper_phonemize.wasm", event => {
            progress[0].loaded = event.loaded;
            if (event.total) progress[0].total = event.total;
            reportProgress();
          }),
        dataUrl ||
          this.#provider.fetch(this.#basePath + "piper_phonemize.data", event => {
            progress[1].loaded = event.loaded;
            if (event.total) progress[1].total = event.total;
            reportProgress();
          }),
      ]);

      this.#worker?.postMessage(
        new WebWorkerEvent("loadModule", [resolvedWasm, resolvedData])
      );
      await this.#result(60000);
      this.#isModuleLoaded = true;
    })();

    try {
      return await this.#loadPromise;
    } finally {
      if (!this.#isModuleLoaded) {
        this.#loadPromise = null;
      }
    }
  }

  async preload(
    onProgress?: (progress: DownloadProgress) => void,
    onStatusChange?: (status: string) => void
  ): Promise<void> {
    await this.loadModule(null, null, onProgress, onStatusChange);
  }

  async phonemize(
    text: string,
    voiceData: [unknown, string],
    onProgress?: (progress: DownloadProgress) => void,
    onStatusChange?: (status: string) => void
  ) {
    await this.loadModule(null, null, onProgress, onStatusChange);
    onStatusChange?.("Phonemizing text...");
    this.#worker?.postMessage(new WebWorkerEvent("phonemize", [text, voiceData]));
    return this.#result(60000);
  }

  #result(timeoutMs = 60000): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (!this.#worker) {
        reject(new Error("Phonemize worker is not available"));
        return;
      }

      let timer: ReturnType<typeof setTimeout> | null = null;

      const cleanup = () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        if (this.#worker) {
          this.#worker.onmessage = null;
          this.#worker.onerror = null;
        }
      };

      timer = setTimeout(() => {
        cleanup();
        reject(new Error(`Phonemize operation timed out after ${Math.round(timeoutMs / 1000)}s`));
      }, timeoutMs);

      this.#worker.onmessage = ({ data }) => {
        cleanup();
        if (data?.error) {
          reject(new Error(data.error));
        } else {
          resolve(data);
        }
      };

      this.#worker.onerror = event => {
        cleanup();
        reject(new Error(event.message || "Phonemize worker execution failed"));
      };
    });
  }
}
