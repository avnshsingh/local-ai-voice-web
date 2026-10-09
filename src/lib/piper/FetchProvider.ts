import type { DownloadProgress } from "./types";

const CACHE_NAME = "piper-voices-cache-v1";

export class FetchProvider {
  #cache: Record<string, unknown> = {};

  destroy() {
    for (const key in this.#cache) {
      const data = this.#cache[key];
      if (typeof data === "string" && data.startsWith("blob:")) {
        try {
          URL.revokeObjectURL(data);
        } catch {
          // Ignore revocation errors
        }
      }
    }
    this.#cache = {};
  }

  async isCached(url: string): Promise<boolean> {
    if (this.#cache[url]) return true;
    if (typeof window !== "undefined" && "caches" in window) {
      try {
        const cache = await caches.open(CACHE_NAME);
        const match = await cache.match(url);
        return Boolean(match);
      } catch {
        return false;
      }
    }
    return false;
  }

  async fetch(
    url: string,
    onProgress?: (event: DownloadProgress) => void
  ): Promise<unknown> {
    if (this.#cache[url]) {
      onProgress?.({ loaded: 1, total: 1, cached: true });
      return this.#cache[url];
    }

    // Try reading from CacheStorage if in browser
    if (typeof window !== "undefined" && "caches" in window) {
      try {
        const cache = await caches.open(CACHE_NAME);
        const match = await cache.match(url);
        if (match) {
          onProgress?.({ loaded: 1, total: 1, cached: true });
          if (url.endsWith(".json")) {
            const data = await match.json();
            this.#cache[url] = data;
            return data;
          } else {
            const blob = await match.blob();
            const objectUrl = URL.createObjectURL(blob);
            this.#cache[url] = objectUrl;
            return objectUrl;
          }
        }
      } catch {
        // Fall back to network
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch: ${url} (${response.status} ${response.statusText})`);
    }

    if (url.endsWith(".json")) {
      const data = await response.json();
      this.#cache[url] = data;
      onProgress?.({ loaded: 1, total: 1 });

      if (typeof window !== "undefined" && "caches" in window) {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(
            url,
            new Response(JSON.stringify(data), {
              headers: { "Content-Type": "application/json" },
            })
          );
        } catch {
          // Ignore cache write error
        }
      }

      return data;
    }

    const total = Number(response.headers.get("Content-Length")) || 0;
    const reader = response.body?.getReader();
    if (!reader) {
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      this.#cache[url] = objectUrl;
      onProgress?.({ loaded: blob.size, total: total || blob.size });

      if (typeof window !== "undefined" && "caches" in window) {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(url, new Response(blob));
        } catch {
          // Ignore cache write error
        }
      }

      return objectUrl;
    }

    const chunks: Uint8Array[] = [];
    let loaded = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        loaded += value.byteLength;
        onProgress?.({ loaded, total });
      }
    }

    const blob = new Blob(chunks, url.endsWith(".wasm") ? { type: "application/wasm" } : undefined);
    const objectUrl = URL.createObjectURL(blob);
    this.#cache[url] = objectUrl;
    onProgress?.({ loaded: blob.size, total: total || blob.size });

    if (typeof window !== "undefined" && "caches" in window) {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(url, new Response(blob));
      } catch {
        // Ignore cache write error
      }
    }

    return objectUrl;
  }
}
