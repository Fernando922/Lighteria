import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Item = ({image, title}) => {
  return (
    <View style={styles.containerItem}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  text: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#848486',
  },

  image: {
    height: 84,
  },
});

export default Item;
