/* eslint-disable prettier/prettier */
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { Divider } from 'react-native-paper';

const GuestList = () => {
   const [guests, setGuests] = useState<any>([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      const guestListRef = collection(FIREBASE_DB, 'guests-data');
      const subscriber = onSnapshot(guestListRef, {
         next: (snapshot) => {
            const guest: any[] = [];
            snapshot.docs.forEach((doc) => {
               guest.push({
                  id: doc.id,
                  ...doc.data(),
               });
            });
            setGuests(guest);
         },
      });
      setIsLoading(false);
      return () => subscriber();
   }, []);

   console.log(guests);

   const renderItem = ({ item }: any) => {
      return (
         <>
            {!item.done &&
               <View key={item.id} style={styles.cardContainer}>
                  <View style={styles.roomType}>
                     <Text style={styles.roomText}>{item.roomType}</Text>
                     <Text style={styles.roomText}>{item.roomNumber}</Text>
                  </View>
                  <View style={styles.roomInfo}>
                     <Text style={[styles.text, styles.guestName]}>{item.guestName}</Text>
                     <Text style={styles.text}>
                        {item.dateCheckin} - {item.dateCheckout}
                     </Text>
                  </View>
               </View>
            }
         </>
      );
   };
   const renderDoneItem = ({item}: any) => {
      return (
         <>
            {item.done &&
               <View key={item.id} style={styles.cardContainer}>
                  <View style={styles.roomType}>
                     <Text style={styles.roomText}>{item.roomType}</Text>
                     <Text style={styles.roomText}>{item.roomNumber}</Text>
                  </View>
                  <View style={styles.roomInfo}>
                     <Text style={[styles.text, styles.guestName]}>{item.guestName}</Text>
                     <Text style={styles.text}>
                        {item.dateCheckin} - {item.dateCheckout}
                     </Text>
                  </View>
               </View>
            }
         </>
      );
   };

   return (
      <View style={styles.container}>
         {guests.length > 0 &&
            <FlatList
               data={guests}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
            />
         }
         <Divider/>
         {guests.length > 0 &&
            <FlatList
               data={guests}
               renderItem={renderDoneItem}
               keyExtractor={(item) => item.id}
            />
         }
      </View>
   );
};

export default GuestList;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      gap: 10,
   },
   cardContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 4,
      marginVertical: 8,
   },
   roomType: {
      flexDirection: 'row',
      backgroundColor: '#86A7FC',
      gap: 10,
      padding: 4,
      paddingLeft: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 20,
   },
   roomInfo: {
      margin: 4,
   },
   roomText: {
      color: 'white',
      fontFamily: 'Quicksand-Bold',
      fontSize: 15,
   },
   text: {
      color: 'black',
      fontFamily: 'Quicksand-Bold',
   },
   guestName: {
      fontSize: 20,
   },
});
