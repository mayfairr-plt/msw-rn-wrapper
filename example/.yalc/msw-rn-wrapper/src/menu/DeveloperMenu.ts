import { type Dispatch, type SetStateAction } from 'react';
import { DevSettings } from 'react-native';

export const createDeveloperMenu = (
  showMenu: Dispatch<SetStateAction<boolean>>
) => {
  DevSettings.addMenuItem('View MSW Settings', () => showMenu(true));
};
