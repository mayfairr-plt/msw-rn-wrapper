import {Flow, mswRn} from 'msw-rn-wrapper';
import {mswDatabase} from '../database';

export const SavedBasketFlow = new Flow('SavedBasket', 'saved-basket', [
  mswRn.rest.get('https://fakestoreapi.com/products', async (req, res, ctx) => {
    return res(ctx.json(mswDatabase.product.getAll()));
  }),
]);
