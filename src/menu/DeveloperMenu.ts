import { DevSettings } from 'react-native';
import { serverListen } from '../server';

export const createDeveloperMenu = () => {
  DevSettings.addMenuItem('View MSW Settings', enableDeveloperSettings);
};

const enableDeveloperSettings = async () => {
  await import('../msw.polyfills');
  serverListen();
  DevSettings.reload('[MSW] | Enabled');
};
