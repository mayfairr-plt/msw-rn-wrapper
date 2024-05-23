import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const STORAGE_KEY_PREFIX = 'msw-rn-wrapper-';

export const generateKey = (key: string): string => {
  return `${STORAGE_KEY_PREFIX}${key}`;
};

export const resetCache = (): void => {
  const allStoredKeys = storage.getAllKeys();
  const keysContainingStorageKeyPrefix = allStoredKeys.filter((key) =>
    key.includes(STORAGE_KEY_PREFIX)
  );

  keysContainingStorageKeyPrefix.forEach((key) => {
    storage.delete(key);
  });
};
