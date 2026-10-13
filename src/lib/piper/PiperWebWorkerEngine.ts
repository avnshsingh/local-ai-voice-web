import { HuggingFaceVoiceProvider } from "./VoiceProvider";
import { PhonemizeWebWorkerRuntime } from "./PhonemizeWorkerRuntime";
import { OnnxWebWorkerRuntime, type OnnxRuntimeType, isWebGPUSupported } from "./OnnxWorkerRuntime";
import type { PiperGenerateResult, DownloadProgress } from "./types";

export interface PiperEngineOptions {
  runtimeType?: OnnxRuntimeType;
  voiceProvider?: HuggingFaceVoiceProvider;
  phonemizeRuntime?: PhonemizeWebWorkerRuntime;
  onnxRuntime?: OnnxWebWorkerRuntime;
}

export class PiperWebWorkerEngine {
  #voiceProvider: HuggingFaceVoiceProvider;
  #phonemizeRuntime: PhonemizeWebWorkerRuntime;
  #onnxRuntime: OnnxWebWorkerRuntime;
  #isBusy = false;

  get isBusy(): boolean {
    return this.#isBusy;
  }

  get runtimeType(): OnnxRuntimeType {
    return this.#onnxRuntime.runtimeType;
  }

  get voiceProvider(): HuggingFaceVoiceProvider {
    return this.#voiceProvider;
  }

  constructor(options: PiperEngineOptions = {}) {
    const selectedRuntime: OnnxRuntimeType =
      options.runtimeType ?? (isWebGPUSupported() ? "webgpu" : "wasm");

    this.#voiceProvider = options.voiceProvider || new HuggingFaceVoiceProvider();
    this.#phonemizeRuntime = options.phonemizeRuntime || new PhonemizeWebWorkerRuntime();
    this.#onnxRuntime =
      options.onnxRuntime ||
      new OnnxWebWorkerRuntime({ runtimeType: selectedRuntime });
  }

  async isVoiceCached(voiceKey: string): Promise<boolean> {
    return this.#voiceProvider.isVoiceCached(voiceKey);
  }

  async preloadVoice(
    voiceKey: string,
    onProgress?: (progress: DownloadProgress) => void
  ): Promise<void> {
    await this.#voiceProvider.fetch(voiceKey, onProgress);
  }

  async preloadPhonemizer(
    onProgress?: (progress: DownloadProgress) => void,
    onStatusChange?: (status: string) => void
  ): Promise<void> {
    await this.#phonemizeRuntime.preload(onProgress, onStatusChange);
  }

  destroy() {
    this.#onnxRuntime.destroy();
    this.#phonemizeRuntime.destroy();
    this.#voiceProvider.destroy();
  }

  async generate(
    text: string,
    voice: string,
    speaker = 0,
    onProgress?: (progress: DownloadProgress) => void,
    onStatusChange?: (status: string) => void
  ): Promise<PiperGenerateResult> {
    if (this.#isBusy) {
      return new Promise(resolve =>
        setTimeout(
          async () => resolve(await this.generate(text, voice, speaker, onProgress, onStatusChange)),
          100
        )
      );
    }

    speaker = Number(speaker);
    this.#isBusy = true;
    try {
      onStatusChange?.("Downloading voice model...");
      const voiceData = await this.#voiceProvider.fetch(voice, onProgress);

      if (!this.#phonemizeRuntime.isModuleLoaded) {
        onStatusChange?.("Downloading phonemizer model...");
      } else {
        onStatusChange?.("Phonemizing text...");
      }
      const phonemeData = await this.#phonemizeRuntime.phonemize(
        text,
        voiceData,
        onProgress,
        onStatusChange
      );

      onStatusChange?.("Generating speech audio...");
      return await this.#onnxRuntime.generate(phonemeData, voiceData, speaker);
    } finally {
      this.#isBusy = false;
    }
  }
}
