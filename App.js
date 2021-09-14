import React  from 'react';
import { Text, View, Button, Alert, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from './src/Register';
import LoginScreen from './src/Login';
import ListingScreen from './src/Listing';
const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Register' }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Listing" component={ListingScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default MyStack;