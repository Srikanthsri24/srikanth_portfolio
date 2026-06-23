import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const basepath =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,

    // Required for GitHub Pages sub-path:
    // https://srikanthsri24.github.io/srikanth_portfolio/
    basepath,
  });

  return router;
};