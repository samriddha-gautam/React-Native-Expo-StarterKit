import { QueryClient } from "@tanstack/react-query";

/**
 * TanStack Query client — single instance shared across the app.
 *
 * defaultOptions:
 * - staleTime:    5 min  → don't refetch if data is fresh
 * - gcTime:      10 min  → keep unused data in cache for 10 min
 * - retry:           2  → retry failed requests twice before erroring
 * - refetchOnWindowFocus: false → no refetch when switching app to foreground (adjust per project)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 2,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
