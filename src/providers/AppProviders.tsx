import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@shopify/restyle";
import { theme, darkTheme } from "../theme";
import { useThemeStore } from "../store/themeStore";
import { queryClient } from "../lib/queryClient";

/**
 * RestyleThemeSync
 * Reads the active mode from Zustand and feeds the correct
 * Restyle theme object into ThemeProvider — no React context for
 * theme mode, Zustand owns that state.
 */
function RestyleThemeSync({ children }: { children: ReactNode }) {
  const isDark = useThemeStore((s) => s.isDark);
  return <ThemeProvider theme={isDark ? darkTheme : theme}>{children}</ThemeProvider>;
}

/**
 * AppProviders
 * Single place to mount all root-level providers.
 * Add new providers here; keep _layout.tsx clean.
 *
 * Provider order (inner → outer):
 *   RestyleThemeSync  (needs Zustand, no dependencies)
 *   QueryClientProvider (server state)
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RestyleThemeSync>{children}</RestyleThemeSync>
    </QueryClientProvider>
  );
}
