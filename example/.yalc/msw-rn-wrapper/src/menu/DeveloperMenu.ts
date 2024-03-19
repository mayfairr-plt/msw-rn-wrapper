import { DevSettings } from 'react-native';
import { generateKey, storage } from '../utils/storage';

export const createDeveloperMenu = () => {
  DevSettings.addMenuItem('View MSW Settings', enableDeveloperSettings);
};

const enableDeveloperSettings = async () => {
  storage.set(generateKey('enabled'), true);
  DevSettings.reload();
};
