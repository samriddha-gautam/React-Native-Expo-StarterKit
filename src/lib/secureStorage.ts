import * as SecureStore from "expo-secure-store";

/**
 * Thin wrapper around expo-secure-store for safely storing
 * tokens, credentials, and sensitive key-value pairs.
 */
export const secureStorage = {
  /**
   * Save a sensitive value (e.g. access token, refresh token)
   */
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error(`[SecureStorage] Failed to set "${key}":`, error);
    }
  },

  /**
   * Retrieve a sensitive value. Returns null if not found or on error.
   */
  getItem: async (key: string): Promise<string | null> => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error(`[SecureStorage] Failed to get "${key}":`, error);
      return null;
    }
  },

  /**
   * Delete a sensitive value (e.g. on sign-out)
   */
  deleteItem: async (key: string): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(`[SecureStorage] Failed to delete "${key}":`, error);
    }
  },
};

/**
 * Common keys — centralise here to avoid typos across the codebase
 */
export const SecureKeys = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
} as const;
