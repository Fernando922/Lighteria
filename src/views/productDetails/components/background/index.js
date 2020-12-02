import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Sacola from '../../../../components/sacola';

const Background = () => {
  const imgSrc = require('../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode={'cover'}
        source={imgSrc}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image
              source={require('../../../../assets/images/flecha-esquerda.png')}
              style={styles.iconeVoltar}
            />
          </TouchableOpacity>
          <View style={styles.iconeSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6,
  },

  imageBackground: {
    height: '100%',
    width: '100%',
  },

  iconeVoltar: {
    height: 24,
    width: 24,
    marginHorizontal: 36,
    marginVertical: 24,
  },

  iconeSacola: {
    padding: 18,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Background;
