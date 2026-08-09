import { createMMKV, MMKV } from "react-native-mmkv";

// Global MMKV instance for fast, synchronous key-value storage
export const storage: MMKV = createMMKV();

/**
 * MMKV helper for storing typed values with fallback safety for Web/tests
 */
export const mmkvStorage = {
  getString: (key: string): string | undefined => {
    try {
      return storage.getString(key);
    } catch {
      return undefined;
    }
  },
  setString: (key: string, value: string): void => {
    try {
      storage.set(key, value);
    } catch {
      // Ignore if storage uninitialized
    }
  },
  getBoolean: (key: string): boolean | undefined => {
    try {
      return storage.getBoolean(key);
    } catch {
      return undefined;
    }
  },
  setBoolean: (key: string, value: boolean): void => {
    try {
      storage.set(key, value);
    } catch {
      // Ignore if storage uninitialized
    }
  },
  remove: (key: string): void => {
    try {
      storage.remove(key);
    } catch {
      // Ignore
    }
  },
};
