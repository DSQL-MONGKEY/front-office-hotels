/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { bgSplash, logo } from '../../assets';

const Splash = ({ navigation }: any) => {

   // useEffect(() => {
   //    setTimeout(() => {
   //       navigation.replace('MainApp');
   //    }, 3000);
   // }, [navigation]);

   return (
      <ImageBackground source={bgSplash} style={styles.background}>
         <Image source={logo} style={styles.logo} />
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   logo: {
      top: -50,
   },
});

export default Splash;
