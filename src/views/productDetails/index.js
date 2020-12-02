import React from 'react';
import {View, StyleSheet} from 'react-native';
import Background from './components/background';
import DescricaoItem from './components/descricaoItem';

const ProductDetails = ({route}) => {
  const {image, title, itemDesc, studio, itemName, preco, id} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        image={image}
        title={title}
        itemDesc={itemDesc}
        studio={studio}
        itemName={itemName}
        preco={preco}
        id={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetails;
