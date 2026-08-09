import { create } from "zustand";
import { mmkvStorage } from "../lib/storage";

type ThemeMode = "light" | "dark";

const THEME_KEY = "@theme_mode";

type ThemeState = {
  mode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

const getPersistedMode = (): ThemeMode => {
  const saved = mmkvStorage.getString(THEME_KEY);
  return saved === "dark" || saved === "light" ? saved : "light";
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: getPersistedMode(),
  isDark: getPersistedMode() === "dark",

  toggleTheme: () =>
    set((state) => {
      const nextMode = state.mode === "light" ? "dark" : "light";
      mmkvStorage.setString(THEME_KEY, nextMode);
      return { mode: nextMode, isDark: nextMode === "dark" };
    }),

  setThemeMode: (mode) => {
    mmkvStorage.setString(THEME_KEY, mode);
    set({ mode, isDark: mode === "dark" });
  },
}));
