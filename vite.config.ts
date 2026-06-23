import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: isGitHubPages ? "/srikanth_portfolio/" : "/",
});