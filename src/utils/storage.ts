import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export const generateKey = (key: string): string => {
  return `msw-rn-wrapper-${key}`;
};
