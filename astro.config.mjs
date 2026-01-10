// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server", // SSR enabled

  adapter: node({
    mode: "standalone",
  }),

  // ✅ i18n config (NO /en prefix)
  i18n: {
    defaultLocale: "en",      // English = /
    locales: ["en", "gu", "hi"],
    routing: {
      prefixDefaultLocale: false, // 👈 THIS IS THE KEY LINE
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
