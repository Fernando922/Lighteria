import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Header from './components/Header';
import {DATA} from '../../utils/data';
import Item from './components/Item';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Header />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default ProductList;
