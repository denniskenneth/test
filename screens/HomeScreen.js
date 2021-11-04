import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import ProductCard from './../components/ProductCard';
import plants from '../data/plants';

import { Colors } from '../components/styles';

const { primary, secondary, brand, darklight, tertiary, green } = Colors;

// ICONS IMPORT
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeTxt}>Welcome to</Text>
          <Text style={styles.shopTxt}>Dwon's Shop</Text>
        </View>
        <FontAwesome
          name='shopping-cart'
          size={28}
          color='black'
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.searchContainer}>
          <FontAwesome
            name='search'
            size={25}
            style={{ marginHorizontal: 20 }}
          />
          <TextInput
            placeholder='Search'
            style={styles.searchInput}
          ></TextInput>
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name='sort' size={24} color={primary} />
        </View>
      </View>
      {/* <ProductCard /> */}

      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingHorizontal: 10,
        }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <ProductCard plant={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    flex: 1,
    backgroundColor: primary,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  shopTxt: {
    fontSize: 38,
    fontWeight: 'bold',
    color: brand,
  },
  searchContainer: {
    height: 50,
    backgroundColor: secondary,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tertiary,
    flex: 1,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: brand,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default HomeScreen;
