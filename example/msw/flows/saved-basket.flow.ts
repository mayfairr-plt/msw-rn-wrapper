import {HttpResponse, http} from 'msw';
import {Flow} from 'msw-rn-wrapper';
import {mswDatabase} from '../database';

export const SavedBasketFlow = new Flow('SavedBasket', 'saved-basket', [
  http.get('https://fakestoreapi.com/products', () => {
    return HttpResponse.json(mswDatabase.product.getAll());
  }),
]);
