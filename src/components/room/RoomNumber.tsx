/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import React from 'react';
import { availableRoomId } from '../../constants/constants';
import { FlatList } from 'react-native-gesture-handler';
import RoomItem from './RoomItem';


const RoomNumber = () => {
   return (
         <FlatList
            keyExtractor={item => item.id}
            data={availableRoomId}
            renderItem={({item}):any => <RoomItem id={item.id} status={item.status} />}
            horizontal
            style={styles.container}
         />
   );
};




export default RoomNumber;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
      padding: 5,
      textAlign: 'center',
      borderRadius: 5,
   },
   text: {
      margin: 4,
      borderRadius: 5,
      color: 'white',
      fontSize: 18,
      padding: 9,
      width: 40,
      height: 45,
   },
});
