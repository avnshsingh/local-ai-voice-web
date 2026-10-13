import { useState, useEffect, useRef } from "react";
import {
  Download,
  Pause,
  Play,
  Copy,
  Check,
  Square,
  Cpu,
  Zap,
  CloudDownload,
  Loader2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

import { TextStatistics } from "./text-statistics";
import { VoiceSelector } from "./voice-selector";
import type { Voices } from "./voice-selector";
import { SpeedControl } from "./speed-control";
import { AudioChunk } from "./audio-chunk";
import type { AudioChunkData } from "./audio-chunk";
import { Progress } from "./ui/progress";

const IS_WEBGPU_AVAILABLE =
  typeof navigator !== "undefined" &&
  "gpu" in navigator &&
  Boolean((navigator as unknown as { gpu?: unknown }).gpu);

export default function KokoroTTS() {
  const [text, setText] = useState(
    `We at PriVro started with a simple idea: powerful content creation tools shouldn't come at the cost of your privacy. Too many online services require you to upload your content to their servers, often collecting your data in the process.

Our solution is different. We've built a suite of tools that run entirely in your browser, processing everything locally on your device. Your media files, transcriptions, and edits never leave your computer.

We believe in the power of technology to enable creativity while respecting user privacy and ownership of data.`
  );
  const [lastGeneration, setLastGeneration] = useState<{
    text: string;
    speed: number;
    voice: keyof Voices;
  } | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(-1);
  const [speed, setSpeed] = useState(1);
  const [copied, setCopied] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "loading" | "ready" | "generating" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const worker = useRef<Worker | null>(null);
  const generationId = useRef(0);
  const [voices, setVoices] = useState<Voices | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<keyof Voices>("af_heart");
  const [chunks, setChunks] = useState<AudioChunkData[]>([]);
  const [result, setResult] = useState<Blob | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const initWorker = () => {
    if (worker.current) return worker.current;

    const w = new Worker(new URL("../worker.ts", import.meta.url), {
      type: "module",
    });

    w.addEventListener("message", ({ data }) => {
      switch (data.status) {
        case "device":
          // Device detected
          break;
        case "idle":
          // Ready to accept load command
          break;
        case "loading":
          setStatus("loading");
          break;
        case "progress":
          if (data.progress?.progress !== undefined) {
            setLoadingProgress(Math.floor(data.progress.progress));
          }
          break;
        case "ready":
          toast.success("Kokoro model loaded successfully");
          setStatus("ready");
          if (data.voices) {
            setVoices(data.voices);
          }
          break;
        case "error":
          setStatus("error");
          setError(data.error || data.data);
          toast.error("Kokoro error: " + (data.error || data.data));
          break;
        case "stream": {
          if (data.id !== generationId.current) break;
          setChunks(prev => [...prev, data.chunk]);
          break;
        }
        case "complete": {
          if (data.id !== generationId.current) break;
          setStatus("ready");
          setResult(data.audio);
          break;
        }
      }
    });

    w.addEventListener("error", (e: ErrorEvent) => {
      console.error("Kokoro worker error:", e);
      setError(e.message);
      setStatus("error");
    });

    worker.current = w;
    return w;
  };

  const handleExplicitLoad = () => {
    const w = initWorker();
    setStatus("loading");
    setLoadingProgress(0);
    setError(null);
    w.postMessage({ type: "load" });
  };

  useEffect(() => {
    return () => {
      if (worker.current) {
        worker.current.terminate();
        worker.current = null;
      }
    };
  }, []);

  const processed =
    lastGeneration &&
    lastGeneration.text === text &&
    lastGeneration.speed === speed &&
    lastGeneration.voice === selectedVoice;

  const handlePlayPause = () => {
    const w = initWorker();

    if (status === "idle") {
      setStatus("loading");
      setLoadingProgress(0);
      w.postMessage({ type: "load" });
      toast.info("Downloading Kokoro model (~350MB)...");
      return;
    }

    if (!isPlaying && status === "ready" && !processed) {
      setStatus("generating");
      setChunks([]);
      setResult(null);
      setCurrentChunkIndex(0);
      const id = ++generationId.current;
      const params = { text, voice: selectedVoice, speed, id };
      setLastGeneration({ text, voice: selectedVoice, speed });
      w.postMessage(params);
    }
    if (currentChunkIndex === -1) {
      setCurrentChunkIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (status !== "generating") return;
    generationId.current += 1;
    worker.current?.postMessage({ type: "stop" });
    setStatus("ready");
    setIsPlaying(false);
    setLastGeneration(null);
    toast.info("Kokoro generation stopped");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      {/* Hero Header */}
      <div className="text-center space-y-2 mb-2">
        <div className="inline-flex items-center gap-2 flex-wrap justify-center mb-1">
          <Badge
            variant="outline"
            className="gap-1.5 px-3 py-1 text-xs font-medium border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400"
          >
            <Zap className="size-3.5" />
            Kokoro 82M Model
          </Badge>
          <Badge
            variant="outline"
            className="gap-1.5 px-3 py-1 text-xs font-medium border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            <Cpu className="size-3.5" />
            {IS_WEBGPU_AVAILABLE ? "WebGPU Accelerated" : "WASM CPU Mode"}
          </Badge>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Kokoro Neural Voice Generator
        </h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Unlimited human-like speech synthesis running directly on your device.
          Zero data leaves your machine.
        </p>

        {!IS_WEBGPU_AVAILABLE && (
          <p className="text-destructive font-medium text-xs mt-1">
            ⚠️ WebGPU not detected — Kokoro runs with quantized WASM. For faster
            synthesis, Chrome with WebGPU is recommended.
          </p>
        )}
      </div>

      <Card className="shadow-lg bg-card text-card-foreground border-border">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="relative">
            <Textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              className={cn(
                "transition-all min-h-[140px] text-base leading-relaxed resize-y",
                processed && status === "ready" && "bg-secondary/40",
                status === "loading" && "text-muted-foreground"
              )}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 hover:bg-secondary cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex justify-end pt-1">
            <TextStatistics text={text} />
          </div>

          {/* Kokoro Idle State Banner with Explicit Load Button */}
          {status === "idle" && (
            <div className="rounded-xl border border-dashed border-primary/30 bg-primary/[0.03] p-4 text-center space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  Kokoro model is not downloaded yet
                </p>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  The model file (~350MB) is downloaded once into your browser cache.
                  To save bandwidth, downloading only begins when requested.
                </p>
              </div>
              <Button
                onClick={handleExplicitLoad}
                className="gap-2 cursor-pointer font-semibold text-xs h-9"
              >
                <CloudDownload className="size-4" />
                Download & Initialize Kokoro (~350 MB)
              </Button>
            </div>
          )}

          {/* Loading Progress State */}
          {status === "loading" && (
            <div className="space-y-2 p-4 rounded-xl border border-primary/20 bg-primary/[0.04]">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-primary font-medium">
                  <Loader2 className="size-3.5 animate-spin" />
                  Downloading Kokoro ONNX model files (~350 MB)...
                </span>
                <span className="font-mono text-xs font-bold text-primary">
                  {loadingProgress}%
                </span>
              </div>
              <Progress value={loadingProgress} className="h-2.5 w-full" />
              <p className="text-[11px] text-muted-foreground text-center">
                Files are downloaded only once and cached in the browser.
              </p>
            </div>
          )}

          {/* Voice Selector and Speed Control when Ready */}
          {status !== "idle" && status !== "loading" && (
            <div className="flex flex-wrap gap-4 pb-2 items-center justify-between">
              {voices ? (
                <>
                  <div className="flex-1 min-w-[200px]">
                    <VoiceSelector
                      voices={voices}
                      selectedVoice={selectedVoice}
                      onVoiceChange={setSelectedVoice}
                    />
                  </div>
                  <div className="flex items-center gap-4 w-44">
                    <SpeedControl speed={speed} onSpeedChange={setSpeed} />
                  </div>
                </>
              ) : error ? (
                <div className="w-full text-destructive font-semibold text-sm text-center p-2">
                  {error}
                </div>
              ) : null}
            </div>
          )}

          <Separator />

          <div className="flex py-2 gap-3 items-center">
            <Button
              size="lg"
              onClick={handlePlayPause}
              className={cn(
                "text-base w-36 transition-all cursor-pointer",
                isPlaying && "bg-brand hover:bg-brand/90"
              )}
              disabled={
                (status === "ready" && !isPlaying && !text.trim()) ||
                (status !== "ready" && status !== "idle" && chunks.length === 0)
              }
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-1 size-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-1 size-5" />
                  {status === "idle"
                    ? "Load & Run"
                    : processed || status === "generating"
                      ? "Play"
                      : "Generate"}
                </>
              )}
            </Button>

            {status === "generating" && (
              <Button
                size="lg"
                variant="outline"
                onClick={handleStop}
                className="text-base cursor-pointer"
              >
                <Square className="mr-1 size-4 fill-current" />
                Stop
              </Button>
            )}

            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                if (!result) return;
                const url = URL.createObjectURL(result);
                const link = document.createElement("a");
                link.href = url;
                link.download = "kokoro-audio.wav";
                link.click();
                URL.revokeObjectURL(url);
              }}
              disabled={!result || status !== "ready"}
              className="ml-auto cursor-pointer"
            >
              <Download className="mr-2 size-5" />
              Download Audio
            </Button>
          </div>

          {chunks.length > 0 && (
            <div className="mt-4 space-y-1 max-h-[320px] overflow-y-auto px-1">
              {chunks.map(({ text: chunkText, audio }, index) => (
                <AudioChunk
                  key={index}
                  text={chunkText}
                  audio={audio}
                  onClick={() => {
                    setCurrentChunkIndex(index);
                  }}
                  active={currentChunkIndex === index}
                  playing={isPlaying}
                  onStart={() => {
                    setCurrentChunkIndex(index);
                    setIsPlaying(true);
                  }}
                  onPause={() => {
                    if (currentChunkIndex === index) {
                      setIsPlaying(false);
                    }
                  }}
                  onEnd={() => {
                    if (
                      status !== "generating" &&
                      currentChunkIndex === chunks.length - 1
                    ) {
                      setIsPlaying(false);
                      setCurrentChunkIndex(-1);
                    } else {
                      setCurrentChunkIndex(prev => prev + 1);
                    }
                  }}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
