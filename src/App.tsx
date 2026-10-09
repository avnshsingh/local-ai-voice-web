import { useState } from "react";
import SiteHeaderNav from "./components/SiteHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import PiperTTS from "./components/PiperTTS";
import KokoroTTS from "./components/KokoroTTS";
import { Toaster } from "@/components/ui/sonner";
import { Sparkles, Bot } from "lucide-react";
import { Badge } from "./components/ui/badge";

export default function AudioReader() {
  const [activeTab, setActiveTab] = useState<string>("piper");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeaderNav />

      <main className="flex-1 p-3 sm:p-6 md:p-8">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Main TTS Engine Tab Selector */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full space-y-6"
          >
            <div className="flex justify-center">
              <TabsList className="h-12 p-1.5 bg-muted/80 backdrop-blur-xs rounded-xl shadow-xs border border-border/50 max-w-md w-full grid grid-cols-2">
                <TabsTrigger
                  value="piper"
                  className="rounded-lg h-9 gap-2 text-xs sm:text-sm font-semibold transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground"
                >
                  <Sparkles className="size-4 text-brand" />
                  <span>Piper TTS</span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0 h-4 uppercase font-bold tracking-wider bg-brand/10 text-brand border-brand/20"
                  >
                    Primary
                  </Badge>
                </TabsTrigger>

                <TabsTrigger
                  value="kokoro"
                  className="rounded-lg h-9 gap-2 text-xs sm:text-sm font-semibold transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm data-[state=active]:text-foreground"
                >
                  <Bot className="size-4 text-muted-foreground" />
                  <span>Kokoro TTS</span>
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0 h-4 text-muted-foreground"
                  >
                    Secondary
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: Piper Neural Voice Generator (Primary & Default) */}
            <TabsContent value="piper" className="focus-visible:outline-none">
              <PiperTTS />
            </TabsContent>

            {/* Tab 2: Kokoro Neural Voice Generator (Secondary) */}
            <TabsContent value="kokoro" className="focus-visible:outline-none">
              <KokoroTTS />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Toaster
        toastOptions={{
          style: {
            fontSize: 14,
          },
        }}
      />
    </div>
  );
}
