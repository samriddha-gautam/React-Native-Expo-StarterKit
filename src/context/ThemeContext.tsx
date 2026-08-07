import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "@shopify/restyle";
import { theme, darkTheme } from "../theme";

const STORAGE_KEY = "@theme_mode";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((savedMode) => {
      if (savedMode === "dark" || savedMode === "light") {
        setMode(savedMode);
      }
    });
  }, []);

  const toggleTheme = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    AsyncStorage.setItem(STORAGE_KEY, nextMode);
  };

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
    AsyncStorage.setItem(STORAGE_KEY, newMode);
  };

  const currentTheme = mode === "dark" ? darkTheme : theme;

  return (
    <ThemeContext.Provider
      value={{
        mode,
        isDark: mode === "dark",
        toggleTheme,
        setThemeMode,
      }}
    >
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }
  return context;
};
