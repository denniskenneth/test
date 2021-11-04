import React, { useMemo, useEffect, useReducer } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from './context/UserContext'
import { Onboarding, Main } from './routes/navigators/Stack';

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userId: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_ID':
        return {
          ...prevState,
          isLoading: false,
          userId: action.id,
        }
      case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userId: action.id,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          isLoading: false,
          userId: null,
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(() => ({
    logIn: async (userId) => {
      try {
        await AsyncStorage.setItem('@userId', userId)
        console.log('Saved @userId to device')
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'LOGIN', id: userId })
    },
    logOut: async () => {
      try {
        await AsyncStorage.removeItem('@userId')
        console.log('Removed @userId from device')
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })
    }
  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let user
      try {
        user = await AsyncStorage.getItem('@userId')
        console.log(`Current user is ${user}`)
      } catch (e) {
        console.log(e)
      }
      dispatch({ type: 'RETRIEVE_ID', id: user })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return <AppLoading />
  }

  return (
    <UserContext.Provider value={authContext}>
      {loginState.userId !== null ? (
        <Main />
      ) : (
        <Onboarding />
      )}
    </UserContext.Provider>
  )
}
