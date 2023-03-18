import Main from './main';
import cargando from './cargando';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

 function Index() {
    return (
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Main"
            screenOptions={{
            headerShown: false
            }}
          >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="cargando" component={cargando} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Index;