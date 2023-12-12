/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Coba from '../pages/Coba/Coba';
import Home from '../pages/Home';

const Stack = createStackNavigator();
const Router = () => {
   return (
         <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="coba" component={Coba} />
         </Stack.Navigator>
   );
};

export default Router;

