import React from 'react';
import {ProductList} from './components/product-list';
import {MSWProvider} from 'msw-rn-wrapper';
import {
  EmptyBasketFlow,
  FilledBasketFlow,
  SignleBasketFlow,
  SavedBasketFlow,
} from './msw/flows';
import {MSWConfig} from './components/msw-settings';
import {mswDatabase} from './msw/database';

export const App = () => {
  return (
    <MSWProvider
      database={mswDatabase}
      enableMSWInEnv={true}
      flows={[
        SignleBasketFlow,
        FilledBasketFlow,
        EmptyBasketFlow,
        SavedBasketFlow,
      ]}>
      <MSWConfig />
      <ProductList />
    </MSWProvider>
  );
};
