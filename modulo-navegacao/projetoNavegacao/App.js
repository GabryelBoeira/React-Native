import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Import Page Navigation
import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name={'Sobre'}
          component={Sobre}
          options={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
