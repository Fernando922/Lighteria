import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {FONT_FAMILY_REGULAR} from '../../../../styles';
import {useNavigation} from '@react-navigation/native';

const Item = ({image, title, itemDesc, studio, itemName, preco, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.push('ProductDetails', {
          image,
          title,
          itemName,
          itemDesc,
          studio,
          preco,
          id,
        })
      }>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
    fontFamily: FONT_FAMILY_REGULAR,
    color: '#848486',
  },

  image: {
    height: 84,
  },
});

export default Item;
