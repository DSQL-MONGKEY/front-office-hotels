/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { logo } from '../../assets';

const Splash = ({ navigation }: any) => {

   useEffect(() => {
      setTimeout(() => {
         navigation.replace('MainApp');
      }, 2300);
   }, [navigation]);

   const imageScale = new Animated.Value(0.1);
   Animated.timing(imageScale, {
      toValue: 1,
      duration: 1300,
      useNativeDriver: true,
   }).start();

   return (
      <View style={styles.container}>
         <Animated.Image
            source={logo}
            style={[styles.logo, { transform: [{scale: imageScale}] }]}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#89ADE2',
   },
   logo: {
      width: 200,
      height: 200,
   },
});

export default Splash;
