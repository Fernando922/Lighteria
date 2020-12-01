import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import ProductList from './views/productList';
import ProductDetails from './views/productDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {COR_DE_FUNDO} from './styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName={'ProductList'}>
          <Stack.Screen
            name={'ProductList'}
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductDetails'}
            component={ProductDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});

export default App;
