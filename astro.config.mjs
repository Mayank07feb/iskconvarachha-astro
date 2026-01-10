// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server", // 👈 ENABLE SSR

  adapter: node({
    mode: "standalone",
  }),

  i18n: {
    defaultLocale: "en",
    locales: ["en", "gu", "hi"],
  },
  

  vite: {
    plugins: [tailwindcss()],
  },
});
