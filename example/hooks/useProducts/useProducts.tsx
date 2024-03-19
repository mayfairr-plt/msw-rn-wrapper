import {useState} from 'react';
import {type Product} from '../../types/Product';

export const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const responseData: Product[] = await response.json();
      setData(responseData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, getProducts};
};
