/* eslint-disable prettier/prettier */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider }  from 'react-native-paper';

const Main = () => {
   return (
      <PaperProvider>
         <App/>
      </PaperProvider>
   )
}

AppRegistry.registerComponent(appName, () => Main);
