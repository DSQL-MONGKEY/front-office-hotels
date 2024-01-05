/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Splash from '../pages/Splash';
import Home from '../pages/Home';
import Account from '../pages/Account';
import { BottomNavigator } from '../components';
import GuestList from '../pages/GuestList';
import Service from '../pages/Service';
import RoomDetails from '../pages/Details/RoomDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
   return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
         <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
            />
         <Tab.Screen
            name="Guest list"
            component={GuestList}
            options={{ headerShown: false }} />
         <Tab.Screen
            name="Services"
            component={Service}
            options={{ headerShown: false }}
         />
         <Tab.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }} />
      </Tab.Navigator>
   );
};
const Router = () => {
   return (
      <Stack.Navigator initialRouteName="Splash"  screenOptions={{
         ...TransitionPresets.SlideFromRightIOS,
      }}>
         <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
         <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
         <Stack.Screen name="RoomDetails" component={RoomDetails} options={{ headerShown: false }}/>
      </Stack.Navigator>
   );
};

export default Router;

