import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { createContext, type PropsWithChildren } from 'react';
import {
  type MSWContextValues,
  type MSWProviderProps,
} from './types/MSWProvider.types';
import { MSWReducer } from './MSWReducer';
import { createDeveloperMenu } from '../menu';
import { generateKey, storage } from '../utils/storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { startServer } from '../server';
import persist from '../database/persist';

const initialState: MSWContextValues = {
  enableMSWInEnv: false,
  database: undefined,
  active: false,
  flows: [],
};

const MSWContext = createContext<MSWContextValues>(initialState);

export const useMSWRN = () => useContext(MSWContext);

export const MSWProvider = ({
  children,
  enableMSWInEnv,
  flows,
  database,
}: PropsWithChildren<MSWProviderProps>): JSX.Element => {
  const [state, dispatch] = useReducer(MSWReducer, {
    ...initialState,
    flows,
    enableMSWInEnv,
    database,
  });

  const [_showMenu, setShowMenu] = useState<boolean>(false);

  const checkMSWEnabled = useCallback(() => {
    const MSWEnabled = storage.getBoolean(generateKey('enabled'));

    if (MSWEnabled) {
      dispatch({ type: 'SET_ACTIVE', payload: true });
      startServer();
      console.warn('[MSW]: Enabled | All requests are being intercepted');
    }
  }, []);

  useEffect(() => {
    if (!enableMSWInEnv || !state.database) {
      if (!state.database) {
        console.error('[MSW]: Database does not exist');
      }
      return;
    }

    checkMSWEnabled();
    persist(state.database);

    createDeveloperMenu(setShowMenu);
  }, [enableMSWInEnv, checkMSWEnabled, state.database]);

  return (
    <MSWContext.Provider value={state}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
      </GestureHandlerRootView>
    </MSWContext.Provider>
  );
};
