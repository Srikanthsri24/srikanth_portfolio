// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do NOT add React/Tailwind/TanStack plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },

    // Required for GitHub Pages static hosting
    prerender: isGitHubPages ? {
      enabled: true,
      routes: ["/", "/404"],
      crawlLinks: true,
      failOnError: false,
    } : undefined,
  },

  vite: {
    base: isGitHubPages ? "/srikanth_portfolio/" : "/",
  },
});