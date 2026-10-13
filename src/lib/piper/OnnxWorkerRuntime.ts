import { WebWorkerEvent, type PiperGenerateResult } from "./types";

export type OnnxRuntimeType = "webgpu" | "wasm";

export function isWebGPUSupported(): boolean {
  return typeof navigator !== "undefined" && "gpu" in navigator && Boolean(navigator.gpu);
}

export const PIPER_CDN_URL = (
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    (import.meta.env.VITE_PIPER_CDN_URL || import.meta.env.NEXT_PUBLIC_PIPER_CDN_URL)) ||
  (typeof process !== "undefined" &&
    (process.env?.VITE_PIPER_CDN_URL || process.env?.NEXT_PUBLIC_PIPER_CDN_URL)) ||
  ""
).replace(/\/$/, "");

export function createPiperWorker(url: string): Worker {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const blob = new Blob([`import "${url}";`], {
      type: "application/javascript",
    });
    return new Worker(URL.createObjectURL(blob), { type: "module" });
  }
  return new Worker(url, { type: "module" });
}

export class OnnxWebWorkerRuntime {
  #worker: Worker | null = null;
  readonly runtimeType: OnnxRuntimeType;

  constructor({
    runtimeType = "webgpu",
    basePath,
    numThreads,
    workerPath,
  }: {
    runtimeType?: OnnxRuntimeType;
    basePath?: string;
    numThreads?: number;
    workerPath?: string;
  } = {}) {
    this.runtimeType = runtimeType;

    const resolvedThreads =
      numThreads !== undefined
        ? numThreads
        : typeof navigator !== "undefined" && "hardwareConcurrency" in navigator
          ? navigator.hardwareConcurrency || 1
          : 1;

    const resolvedBasePath =
      basePath || (PIPER_CDN_URL ? `${PIPER_CDN_URL}/onnx/` : "/onnx/");

    const resolvedWorkerPath =
      workerPath ||
      (runtimeType === "webgpu"
        ? (PIPER_CDN_URL ? `${PIPER_CDN_URL}/worker/OnnxWebGPUWorker.js` : "/worker/OnnxWebGPUWorker.js")
        : (PIPER_CDN_URL ? `${PIPER_CDN_URL}/worker/OnnxWebWorker.js` : "/worker/OnnxWebWorker.js"));

    this.#worker = createPiperWorker(resolvedWorkerPath);
    this.#worker.postMessage(
      new WebWorkerEvent("constructor", {
        basePath: resolvedBasePath,
        numThreads: resolvedThreads,
      })
    );
  }

  destroy() {
    if (this.#worker) {
      try {
        this.#worker.postMessage(new WebWorkerEvent("destroy"));
        this.#worker.terminate();
      } catch {
        // Ignore termination errors
      }
      this.#worker = null;
    }
  }

  async loadSession(voiceData: [unknown, string]) {
    this.#worker?.postMessage(new WebWorkerEvent("loadSession", [voiceData]));
    return this.#result();
  }

  async generate(
    phonemeData: unknown,
    voiceData: [unknown, string],
    speaker = 0
  ): Promise<PiperGenerateResult> {
    this.#worker?.postMessage(new WebWorkerEvent("generate", [phonemeData, voiceData, speaker]));
    return (await this.#result()) as PiperGenerateResult;
  }

  #result(timeoutMs = 90000): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (!this.#worker) {
        reject(new Error("ONNX worker is not available"));
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
        reject(new Error(`ONNX speech synthesis timed out after ${Math.round(timeoutMs / 1000)}s`));
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
        reject(new Error(event.message || "ONNX worker execution failed"));
      };
    });
  }
}
