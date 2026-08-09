import { create } from "zustand";
import { secureStorage, SecureKeys } from "../lib/secureStorage";

type AuthState = {
  isAuthenticated: boolean;
  accessToken: string | null;
  signIn: (token?: string) => Promise<void>;
  signOut: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  accessToken: null,

  /**
   * Call this on app boot to restore session from secure storage
   */
  hydrate: async () => {
    const token = await secureStorage.getItem(SecureKeys.ACCESS_TOKEN);
    if (token) {
      set({ isAuthenticated: true, accessToken: token });
    }
  },

  signIn: async (token = "demo-token") => {
    await secureStorage.setItem(SecureKeys.ACCESS_TOKEN, token);
    set({ isAuthenticated: true, accessToken: token });
  },

  signOut: async () => {
    await secureStorage.deleteItem(SecureKeys.ACCESS_TOKEN);
    await secureStorage.deleteItem(SecureKeys.REFRESH_TOKEN);
    set({ isAuthenticated: false, accessToken: null });
  },
}));
