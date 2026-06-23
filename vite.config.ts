import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    base: isGitHubPages ? "/srikanth_portfolio/" : "/",
  },
});