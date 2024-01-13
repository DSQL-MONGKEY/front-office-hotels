/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { logoBrandBlue } from '../assets';


const Icon = () => {

   return (
      <View style={styles.container}>
         <Image source={logoBrandBlue} style={styles.logo} />
      </View>
   );
};

export default Icon;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
   },
   logo: {
      width: 50,
      height: 50,
   },
   backButton: {
      fontSize: 30,
      color: 'black',
   },
});
