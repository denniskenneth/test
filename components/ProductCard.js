import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// COLORS IMPORT
import { Colors } from './styles';

const { primary, secondary, brand, black } = Colors;

// ICON IMPORT
import { FontAwesome } from '@expo/vector-icons';
import plants from '../data/plants';

import { useNavigation } from '@react-navigation/native';

// WIDTH OF SCREEEN
const width = Dimensions.get('screen').width / 2 - 30;

const ProductCard = ({ plant }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ zIndex: 1 }}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Detail', plant)}
    >
      <View style={styles.cardContainer}>
        <View style={{ alignItems: 'flex-end' }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: plant.like
                ? 'rgba(97, 207, 97,0.2)'
                : 'rgba(0,0,0,0.2)',
            }}
          >
            <FontAwesome
              name='heart'
              size={16}
              color={plant.like ? brand : black}
            />
          </View>
        </View>

        <View style={{ height: 100, alignItems: 'center' }}>
          <Image style={{ width: '50%', height: '90%' }} source={plant.img} />
        </View>
        <Text style={styles.plantName}>{plant.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
            ${plant.price}
          </Text>
          <View style={styles.btnContainer}>
            <FontAwesome name='plus' size={13} color='white' />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 225,
    backgroundColor: secondary,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  plantName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  btnContainer: {
    height: 25,
    width: 25,
    backgroundColor: brand,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
