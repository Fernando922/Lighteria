import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import ProductList from './views/productList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
});

export default App;
