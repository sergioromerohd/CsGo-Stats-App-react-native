import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Landing from './src/Pages/Landing';
import SearchLanding from './src/Pages/SearchLanding';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          contentStyle: { backgroundColor: 'black' },
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: 'pop',
        }}
      >
        <Stack.Screen name="SearchLanding" component={SearchLanding} />
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};