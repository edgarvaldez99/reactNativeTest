import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}
