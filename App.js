import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { Signup } from './screens/Signup';
import { Signin } from './screens/Signin';
import { GameSelection } from './screens/GameSelection';
import { Provider } from 'react-redux';
import store from './store/store'

const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="signin" component={Signin}/>
        <Stack.Screen name="gameSelection" component={GameSelection}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    );
}


