/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { availableRoomId } from '../constants/constants';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const RoomNumber = () => {
   return (
         <FlatList
            keyExtractor={item => item.id}
            data={availableRoomId}
            renderItem={({item}):any => <RenderItem item={item} />}
            horizontal
            style={styles.container}
         />
   );
};

const RenderItem = ({ item }): any => {
   const [selectedRoom, setSelectedRoom] = useState('');
   const [active, setActive] = useState(false);

   const handelSelect = () => {
      setSelectedRoom(item.id);
      setActive(true);
      if (active) {
         setSelectedRoom('');
         setActive(false);
      }
   };
   return (
      <View style={styles.itemContainer}>
         <Button
         style={
         [styles.itemContainer,
         {backgroundColor: item.status ? '#86A7FC' : '#FF2E63'},
         {backgroundColor: active ? 'black' : '#86A7FC'},
         ]}
         disabled={!item.status}
         onPress={handelSelect}
         >
         <Text style={[styles.text]}>{item.id}</Text>
      </Button>
      </View>
   );
};

export default RoomNumber;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
      padding: 5,
      borderRadius: 10,
      borderWidth:1,
      borderColor: '#7D5A50',
   },
   itemContainer: {
      flex: 1,
      paddingTop: 5,
      margin: 5,
      borderRadius: 10,
   },
   text: {
      color: 'white',
      fontSize: 18,
   },
});
