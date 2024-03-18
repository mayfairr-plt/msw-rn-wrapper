import React, { useContext, useEffect, useReducer } from 'react';
import { createContext, type PropsWithChildren } from 'react';
import {
  type MSWContextValues,
  type MSWProviderProps,
} from './types/MSWProvider.types';
import { MSWReducer } from './MSWReducer';
import { createDeveloperMenu } from '../menu';

const initialState: MSWContextValues = {
  flow: 'checkout',
  enabled: false,
  currentFlow: undefined,
};

const MSWContext = createContext<MSWContextValues>(initialState);

export const useMSWRN = () => useContext(MSWContext);

export const MSWProvider = ({
  children,
  enabled,
}: PropsWithChildren<MSWProviderProps>): JSX.Element => {
  const [state] = useReducer(MSWReducer, { ...initialState, enabled });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    createDeveloperMenu();
  }, [enabled]);

  return <MSWContext.Provider value={state}>{children}</MSWContext.Provider>;
};
