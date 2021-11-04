import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
// IMPORT COLORS
import { Colors } from './styles';

const { primary, brand, darklight, secondary } = Colors;

// ICONS IMPORT
import { AntDesign } from '@expo/vector-icons';

const CartCard = ({ item }) => {
  return (
    <View style={styles.cartCard}>
      <Image source={item.img} style={{ height: 80, width: 80 }} />
      <View
        style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: darklight }}>50 x 20 cm</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
        <View style={styles.actionBtn}>
          <AntDesign name='minus' size={24} color='white' />
          <AntDesign name='plus' size={24} color='white' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: 'black',
    borderRadius: 10,
    backgroundColor: secondary,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: brand,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
  },
});

export default CartCard;
