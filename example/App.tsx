import React from 'react';
import {ProductList} from './components/product-list';
import {MSWProvider} from 'msw-rn-wrapper';

export const App = () => {
  return (
    <MSWProvider enableMSWInEnv={true}>
      <ProductList />
    </MSWProvider>
  );
};
