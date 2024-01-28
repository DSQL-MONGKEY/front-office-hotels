/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useGuestDataStore } from '../../state';

interface RoomListProps {
   id: number,
   roomName: string,
   imageBanner: any,
   images: any,
   facility: string[],
   qtyPerson: number,
   price: number,
   navigation: any
}

const RoomList = ({ id, roomName, imageBanner, images, facility, qtyPerson, price, navigation }: RoomListProps ) => {

   const updateRoomPrice = useGuestDataStore((state) => state.updateRoomPrice);
   const updateRoomType = useGuestDataStore((state) => state.updateRoomType);
   const keyGenerator = () => '_' + id + Math.random().toString(36).substring(2, 9);

   return (
      <SafeAreaView>
         <Card
            key={keyGenerator()}
            style={styles.card}
            onPress={() =>   {
               navigation.navigate('RoomDetails', {
                  roomName,
                  images,
                  facility,
                  qtyPerson,
                  price,
               });
               updateRoomPrice(price);
               updateRoomType(roomName);
            }}>
            <TouchableOpacity>
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
            </TouchableOpacity>
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
