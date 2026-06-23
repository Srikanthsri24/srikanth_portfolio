// @lovable.dev/vite-tanstack-config already includes plugins.
// Do NOT add react/tailwind/tanstack plugins manually.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },

    prerender: {
      enabled: isGitHubPages,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },

    // Important: this tells TanStack Start to prerender home page
    pages: [
      {
        path: "/",
      },
    ],
  },

  vite: {
    base: isGitHubPages ? "/srikanth_portfolio/" : "/",
  },
});