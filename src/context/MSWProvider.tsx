import React, { useContext, useEffect, useReducer } from 'react';
import { createContext, type PropsWithChildren } from 'react';
import {
  type MSWContextValues,
  type MSWProviderProps,
} from './types/MSWProvider.types';
import { MSWReducer } from './MSWReducer';
import { createDeveloperMenu } from '../menu';
import { generateKey, storage } from '../utils/storage';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetPopup } from '../menu';
import { startServer } from '../server';

const initialState: MSWContextValues = {
  flow: 'checkout',
  enableMSWInEnv: false,
  active: false,
  currentFlow: undefined,
};

const MSWContext = createContext<MSWContextValues>(initialState);

export const useMSWRN = () => useContext(MSWContext);

export const MSWProvider = ({
  children,
  enableMSWInEnv,
}: PropsWithChildren<MSWProviderProps>): JSX.Element => {
  const [state, dispatch] = useReducer(MSWReducer, {
    ...initialState,
    enableMSWInEnv,
  });

  useEffect(() => {
    if (!enableMSWInEnv) {
      return;
    }

    const MSWEnabled = storage.getBoolean(generateKey('enabled'));

    if (MSWEnabled) {
      dispatch({ type: 'SET_ACTIVE', payload: true });
      startServer();
      console.warn('[MSW]: Enabled | All requests are being intercepted');
    }

    createDeveloperMenu();
  }, [enableMSWInEnv]);

  return (
    <MSWContext.Provider value={state}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          {children}
          <BottomSheetPopup />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </MSWContext.Provider>
  );
};
