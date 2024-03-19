import React from 'react';
import {Text, View, Image} from 'react-native';
import {type ProductItemProps} from './ProductItem.types';
import {styles} from './ProductItem.styles';

export const ProductItem = ({product}: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};
