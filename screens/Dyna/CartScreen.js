import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';

// IMPORT COLORS
import { Colors } from './../../components/styles';

const { primary, brand, darklight, secondary } = Colors;

// ICONS IMPORT
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// IMPORT COMPONENTS
import CartCard from '../../components/CartCard';
import { StyledBtn } from '../../components/styles';
import plants from './../../data/plants';

const CartScreen = ({ navigation }) => {
  // const CartCard = () => {
  //   return (
  //     <View style={styles.cartCard}>
  //       <Text></Text>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{ backgroundColor: primary, flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        {/* <View style={styles.header}>
          <Ionicons
            name='arrow-back'
            size={28}
            color='black'
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </View> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={plants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CartCard item={item} />}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Total Price
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
              </View>
              <View style={{ marginHorizontal: 30 }}>
                <StyledBtn onPress={() => navigation.navigate('Checkout')}>
                  <Text
                    style={{ color: primary, fontSize: 18, fontWeight: 'bold' }}
                  >
                    CHECKOUT
                  </Text>
                </StyledBtn>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 20,
  },
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
});

export default CartScreen;
