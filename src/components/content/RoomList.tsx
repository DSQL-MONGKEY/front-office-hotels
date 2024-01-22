/* eslint-disable prettier/prettier */
import { StyleSheet, Text} from 'react-native';
import React from 'react';
import { Card, TouchableRipple } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useGuestDataStore } from '../../state';

const RoomList = ({ id, roomName, imageBanner, images, facility, qtyPerson, price, navigation }: any ) => {

   const updateRoomType = useGuestDataStore((state) => state.updateRoomType);
   return (
      <SafeAreaView>
         <Card
            key={id}
            style={styles.card}
            onPress={() =>   {
               navigation.navigate('RoomDetails', {
                  roomName,
                  images,
                  facility,
                  qtyPerson,
                  price,
               });
               updateRoomType(roomName);
            }}>
            <TouchableRipple
               rippleColor="rgba(0, 0, 0, .32)"
            >
            <Card.Content style={styles.content}>
               <Text style={styles.title}>
                  {roomName}
               </Text>
               <Text style={styles.title}>
                  {qtyPerson}
                  <Ionicons
                     name="person-outline"
                     style={styles.icon} />
               </Text>
            </Card.Content>
            </TouchableRipple>
            <Card.Cover source={imageBanner} />
         </Card>
      </SafeAreaView>
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

   content: {
      flex:2,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   icon: {
      fontSize: 15,
   },

   title: {
      margin: 10,
      fontSize: 17,
      color: '#161A30',
      fontFamily: 'Poppins-Medium',
   },
});
