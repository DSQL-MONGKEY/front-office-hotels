/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast  from 'react-native-toast-message';


const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <BottomSheetModalProvider>
        <NavigationContainer>
            <Router/>
          </NavigationContainer>
        </BottomSheetModalProvider>
        <Toast />
      </GestureHandlerRootView>
    </>
  );
};



export default App;

