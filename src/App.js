import React from 'react';

import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lighteria</Text>
        <View style={styles.bagContainer}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text style={styles.descriptionText}>Descrição</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  title: {
    fontFamily: 'OpenSans-ExtraBold',
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

  descriptionContainer: {
    padding: 24,
  },

  divider: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
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

export default App;
