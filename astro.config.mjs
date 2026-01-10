// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

/**
 * Astro Configuration
 * - SSR enabled (`output: "server"`)
 * - Node standalone adapter
 * - i18n support (en, gu, hi)
 * - TailwindCSS via Vite plugin
 */

export default defineConfig({
  output: "server", // Enable SSR

  adapter: node({
    mode: "standalone",
  }),

  i18n: {
    defaultLocale: "en", // default language
    locales: ["en", "gu", "hi"], // supported locales
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
