import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  PiperWebWorkerEngine,
  HuggingFaceVoiceProvider,
  isWebGPUSupported,
  PIPER_CDN_URL,
  type OnnxRuntimeType,
  type PiperLanguage,
  type PiperVoiceCatalog,
  type PiperVoiceItem,
} from "@/lib/piper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Volume2,
  Download,
  Sparkles,
  Zap,
  Cpu,
  ShieldCheck,
  RotateCcw,
  Play,
  Loader2,
  AlertCircle,
  FileAudio,
  CheckCircle2,
  Settings2,
  Search,
  Globe,
  ChevronDown,
  Check,
  X,
  SlidersHorizontal,
  CloudDownload,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const MESSAGES: Record<string, string> = {
  "badges.private": "100% Private",
  "badges.inBrowserPrivate": "100% In-Browser & Private",
  "badges.webWorkerOffloaded": "Web Worker Offloaded",
  "badges.webgpuAccelerated": "WebGPU Accelerated",
  "badges.wasmMultiThread": "WASM Multi-Thread",
  "badges.cached": "Cached",
  "hero.title": "Piper Neural Text-to-Speech",
  "hero.description":
    "High-performance, local text-to-speech with natural voices. Audio is synthesized completely inside your browser with Web Workers; no audio or text is ever sent to a server.",
  "hero.compactTitle": "Neural Voice Generator",
  "hero.compactSubtitle": "Runs locally in your browser · Web Workers & WebGPU · Zero uploads",
  "catalog.loadingTitle": "Loading neural voices catalog...",
  "catalog.loadingSubtitle": "Fetching multilingual voice profiles for zero-upload browser synthesis.",
  "catalog.loadFailed": "Could not load voices catalog",
  "controls.language": "Language",
  "controls.languagesCount": "{count} languages",
  "controls.selectLanguage": "Select Language",
  "controls.voicesCount": "{count} voices",
  "controls.voiceModel": "Voice Model",
  "controls.availableCount": "{count} available",
  "controls.selectVoice": "Select Voice",
  "controls.requiresDownload": "Requires 1st download",
  "controls.quickSwitch": "Quick switch:",
  "controls.browseAll": "Browse all {count} languages →",
  "controls.total": "{count} total",
  "controls.filterLanguagesPlaceholder": "Filter 40+ languages by English name, native name, or code...",
  "controls.noLanguagesFound": "No languages found matching \"{query}\"",
  "controls.voicesForLanguage": "Voices for {language}",
  "controls.searchVoicesPlaceholder": "Search voices by name or quality...",
  "controls.noVoicesFound": "No voices found for this language.",
  "controls.preCache": "Pre-cache",
  "controls.speakers": "{count} speakers",
  "synthesis.textTitle": "Text to Synthesize",
  "synthesis.words": "{count} words",
  "synthesis.chars": "{count} chars",
  "synthesis.description": "Type or paste any text. Audio is synthesized completely on your machine.",
  "synthesis.placeholder": "Type something here to synthesize...",
  "synthesis.trySample": "Try sample phrases:",
  "synthesis.status": "Synthesizing audio...",
  "synthesis.downloadNotice": "Voice model download happens once; subsequent generations will be immediate.",
  "synthesis.localNotice": "Synthesizing audio locally on your device with Web Workers...",
  "synthesis.errorTitle": "Synthesis Error",
  "synthesis.clear": "Clear",
  "synthesis.settings": "Settings",
  "synthesis.generate": "Generate Speech",
  "synthesis.generating": "Generating...",
  "settingsModal.title": "Inference & Voice Settings",
  "settingsModal.subtitle": "Local acceleration",
  "settingsModal.speakerVoice": "Speaker Voice ({count} speakers)",
  "settingsModal.speakerRange": "(Speaker ID 0 to {max})",
  "settingsModal.engineAcceleration": "Engine Acceleration",
  "settingsModal.webgpuSupported": "WebGPU Supported",
  "settingsModal.cpuFallback": "CPU Fallback",
  "settingsModal.fastestGpu": "Fastest GPU synthesis",
  "settingsModal.wasmWorker": "WASM Worker",
  "settingsModal.universalCpu": "Universal CPU compatibility",
  "audioOutput.ready": "Speech Audio Ready",
  "audioOutput.duration": "Duration: {duration}s",
  "audioOutput.time": "Time: {time}s",
  "audioOutput.format": "Audio Format: WAV (16-bit PCM, 22.05 kHz)",
  "audioOutput.downloadWav": "Download WAV",
  "toasts.webgpuFallback": "WebGPU unavailable, falling back to Web Worker WASM",
  "toasts.downloadingVoice": "Downloading voice model: {name}...",
  "toasts.downloadedVoice": "Voice model downloaded & cached!",
  "toasts.downloadFailed": "Failed to download voice: {error}",
  "toasts.runtimeSwitched": "Switched execution runtime to {runtime}",
  "toasts.enterText": "Please enter some text to generate speech",
  "toasts.selectVoice": "Please select a voice model",
  "toasts.engineInit": "TTS engine is initializing, please wait",
  "toasts.generatedSuccess": "Speech generated successfully!",
  "toasts.synthesisFailed": "Synthesis failed: {error}",
};

