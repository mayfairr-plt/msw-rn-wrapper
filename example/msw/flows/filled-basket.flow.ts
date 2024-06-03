import {Flow, mswRn} from 'msw-rn-wrapper';

export const FilledBasketFlow = new Flow('Filled Basket', 'filled-basket', [
  mswRn.rest.get('https://fakestoreapi.com/products', async (req, res, ctx) => {
    return res(
      ctx.json(
        Array(10).fill({
          id: 'test',
          title: 'MSW Product 2',
          price: '£1.00',
          description: 'This is a test product given from MSW',
          category: 'tesst',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheKt3wdT5jBNvuf14YKJflolDSD3IzcEcnMhiOfUoLdcuZE0TvUUhCLMemI1jCee0gd4&usqp=CAU',
          rating: undefined,
        }),
      ),
    );
  }),
]);
