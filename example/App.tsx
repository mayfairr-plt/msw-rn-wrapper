import React from 'react';
import {ProductList} from './components/product-list';
import {MSWProvider} from 'msw-rn-wrapper';
import {EmptyBasketFlow, FilledBasketFlow, SignleBasketFlow} from './msw/flows';

export const App = () => {
  return (
    <MSWProvider
      enableMSWInEnv={true}
      flows={[SignleBasketFlow, FilledBasketFlow, EmptyBasketFlow]}>
      <ProductList />
    </MSWProvider>
  );
};
