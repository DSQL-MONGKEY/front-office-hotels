/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useGuestDataStore } from '../../state';

interface RoomItemProps {
   id: string,
   status: boolean,
}

const RoomItem = ({ id, status }: RoomItemProps) => {
   const [active, setActive] = useState(false);
   const updateRoomNumber = useGuestDataStore((state) => state.updateRoomNumber);
   const room = useGuestDataStore((state) => state.roomNumber);
   console.log(room);

   const handleSelect = () => {
      setActive(true);
      updateRoomNumber(id);
      if (active) {
         setActive(false);
         updateRoomNumber('');
      }
   };
   return (
      <View style={styles.container}>
         <Text
            key={id}
            style={[styles.text,
               {backgroundColor: status ? '#86A7FC' : '#FF2E63'},
               {backgroundColor: active ? 'black' : '#86A7FC'},
            ]}
            onPress={handleSelect}
         >
            {id}
         </Text>
      </View>
   );
};

export default RoomItem;

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
