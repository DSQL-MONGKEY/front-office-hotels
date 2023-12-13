/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Splash = () => {
   return (
      <View style={styles.container}>
         <Text>COBA</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Splash;
