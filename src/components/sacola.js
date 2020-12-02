import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Sacola = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.bagContainer}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bagContainer: {
    padding: 18,
    backgroundColor: '#fff',
    borderRadius: 30,
  },

  image: {
    height: 30,
    width: 30,
  },
});

export default Sacola;