function t(key: string, values?: Record<string, unknown>): string {
  let str = MESSAGES[key] || key;
  if (values) {
    for (const [k, v] of Object.entries(values)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return str;
}

const DEFAULT_LANGUAGE = "en_US";
const DEFAULT_VOICE = "en_US-lessac-medium";
const DEFAULT_TEXT =
  "Welcome to Piper Text-to-Speech! This neural voice runs completely in your browser with Web Workers.";

const SAMPLE_PHRASES = [
  "Welcome to Piper Text-to-Speech! This neural voice runs completely in your browser with Web Workers.",
  "The quick brown fox jumps over the lazy dog.",
  "Privacy first: all neural synthesis happens locally on your device with zero cloud uploads.",
  "Hello world! Technology is best when it brings people together and preserves privacy.",
];

const POPULAR_LANGUAGES = [
  { code: "en_US", label: "English (US)", flag: "🇺🇸" },
  { code: "en_GB", label: "English (UK)", flag: "🇬🇧" },
  { code: "es_ES", label: "Spanish", flag: "🇪🇸" },
  { code: "fr_FR", label: "French", flag: "🇫🇷" },
  { code: "de_DE", label: "German", flag: "🇩🇪" },
  { code: "ja_JP", label: "Japanese", flag: "🇯🇵" },
  { code: "hi_IN", label: "Hindi", flag: "🇮🇳" },
  { code: "it_IT", label: "Italian", flag: "🇮🇹" },
  { code: "pt_BR", label: "Portuguese", flag: "🇧🇷" },
];

const QUALITY_ORDER = ["x_low", "low", "medium", "high"];

function getQualityBadgeVariant(quality: string): "default" | "secondary" | "outline" {
  if (quality === "high") return "default";
  if (quality === "medium") return "secondary";
  return "outline";
}

function getVoiceSizeMB(voice: PiperVoiceItem): string | null {
  if (!voice.files) return null;
  let totalBytes = 0;
  for (const file of Object.values(voice.files)) {
    if (file.size_bytes) totalBytes += file.size_bytes;
  }
  if (totalBytes <= 0) return null;
  return `${(totalBytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readStorage(key: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  try {
    const val = localStorage.getItem(key);
    return val != null ? val : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors
  }
}

export default function PiperTTS({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  const [voices, setVoices] = useState<PiperVoiceCatalog>({});
  const [languages, setLanguages] = useState<PiperLanguage[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en_US");
  const [selectedVoice, setSelectedVoice] = useState<string>(DEFAULT_VOICE);
  const [selectedSpeaker, setSelectedSpeaker] = useState<number>(0);
  const [text, setText] = useState<string>(DEFAULT_TEXT);
  const [cachedVoices, setCachedVoices] = useState<Set<string>>(new Set());
  const [downloadingVoiceKey, setDownloadingVoiceKey] = useState<string | null>(null);

  // Inline Selector Modals/Drawers
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = useState<boolean>(false);
  const [isVoicePickerOpen, setIsVoicePickerOpen] = useState<boolean>(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState<boolean>(false);

  const [languageSearch, setLanguageSearch] = useState<string>("");
  const [voiceSearch, setVoiceSearch] = useState<string>("");

  const [runtimeType, setRuntimeType] = useState<OnnxRuntimeType>("webgpu");
  const [hasWebGPU, setHasWebGPU] = useState<boolean>(false);

  const [isLoadingVoices, setIsLoadingVoices] = useState<boolean>(true);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [progressPercent, setProgressPercent] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioDurationSec, setAudioDurationSec] = useState<number | null>(null);
  const [generationTimeMs, setGenerationTimeMs] = useState<number | null>(null);

  const engineRef = useRef<PiperWebWorkerEngine | null>(null);
  const voiceProviderRef = useRef<HuggingFaceVoiceProvider | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize WebGPU detection and preferred runtime
  useEffect(() => {
    const webgpuSupported = isWebGPUSupported();
    setHasWebGPU(webgpuSupported);
    const storedRuntime = readStorage(
      "piper-tts-runtime",
      webgpuSupported ? "webgpu" : "wasm"
    ) as OnnxRuntimeType;
    setRuntimeType(storedRuntime);
  }, []);

  // Check if CDN URL is configured; notify user if missing
  useEffect(() => {
    if (!PIPER_CDN_URL) {
      toast.error(
        "Missing VITE_PIPER_CDN_URL in environment. Please add it to your .env file (see .env.example).",
        { duration: 8000 }
      );
    }
  }, []);

  // Initialize Voice Provider and load voices list
  useEffect(() => {
    const provider = new HuggingFaceVoiceProvider();
    voiceProviderRef.current = provider;

    setIsLoadingVoices(true);
    setStatusMessage("Loading neural voice models catalog...");

    provider
      .list()
      .then(catalog => {
        setVoices(catalog);

        // Group into languages
        const grouped = new Map<string, PiperLanguage>();
        for (const [key, voice] of Object.entries(catalog)) {
          const code = voice.language.code;
          if (!grouped.has(code)) {
            grouped.set(code, {
              ...voice.language,
              voices: [],
            });
          }
          grouped.get(code)!.voices.push({ ...voice, key });
        }

        const sortedLanguages = Array.from(grouped.values())
          .map(lang => {
            lang.voices.sort((a, b) => {
              const nameDiff = a.name.localeCompare(b.name);
              if (nameDiff !== 0) return nameDiff;
              const qA = QUALITY_ORDER.indexOf(a.quality);
              const qB = QUALITY_ORDER.indexOf(b.quality);
              return qB - qA;
            });
            return lang;
          })
          .sort((a, b) => {
            if (a.code === DEFAULT_LANGUAGE) return -1;
            if (b.code === DEFAULT_LANGUAGE) return 1;
            const nameDiff = a.name_english.localeCompare(b.name_english);
            if (nameDiff !== 0) return nameDiff;
            return (a.country_english || "").localeCompare(b.country_english || "");
          });

        setLanguages(sortedLanguages);

        // Resolve language: default to English (US)
        const storedLanguage = readStorage("piper-tts-language", DEFAULT_LANGUAGE);
        const resolvedLanguage = grouped.has(storedLanguage)
          ? storedLanguage
          : grouped.has(DEFAULT_LANGUAGE)
            ? DEFAULT_LANGUAGE
            : sortedLanguages[0]?.code || DEFAULT_LANGUAGE;

        setSelectedLanguage(resolvedLanguage);

        // Resolve voice for the selected language
        let storedVoiceKey = readStorage("piper-tts-voice", DEFAULT_VOICE);
        if (storedVoiceKey === "en_US-libritts_r-medium") {
          storedVoiceKey = DEFAULT_VOICE;
          writeStorage("piper-tts-voice", DEFAULT_VOICE);
        }
        const langVoices = grouped.get(resolvedLanguage)?.voices || [];
        const resolvedVoice = langVoices.some(v => v.key === storedVoiceKey)
          ? storedVoiceKey
          : langVoices.some(v => v.key === DEFAULT_VOICE)
            ? DEFAULT_VOICE
            : langVoices[0]?.key || DEFAULT_VOICE;

        setSelectedVoice(resolvedVoice);

        const storedText = readStorage("piper-tts-text", DEFAULT_TEXT);
        setText(storedText);

        const storedSpeaker = Number(readStorage("piper-tts-speaker", "0"));
        setSelectedSpeaker(Number.isFinite(storedSpeaker) ? storedSpeaker : 0);

        setIsLoadingVoices(false);
        setStatusMessage("");
      })
      .catch(err => {
        setIsLoadingVoices(false);
        const msg = err instanceof Error ? err.message : "Failed to load voices catalog";
        setErrorMessage(msg);
        toast.error(t("catalog.loadFailed"));
      });

    return () => {
      provider.destroy();
    };
  }, []);

  // Manage Piper Engine instance based on runtimeType
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.destroy();
      engineRef.current = null;
    }

    try {
      const engine = new PiperWebWorkerEngine({
        runtimeType,
        voiceProvider: voiceProviderRef.current || undefined,
      });
      engineRef.current = engine;
      // Preload phonemizer in background for zero-latency generation
      engine.preloadPhonemizer().catch(() => {});
    } catch (err) {
      console.error("Failed to initialize engine:", err);
      if (runtimeType === "webgpu") {
        setRuntimeType("wasm");
        toast.warning(t("toasts.webgpuFallback"));
      }
    }

    return () => {
      if (engineRef.current) {
        engineRef.current.destroy();
        engineRef.current = null;
      }
    };
  }, [runtimeType]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  // Focus search input when language drawer opens
  useEffect(() => {
    if (isLanguagePickerOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isLanguagePickerOpen]);

  const filteredLanguages = useMemo(() => {
    const q = languageSearch.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      l =>
        l.name_english.toLowerCase().includes(q) ||
        (l.name_native && l.name_native.toLowerCase().includes(q)) ||
        (l.country_english && l.country_english.toLowerCase().includes(q)) ||
        l.code.toLowerCase().includes(q)
    );
  }, [languages, languageSearch]);

  const currentLanguageObj = useMemo(() => {
    return languages.find(l => l.code === selectedLanguage) || null;
  }, [languages, selectedLanguage]);

  const currentLanguageVoices = useMemo(() => {
    const lang = languages.find(l => l.code === selectedLanguage);
    if (!lang) return [];
    const q = voiceSearch.trim().toLowerCase();
    if (!q) return lang.voices;
    return lang.voices.filter(
      v =>
        v.name.toLowerCase().includes(q) ||
        v.quality.toLowerCase().includes(q) ||
        v.key.toLowerCase().includes(q)
    );
  }, [languages, selectedLanguage, voiceSearch]);

  // Check cache status for active voices
  useEffect(() => {
    if (!voiceProviderRef.current || currentLanguageVoices.length === 0) return;
    const provider = voiceProviderRef.current;
    let isCancelled = false;

    Promise.all(
      currentLanguageVoices.map(async v => {
        const cached = await provider.isVoiceCached(v.key);
        return { key: v.key, cached };
      })
    ).then(results => {
      if (isCancelled) return;
      setCachedVoices(prev => {
        const next = new Set(prev);
        results.forEach(r => {
          if (r.cached) next.add(r.key);
        });
        return next;
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [currentLanguageVoices]);

  // Preload a specific voice model
  const handlePreloadVoice = async (voiceKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (downloadingVoiceKey || isGenerating) return;

    setDownloadingVoiceKey(voiceKey);
    toast.info(t("toasts.downloadingVoice", { name: voiceKey }));
    try {
      await voiceProviderRef.current?.fetch(voiceKey);
      setCachedVoices(prev => new Set(prev).add(voiceKey));
      toast.success(t("toasts.downloadedVoice"));
    } catch (err) {
      toast.error(t("toasts.downloadFailed", { error: err instanceof Error ? err.message : String(err) }));
    } finally {
      setDownloadingVoiceKey(null);
    }
  };

  const currentVoiceObj = useMemo<PiperVoiceItem | null>(() => {
    return voices[selectedVoice] || null;
  }, [voices, selectedVoice]);

  // Handle language switch
  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    writeStorage("piper-tts-language", code);
    setIsLanguagePickerOpen(false);
    setLanguageSearch("");

    const lang = languages.find(l => l.code === code);
    if (lang && lang.voices.length > 0) {
      const defaultVoiceInLang = lang.voices[0].key;
      setSelectedVoice(defaultVoiceInLang);
      writeStorage("piper-tts-voice", defaultVoiceInLang);
      setSelectedSpeaker(0);
      writeStorage("piper-tts-speaker", "0");
    }
  };

  // Handle voice switch
  const handleVoiceSelect = (key: string) => {
    setSelectedVoice(key);
    writeStorage("piper-tts-voice", key);
    setSelectedSpeaker(0);
    writeStorage("piper-tts-speaker", "0");
    setIsVoicePickerOpen(false);
    setVoiceSearch("");
  };

  // Handle speaker switch
  const handleSpeakerChange = (val: number) => {
    setSelectedSpeaker(val);
    writeStorage("piper-tts-speaker", String(val));
  };

  // Handle text change
  const handleTextChange = (val: string) => {
    setText(val);
    writeStorage("piper-tts-text", val);
  };

  // Handle runtime toggle
  const handleRuntimeToggle = (type: OnnxRuntimeType) => {
    setRuntimeType(type);
    writeStorage("piper-tts-runtime", type);
    toast.info(t("toasts.runtimeSwitched", { runtime: type === "webgpu" ? "WebGPU" : "Web Worker WASM" }));
  };

  // Speech Generation
  const handleGenerate = async () => {
    const trimmed = text.trim();
    if (!trimmed) {
      toast.error(t("toasts.enterText"));
      return;
    }
    if (!selectedVoice) {
      toast.error(t("toasts.selectVoice"));
      return;
    }

    if (!engineRef.current) {
      toast.error(t("toasts.engineInit"));
      return;
    }

    if (!PIPER_CDN_URL) {
      toast.error(
        "VITE_PIPER_CDN_URL is not configured. Please add VITE_PIPER_CDN_URL to your .env file."
      );
      return;
    }

    setIsGenerating(true);
    setErrorMessage(null);
    setProgressPercent(null);
    setStatusMessage("Preparing neural synthesis...");

    const startTime = performance.now();

    try {
      const result = await engineRef.current.generate(
        trimmed,
        selectedVoice,
        selectedSpeaker,
        progress => {
          if (progress.total > 0) {
            const pct = Math.min(100, Math.round((progress.loaded / progress.total) * 100));
            setProgressPercent(pct);
            const loadedMB = (progress.loaded / (1024 * 1024)).toFixed(1);
            const totalMB = (progress.total / (1024 * 1024)).toFixed(1);
            setStatusMessage(
              pct >= 100
                ? "Processing assets..."
                : `Downloading voice model: ${pct}% (${loadedMB}/${totalMB} MB)`
            );
          } else {
            setProgressPercent(null);
            setStatusMessage("Downloading voice model...");
          }
        },
        status => {
          setStatusMessage(status);
          if (!status.toLowerCase().includes("downloading")) {
            setProgressPercent(null);
          }
        }
      );

      const endTime = performance.now();
      const elapsed = Math.round(endTime - startTime);
      setGenerationTimeMs(elapsed);

      // Create audio object URL
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
      const newUrl = URL.createObjectURL(result.file);
      setAudioUrl(newUrl);
      setAudioDurationSec(result.duration / 1000);
      setCachedVoices(prev => new Set(prev).add(selectedVoice));

      toast.success(t("toasts.generatedSuccess"));

      // Autoplay
      setTimeout(() => {
        if (audioElRef.current) {
          audioElRef.current.play().catch(() => {});
        }
      }, 100);
    } catch (err) {
      console.error("TTS Generation Error:", err);
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(msg);
      toast.error(t("toasts.synthesisFailed", { error: msg }));
    } finally {
      setIsGenerating(false);
      setProgressPercent(null);
      setStatusMessage("");
    }
  };

  const wordCount = useMemo(() => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [text]);

  const isCurrentVoiceCached = cachedVoices.has(selectedVoice);
  const currentVoiceSizeMB = currentVoiceObj ? getVoiceSizeMB(currentVoiceObj) : null;

  return (
    <div
      className={cn(
        "w-full",
        compact
          ? "p-3 sm:p-5 max-w-4xl mx-auto space-y-4"
          : "max-w-4xl mx-auto space-y-5"
      )}
    >
      {/* Top Banner / Hero Header */}
      {!compact && (
        <div className="text-center space-y-2 mb-2">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center mb-1">
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 text-xs font-medium border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
            >
              <ShieldCheck className="size-3.5" />
              {t("badges.inBrowserPrivate")}
            </Badge>
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 text-xs font-medium border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
            >
              <Cpu className="size-3.5" />
              {t("badges.webWorkerOffloaded")}
            </Badge>
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 text-xs font-medium border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400"
            >
              <Zap className="size-3.5" />
              {hasWebGPU ? t("badges.webgpuAccelerated") : t("badges.wasmMultiThread")}
            </Badge>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            {t("hero.title")}
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            {t("hero.description")}
          </p>
        </div>
      )}

      {/* Missing CDN URL Configuration Warning Banner */}
      {!PIPER_CDN_URL && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl border border-destructive/30 bg-destructive/10 text-destructive text-xs">
          <AlertCircle className="size-4 mt-0.5 shrink-0" />
          <div className="flex-1 space-y-1">
            <p className="font-semibold text-destructive">
              Missing VITE_PIPER_CDN_URL Environment Variable
            </p>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Piper TTS requires remote worker and model binaries. Please define{" "}
              <code className="font-mono bg-background/80 px-1 py-0.5 rounded text-foreground font-semibold">
                VITE_PIPER_CDN_URL
              </code>{" "}
              in your <code className="font-mono bg-background/80 px-1 py-0.5 rounded text-foreground font-semibold">.env</code> file (refer to <code className="font-mono bg-background/80 px-1 py-0.5 rounded text-foreground font-semibold">.env.example</code>).
            </p>
          </div>
        </div>
      )}

      {/* Primary Voice Catalog Loading Alert */}
      {isLoadingVoices && (
        <div className="flex items-center gap-3 p-3.5 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs animate-pulse">
          <Loader2 className="size-4 animate-spin shrink-0 text-primary" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground">{t("catalog.loadingTitle")}</p>
            <p className="text-muted-foreground text-[11px] truncate">
              {t("catalog.loadingSubtitle")}
            </p>
          </div>
        </div>
      )}

      {/* Language & Voice Selector Card */}
      <Card className="border-border shadow-xs bg-card">
        <CardContent className="p-4 sm:p-5 space-y-3.5">
          {/* Top Controls Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Language Selection Control */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Globe className="size-3.5 text-primary" />
                  {t("controls.language")}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {languages.length > 0 ? t("controls.languagesCount", { count: languages.length }) : t("catalog.loadingTitle")}
                </span>
              </div>

              {isLoadingVoices ? (
                <Skeleton className="h-10 w-full rounded-lg" />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsLanguagePickerOpen(!isLanguagePickerOpen);
                    setIsVoicePickerOpen(false);
                  }}
                  disabled={isGenerating}
                  className={cn(
                    "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border bg-background hover:bg-muted/40 transition-colors text-left",
                    isLanguagePickerOpen && "border-primary ring-1 ring-primary"
                  )}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe className="size-4 text-primary shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate flex items-center gap-1.5">
                        {currentLanguageObj ? currentLanguageObj.name_english : t("controls.selectLanguage")}
                        {currentLanguageObj?.country_english && (
                          <span className="text-muted-foreground font-normal">
                            ({currentLanguageObj.country_english})
                          </span>
                        )}
                      </div>
                      {currentLanguageObj?.name_native &&
                        currentLanguageObj.name_native !== currentLanguageObj.name_english && (
                          <div className="text-[10px] text-muted-foreground truncate">
                            {currentLanguageObj.name_native}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-1">
                    {currentLanguageObj && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 font-mono">
                        {t("controls.voicesCount", { count: currentLanguageObj.voices.length })}
                      </Badge>
                    )}
                    <ChevronDown
                      className={cn(
                        "size-4 text-muted-foreground transition-transform duration-200",
                        isLanguagePickerOpen && "rotate-180"
                      )}
                    />
                  </div>
                </button>
              )}
            </div>

            {/* Voice Model Selection Control */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <Volume2 className="size-3.5 text-primary" />
                  {t("controls.voiceModel")}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {t("controls.availableCount", { count: currentLanguageVoices.length })}
                </span>
              </div>

              {isLoadingVoices ? (
                <Skeleton className="h-10 w-full rounded-lg" />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsVoicePickerOpen(!isVoicePickerOpen);
                    setIsLanguagePickerOpen(false);
                  }}
                  disabled={isGenerating || currentLanguageVoices.length === 0}
                  className={cn(
                    "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg border bg-background hover:bg-muted/40 transition-colors text-left",
                    isVoicePickerOpen && "border-primary ring-1 ring-primary"
                  )}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm shrink-0">🎙️</span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold truncate flex items-center gap-1.5">
                        {currentVoiceObj ? currentVoiceObj.name : t("controls.selectVoice")}
                        {currentVoiceObj && (
                          <Badge
                            variant={getQualityBadgeVariant(currentVoiceObj.quality)}
                            className="text-[9px] px-1 py-0 uppercase"
                          >
                            {currentVoiceObj.quality}
                          </Badge>
                        )}
                      </div>
                      <div className="text-[10px] text-muted-foreground flex items-center gap-2">
                        {currentVoiceSizeMB && <span>{currentVoiceSizeMB}</span>}
                        {isCurrentVoiceCached ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                            <Check className="size-2.5" /> {t("badges.cached")}
                          </span>
                        ) : (
                          <span>{t("controls.requiresDownload")}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "size-4 text-muted-foreground shrink-0 transition-transform duration-200",
                      isVoicePickerOpen && "rotate-180"
                    )}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Quick Popular Languages Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{t("controls.quickSwitch")}</span>
              <button
                type="button"
                onClick={() => {
                  setIsLanguagePickerOpen(true);
                  setIsVoicePickerOpen(false);
                }}
                className="text-primary hover:underline text-[11px] font-medium cursor-pointer"
              >
                {t("controls.browseAll", { count: languages.length })}
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_LANGUAGES.map(pop => {
                const isSelected = selectedLanguage === pop.code;
                return (
                  <button
                    key={pop.code}
                    type="button"
                    onClick={() => handleLanguageSelect(pop.code)}
                    disabled={isGenerating || isLoadingVoices}
                    className={cn(
                      "inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs transition-all font-medium border cursor-pointer",
                      isSelected
                        ? "bg-primary text-primary-foreground border-primary shadow-xs"
                        : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-transparent"
                    )}
                  >
                    <span>{pop.flag}</span>
                    <span>{pop.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inline Expandable Language Drawer */}
          {isLanguagePickerOpen && (
            <div className="rounded-xl border bg-card p-3 sm:p-4 space-y-3 shadow-md transition-all">
              <div className="flex items-center justify-between gap-2 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <Globe className="size-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">{t("controls.selectLanguage")}</span>
                  <Badge variant="outline" className="text-[10px]">
                    {t("controls.total", { count: languages.length })}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLanguagePickerOpen(false)}
                  className="size-7"
                >
                  <X className="size-4" />
                </Button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder={t("controls.filterLanguagesPlaceholder")}
                  value={languageSearch}
                  onChange={e => setLanguageSearch(e.target.value)}
                  className="pl-9 pr-8 h-9 text-xs"
                />
                {languageSearch && (
                  <button
                    type="button"
                    onClick={() => setLanguageSearch("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Language List */}
              <div className="max-h-60 overflow-y-auto divide-y rounded-lg border bg-background/50">
                {filteredLanguages.length === 0 ? (
                  <div className="p-6 text-center text-xs text-muted-foreground">
                    {t("controls.noLanguagesFound", { query: languageSearch })}
                  </div>
                ) : (
                  filteredLanguages.map(lang => {
                    const isSelected = selectedLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={cn(
                          "w-full px-3 py-2.5 text-left flex items-center justify-between gap-2.5 hover:bg-muted/60 transition-colors min-h-[42px] cursor-pointer",
                          isSelected && "bg-primary/10 text-primary font-semibold"
                        )}
                      >
                        <div className="min-w-0 flex-1 truncate">
                          <span className="font-medium text-xs">{lang.name_english}</span>
                          {lang.name_native && lang.name_native !== lang.name_english && (
                            <span className="text-muted-foreground ml-1.5 text-[11px]">
                              ({lang.name_native})
                            </span>
                          )}
                          {lang.country_english && (
                            <span className="text-muted-foreground ml-1 text-[11px]">
                              — {lang.country_english}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Badge variant="outline" className="text-[10px] font-mono">
                            {t("controls.voicesCount", { count: lang.voices.length })}
                          </Badge>
                          {isSelected && <Check className="size-3.5 text-primary shrink-0" />}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* Inline Expandable Voice Picker Drawer */}
          {isVoicePickerOpen && (
            <div className="rounded-xl border bg-card p-3 sm:p-4 space-y-3 shadow-md transition-all">
              <div className="flex items-center justify-between gap-2 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <Volume2 className="size-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">
                    {t("controls.voicesForLanguage", {
                      language: currentLanguageObj?.name_english || t("controls.selectLanguage"),
                    })}
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    {currentLanguageVoices.length}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsVoicePickerOpen(false)}
                  className="size-7"
                >
                  <X className="size-4" />
                </Button>
              </div>

              {/* Search Bar for Voices */}
              {currentLanguageVoices.length > 5 && (
                <div className="relative">
                  <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={t("controls.searchVoicesPlaceholder")}
                    value={voiceSearch}
                    onChange={e => setVoiceSearch(e.target.value)}
                    className="pl-9 pr-8 h-8 text-xs"
                  />
                  {voiceSearch && (
                    <button
                      type="button"
                      onClick={() => setVoiceSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>
              )}

              {/* Voice Models List */}
              <div className="max-h-60 overflow-y-auto divide-y rounded-lg border bg-background/50">
                {currentLanguageVoices.length === 0 ? (
                  <div className="p-6 text-center text-xs text-muted-foreground">
                    {t("controls.noVoicesFound")}
                  </div>
                ) : (
                  currentLanguageVoices.map(voice => {
                    const isSelected = selectedVoice === voice.key;
                    const isCached = cachedVoices.has(voice.key);
                    const isDownloading = downloadingVoiceKey === voice.key;
                    const sizeMB = getVoiceSizeMB(voice);

                    return (
                      <div
                        key={voice.key}
                        onClick={() => handleVoiceSelect(voice.key)}
                        className={cn(
                          "w-full px-3 py-2.5 text-left flex items-center justify-between gap-2.5 hover:bg-muted/60 transition-colors cursor-pointer min-h-[44px]",
                          isSelected && "bg-primary/10 text-primary font-semibold border-l-2 border-l-primary"
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-semibold">{voice.name}</span>
                            <Badge
                              variant={getQualityBadgeVariant(voice.quality)}
                              className="text-[9px] px-1 py-0 uppercase"
                            >
                              {voice.quality}
                            </Badge>
                            {voice.num_speakers > 1 && (
                              <Badge variant="outline" className="text-[9px] px-1 py-0">
                                {t("controls.speakers", { count: voice.num_speakers })}
                              </Badge>
                            )}
                          </div>
                          <div className="text-[10px] text-muted-foreground flex items-center gap-2 mt-0.5">
                            {sizeMB && <span>{sizeMB}</span>}
                            <span>·</span>
                            <span>{voice.key}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isCached ? (
                            <Badge
                              variant="outline"
                              className="text-[10px] border-emerald-500/30 text-emerald-600 dark:text-emerald-400 gap-1"
                            >
                              <Check className="size-2.5" />
                              {t("badges.cached")}
                            </Badge>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-[10px] gap-1 text-muted-foreground hover:text-foreground"
                              disabled={isDownloading}
                              onClick={e => handlePreloadVoice(voice.key, e)}
                            >
                              {isDownloading ? (
                                <Loader2 className="size-3 animate-spin text-primary" />
                              ) : (
                                <CloudDownload className="size-3" />
                              )}
                              <span>{t("controls.preCache")}</span>
                            </Button>
                          )}
                          {isSelected && <Check className="size-4 text-primary shrink-0" />}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Main Synthesis Textarea & Speech Generation */}
      <Card className="border-border shadow-xs bg-card">
        <CardHeader className="pb-3 pt-4 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
              <Volume2 className="size-4 text-primary" />
              {t("synthesis.textTitle")}
            </CardTitle>
            <div className="text-[11px] text-muted-foreground flex gap-3 font-mono">
              <span>{t("synthesis.words", { count: wordCount })}</span>
              <span>{t("synthesis.chars", { count: text.length })}</span>
            </div>
          </div>
          <CardDescription className="text-xs">
            {t("synthesis.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3.5 px-4 sm:px-6 pb-4 sm:pb-6">
          <Textarea
            value={text}
            onChange={e => handleTextChange(e.target.value)}
            placeholder={t("synthesis.placeholder")}
            rows={compact ? 4 : 5}
            className="resize-y min-h-[120px] text-sm leading-relaxed"
            disabled={isGenerating}
          />

          {/* Sample Phrases Chips */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-medium text-muted-foreground flex items-center gap-1">
              <Sparkles className="size-3 text-amber-500" />
              {t("synthesis.trySample")}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SAMPLE_PHRASES.map((phrase, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={isGenerating}
                  onClick={() => handleTextChange(phrase)}
                  className="text-[11px] text-left px-2 py-0.5 rounded-md bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors truncate max-w-full cursor-pointer"
                >
                  &ldquo;{phrase.slice(0, 34)}...&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Generation & Download Progress Banner */}
          {isGenerating && (
            <div className="space-y-2 p-3.5 rounded-xl border border-primary/20 bg-primary/[0.04]">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-primary font-medium">
                  <Loader2 className="size-3.5 animate-spin" />
                  {statusMessage || t("synthesis.status")}
                </span>
                {progressPercent !== null && (
                  <span className="font-mono text-xs font-bold text-primary">
                    {progressPercent}%
                  </span>
                )}
              </div>
              <Progress
                value={progressPercent ?? 0}
                className={cn("h-2", progressPercent === null && "animate-pulse")}
              />
              <p className="text-[10px] text-muted-foreground">
                {progressPercent !== null && progressPercent < 100
                  ? t("synthesis.downloadNotice")
                  : t("synthesis.localNotice")}
              </p>
            </div>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm flex items-start gap-2 border border-destructive/20">
              <AlertCircle className="size-4 mt-0.5 shrink-0" />
              <div className="flex-1 text-xs">
                <p className="font-semibold">{t("synthesis.errorTitle")}</p>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleTextChange("")}
                disabled={isGenerating || !text}
                className="gap-1.5 text-xs h-9"
              >
                <RotateCcw className="size-3.5" />
                {t("synthesis.clear")}
              </Button>

              {/* Advanced Settings Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
                className="gap-1 text-xs h-9 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <SlidersHorizontal className="size-3.5" />
                <span>{t("synthesis.settings")}</span>
                <ChevronDown
                  className={cn(
                    "size-3 transition-transform duration-200",
                    showAdvancedSettings && "rotate-180"
                  )}
                />
              </Button>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !text.trim() || !selectedVoice || isLoadingVoices}
              className="gap-2 px-6 h-9 font-semibold text-xs"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" />
                  {t("synthesis.generating")}
                </>
              ) : (
                <>
                  <Play className="size-3.5 fill-current" />
                  {t("synthesis.generate")}
                </>
              )}
            </Button>
          </div>

          {/* Collapsible Advanced Settings */}
          {showAdvancedSettings && (
            <div className="p-3.5 rounded-xl border bg-muted/20 space-y-3 pt-3 text-xs">
              <div className="flex items-center justify-between font-semibold border-b pb-2">
                <span className="flex items-center gap-1.5">
                  <Settings2 className="size-3.5 text-primary" />
                  {t("settingsModal.title")}
                </span>
                <span className="text-[10px] text-muted-foreground">{t("settingsModal.subtitle")}</span>
              </div>

              {/* Multi-Speaker Selection */}
              {currentVoiceObj && currentVoiceObj.num_speakers > 1 && (
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold">
                    {t("settingsModal.speakerVoice", { count: currentVoiceObj.num_speakers })}
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={0}
                      max={currentVoiceObj.num_speakers - 1}
                      value={selectedSpeaker}
                      onChange={e => handleSpeakerChange(Number(e.target.value))}
                      disabled={isGenerating}
                      className="h-8 text-xs max-w-[120px]"
                    />
                    <span className="text-xs text-muted-foreground">
                      {t("settingsModal.speakerRange", { max: currentVoiceObj.num_speakers - 1 })}
                    </span>
                  </div>
                </div>
              )}

              {/* Inference Engine Runtime */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>{t("settingsModal.engineAcceleration")}</span>
                  {hasWebGPU ? (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <Zap className="size-3" /> {t("settingsModal.webgpuSupported")}
                    </span>
                  ) : (
                    <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
                      <Cpu className="size-3" /> {t("settingsModal.cpuFallback")}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={isGenerating || !hasWebGPU}
                    onClick={() => handleRuntimeToggle("webgpu")}
                    className={cn(
                      "p-2 rounded-lg border text-left transition-all text-xs flex flex-col gap-0.5 cursor-pointer",
                      runtimeType === "webgpu"
                        ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                        : "border-border hover:bg-muted/40 text-muted-foreground",
                      !hasWebGPU && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className="font-semibold flex items-center gap-1 text-foreground text-xs">
                      <Zap className="size-3 text-amber-500" />
                      WebGPU
                    </span>
                    <span className="text-[10px] text-muted-foreground">{t("settingsModal.fastestGpu")}</span>
                  </button>

                  <button
                    type="button"
                    disabled={isGenerating}
                    onClick={() => handleRuntimeToggle("wasm")}
                    className={cn(
                      "p-2 rounded-lg border text-left transition-all text-xs flex flex-col gap-0.5 cursor-pointer",
                      runtimeType === "wasm"
                        ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                        : "border-border hover:bg-muted/40 text-muted-foreground"
                    )}
                  >
                    <span className="font-semibold flex items-center gap-1 text-foreground text-xs">
                      <Cpu className="size-3 text-blue-500" />
                      WASM Worker
                    </span>
                    <span className="text-[10px] text-muted-foreground">{t("settingsModal.universalCpu")}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Audio Output Result Card */}
      {audioUrl && (
        <Card className="border-emerald-500/30 bg-emerald-500/[0.02] shadow-xs">
          <CardHeader className="pb-2 pt-4 px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-4" />
                {t("audioOutput.ready")}
              </CardTitle>
              <div className="flex items-center gap-2 sm:gap-3 text-[11px] text-muted-foreground font-mono">
                {audioDurationSec !== null && (
                  <span>{t("audioOutput.duration", { duration: audioDurationSec.toFixed(1) })}</span>
                )}
                {generationTimeMs !== null && (
                  <span>{t("audioOutput.time", { time: (generationTimeMs / 1000).toFixed(2) })}</span>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 px-4 sm:px-6 pb-4 sm:pb-6">
            <audio ref={audioElRef} src={audioUrl} controls className="w-full rounded-md h-10" />

            <div className="flex items-center justify-between pt-1">
              <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <FileAudio className="size-3.5" />
                {t("audioOutput.format")}
              </div>
              <Button asChild size="sm" variant="default" className="gap-1.5 h-8 text-xs font-semibold">
                <a href={audioUrl} download="piper-speech.wav">
                  <Download className="size-3.5" />
                  {t("audioOutput.downloadWav")}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
