import {HttpResponse, http} from 'msw';
import {Flow} from 'msw-rn-wrapper';

export const SignleBasketFlow = new Flow('Single Basket', 'single-basket', [
  http.get('https://fakestoreapi.com/products', () => {
    return HttpResponse.json([
      {
        id: 'test',
        title: 'MSW Product',
        price: '0.00',
        description: 'This is a test product given from MSW',
        category: 'tesst',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheKt3wdT5jBNvuf14YKJflolDSD3IzcEcnMhiOfUoLdcuZE0TvUUhCLMemI1jCee0gd4&usqp=CAU',
        rating: undefined,
      },
    ]);
  }),
]);
