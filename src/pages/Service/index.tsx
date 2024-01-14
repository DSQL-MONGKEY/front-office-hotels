/* eslint-disable prettier/prettier */
import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';

const Service = () => {
   return (
      <TouchableRipple
         onPress={() => console.log('Pressed')}
         rippleColor="rgba(0, 0, 0, .32)"
         style={styles.container}
      >
      <Text>Press anywhere</Text>
      </TouchableRipple>
   );
};

export default Service;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
