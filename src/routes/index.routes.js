import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import CardDetailsScreen from '../screens/CardDetails';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="CardDetailsScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardDetailsScreen"
        component={CardDetailsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
