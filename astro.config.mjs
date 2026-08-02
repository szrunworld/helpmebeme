import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import emdash from "emdash/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare({ imageService: "passthrough" }),
  site: process.env.PUBLIC_SITE_URL ?? "https://helpmebe.me",
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB", session: "auto" }),
      storage: r2({ binding: "MEDIA" }),
      images: false,
      siteUrl: "https://helpmebe.me",
      allowedOrigins: ["https://admin.helpmebe.me"],
      // The free Workers plan does not include Dynamic Worker Loaders.
      // Core CMS and blog features work without the plugin sandbox.
      sandbox: false,
      mcp: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
