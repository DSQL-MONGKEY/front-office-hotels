/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

// interface roomListProps {
// }

const RoomList = ({ id, roomName, imageBanner, images }: any ) => {

   return (
      <Card key={id} style={styles.card}>
            <Card.Title title={roomName} titleStyle={styles.text} />
         <Card.Cover source={imageBanner} />
      </Card>
   );
};

export default RoomList;

const styles = StyleSheet.create({
   card: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      gap: 10,
      margin: 10,
   },
   imageCard: {
      alignItems: 'center',
   },
   img: {
      height: 150,
      borderRadius: 10,
      borderEndEndRadius: 20,
   },

   text: {
      color: '#161A30',
   },
});
