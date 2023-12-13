/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from '../pages/Splash/Splash';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Account from '../pages/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
   return (
      <Tab.Navigator initialRouteName="Splash">
         <Tab.Screen name="Splash" component={Splash} />
         <Tab.Screen name="Home" component={Home} />
         <Tab.Screen name="Order" component={Order} />
         <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
   );
};
const Router = () => {
   return (
      <Stack.Navigator initialRouteName="MainApp">
         <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
         <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      </Stack.Navigator>
   );
};

export default Router;

