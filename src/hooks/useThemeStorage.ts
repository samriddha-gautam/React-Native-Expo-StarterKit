import { mmkvStorage } from "../lib/storage";

const THEME_KEY = "@theme_mode";

type ThemeMode = "light" | "dark";

/**
 * Synchronous hook for reading and writing the light/dark mode preference via MMKV.
 * Returns the saved mode and a setter — no async, no loading state.
 */
export const useThemeStorage = () => {
  const getMode = (): ThemeMode => {
    const saved = mmkvStorage.getString(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return "light";
  };

  const saveMode = (mode: ThemeMode): void => {
    mmkvStorage.setString(THEME_KEY, mode);
  };

  return { getMode, saveMode };
};
