import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const deploymentTarget = process.env.DEPLOY_TARGET;
const isGitHubPagesBuild = deploymentTarget === "github-pages";

export default defineConfig({
  output: "static",
  site: isGitHubPagesBuild
    ? "https://szrunworld.github.io"
    : (process.env.PUBLIC_SITE_URL ?? "https://helpmebe.me"),
  base: isGitHubPagesBuild ? "/helpmebeme" : "/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
