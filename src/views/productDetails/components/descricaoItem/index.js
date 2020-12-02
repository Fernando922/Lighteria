import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Botao from '../../../../components/botao';
import {
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_X_LARGE,
} from '../../../../styles';

const DescricaoItem = ({
  image,
  title,
  itemDesc,
  studio,
  itemName,
  item,
  preco,
  id,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{studio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
              <Text style={styles.textoInferior}>{title}</Text>
            </View>
            <Image source={image} style={styles.imagem} />
          </View>
          <Text style={styles.textDescricao}>{itemDesc}</Text>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{preco}</Text>
            <Botao titulo={'COMPRAR'} width="100%" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },

  itemPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },

  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imagem: {
    height: 72,
    width: 30,
  },

  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },

  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },

  textoInferior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#CACACA',
    marginBottom: 4,
  },

  textDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#ACAAAB',
    marginBottom: 10,
  },

  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: BLACK,
  },
});

export default DescricaoItem;
