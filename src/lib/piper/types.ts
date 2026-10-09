export interface PiperLanguage {
  code: string;
  family: string;
  name_english: string;
  name_native: string;
  country_english: string;
  voices: PiperVoiceItem[];
}

export interface PiperVoiceItem {
  key: string;
  name: string;
  language: {
    code: string;
    family: string;
    name_english: string;
    name_native: string;
    country_english: string;
  };
  quality: string;
  num_speakers: number;
  speaker_id_map: Record<string, number>;
  files: Record<string, { size_bytes?: number; md5_digest?: string }>;
}

export type PiperVoiceCatalog = Record<string, PiperVoiceItem>;

export interface DownloadProgress {
  loaded: number;
  total: number;
  cached?: boolean;
}

export interface PiperPhonemeData {
  text: string;
  phonemes: string[];
  phoneme_ids: number[];
}

export interface PiperGenerateResult {
  phonemeData: PiperPhonemeData;
  file: Blob;
  duration: number; // Duration in milliseconds
}

export class WebWorkerEvent {
  type: string;
  data: unknown;

  constructor(type: string, data?: unknown) {
    this.type = type;
    this.data = data;
  }
}
