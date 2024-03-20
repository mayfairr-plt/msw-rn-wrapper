import {HttpResponse, http} from 'msw';
import {Flow} from 'msw-rn-wrapper';

export const EmptyBasketFlow = new Flow('Empty Basket', 'empty-basket', [
  http.get('https://fakestoreapi.com/products', () => {
    return HttpResponse.json([]);
  }),
]);
