/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RoomInfo = () => {
   return (
      <View style={styles.container}>
         <View style={styles.infoContainerLeft}>
            <Text>RoomInfo</Text>
            <Text>RoomInfo</Text>
         </View>
         <View style={styles.infoContainerRight}>
            <Text>Room</Text>
            <Text>Room</Text>
         </View>
      </View>
   );
};

export default RoomInfo;

const styles = StyleSheet.create({
   container: {
      height: 300,
      width: 'auto',
      flex: 1,
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#F2AFEF',
   },
   infoContainerLeft: {
      flex: 2,
      backgroundColor: '#D2E3C8',
   },
   infoContainerRight: {
      flex: 2,
      backgroundColor: '#D2E3C8',
   },
});
