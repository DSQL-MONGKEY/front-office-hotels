/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputData from '../../components/InputData';

const RoomDetails = () => {
  return (
      <View style={styles.container}>
         <Text>RoomDetails</Text>
         <InputData label={'Guest Name'} placeholder={'Enter guest name'} />
      </View>
   );
};

export default RoomDetails;



const styles = StyleSheet.create({
   container: {
      height: '100%',
      backgroundColor: '#4F6F52',
   },
});
