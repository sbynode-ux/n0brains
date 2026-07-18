import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://n0brains.com",
  integrations: [mdx(), sitemap()],
  // EN stays at the root; es/tr/ru live under /es, /tr, /ru. Only the core
  // funnel pages have localized routes (see src/i18n/ui.ts TRANSLATED_PATHS).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "tr", "ru"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: "directory",
  },
  // /agents was folded into the docs page. Keep old links alive.
  redirects: {
    "/agents": "/docs/#agents",
  },
});
