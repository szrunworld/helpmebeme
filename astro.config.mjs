import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  output: "static",
  site: "https://szrunworld.github.io",
  base: isGitHubPagesBuild ? "/helpmebeme" : "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
