import {mswDataRn} from 'msw-rn-wrapper';

export const customerModel = {
  id: mswDataRn.primaryKey(String),
  products: mswDataRn.manyOf('product'),
};

export const productModel = {
  id: mswDataRn.primaryKey(String),
  title: String,
  price: String,
  description: String,
  category: String,
  image: String,
  rating: mswDataRn.nullable(String),
};

export const mswDatabase = mswDataRn.factory({
  customer: {...customerModel},
  product: {...productModel},
});
