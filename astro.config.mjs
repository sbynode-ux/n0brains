import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://n0brains.com",
  integrations: [mdx(), sitemap()],
  build: {
    format: "directory",
  },
  // /agents was folded into the docs page. Keep old links alive.
  redirects: {
    "/agents": "/docs/#agents",
  },
});
