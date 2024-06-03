import {Flow, mswRn} from 'msw-rn-wrapper';

export const EmptyBasketFlow = new Flow('Empty Basket', 'empty-basket', [
  mswRn.rest.get('https://fakestoreapi.com/products', async (req, res, ctx) => {
    return res(ctx.json([]));
  }),
]);
