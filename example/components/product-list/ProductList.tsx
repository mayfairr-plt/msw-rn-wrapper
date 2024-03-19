import React from 'react';
import {ActivityIndicator, Button, FlatList, SafeAreaView} from 'react-native';
import {useProducts} from '../../hooks/useProducts';
import {styles} from './ProductList.styles';
import {ProductItem} from '../product';

export const ProductList = () => {
  const {loading, getProducts, data} = useProducts();

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="[Load products]" onPress={getProducts} />
      )}

      <FlatList
        data={data}
        style={styles.flatlist}
        renderItem={({item}) => <ProductItem key={item.id} product={item} />}
      />
    </SafeAreaView>
  );
};
