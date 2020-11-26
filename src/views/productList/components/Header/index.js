import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.bagContainer}>
          <Image
            source={require('../../../../assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Descrição</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 6,
  },

  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },

  bagContainer: {
    padding: 18,
    backgroundColor: '#fff',
    borderRadius: 30,
  },

  image: {
    height: 30,
    width: 30,
  },

  divider: {
    marginTop: 40,
    borderWidth: 0.5,
    borderColor: '#a1a5aa',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },

  descriptionText: {
    padding: 34,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    backgroundColor: '#F4F0F4',
  },
});

export default Header;
