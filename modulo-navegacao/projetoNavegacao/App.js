import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Import Page Navigation
import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import Contato from './src/pages/Contato/Contato';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Sobre: {
    name: 'ios-people',
  },
  Contato: {
    name: 'ios-call',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name];
            return <Ionicons name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: 'rgba(000,000,000, 0.7)',
          },
          activeTintColor: 'rgba(000,000,000, 0.7)',
          inactiveBackgroundColor: 'rgba(000,000,000, 0.7)',
          activeBackgroundColor: '#FFF',
        }}>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Sobre'} component={Sobre} />
        <Tab.Screen name={'Contato'} component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
