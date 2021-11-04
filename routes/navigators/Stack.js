import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMPORT SCREENS
import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import SignupScreen from '../../screens/SignupScreen';
// import HomeScreen from '../../screens/HomeScreen';
import ProductDetail from './../../screens/Dyna/ProductDetail';
import CartScreen from './../../screens/Dyna/CartScreen';
import CheckoutScreen from '../../screens/Dyna/CheckoutScreen';

import { Colors } from '../../components/styles';
import { HomeDrawer } from './Drawer';

// Colors
const { tertiary } = Colors;

const Stack = createNativeStackNavigator();

export const Onboarding = () => {
  return (
    <NavigationContainer style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          title: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName='Login'
      >
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          style={{ flex: 1 }}
        />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Main = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeDrawer'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: tertiary,
        headerTransparent: true,
        title: '',
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name='HomeDrawer'
        component={HomeDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Detail'
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Cart' component={CartScreen} />
      <Stack.Screen name='Checkout' component={CheckoutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)