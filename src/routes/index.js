import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import CardDetailsScreen from '../screens/CardDetails';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
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
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params.cardName,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: '#d9d9d9',
            borderBottomWidth: 1,
          },
          headerTitleStyle: {
            fontFamily: 'SquadaOne-Regular',
            fontSize: 24,
          },
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
}

export default Routes;
