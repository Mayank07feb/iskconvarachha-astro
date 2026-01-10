// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server", // 👈 ENABLE SSR for Vercel

  adapter: vercel(), // ✅ Use Vercel adapter for deployment

  i18n: {
    defaultLocale: "en",
    locales: ["en", "gu", "hi"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
