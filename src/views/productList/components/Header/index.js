import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Sacola from '../../../../components/sacola';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_XX_LARGE,
} from '../../../../styles';
const Header = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lighteria</Text>
        <Sacola />
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
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
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
    fontFamily: FONT_FAMILY_REGULAR,
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default Header;
