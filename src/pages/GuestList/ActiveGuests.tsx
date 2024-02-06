/* eslint-disable prettier/prettier */
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SkeletonList from '../../components/SkeletonList';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal';


const ActiveGuests = () => {
   const [guests, setGuests] = useState<any>([]);
   const bottomSheetRef = useRef<BottomSheetModal>(null);

   useEffect(() => {
      const guestListRef = collection(FIREBASE_DB, 'guests-data');
      const qStore = query(guestListRef, orderBy('dateCheckin', 'desc'));
      const subscriber = onSnapshot(qStore, {
         next: (snapshot) => {
            const guest: object[] = [];
            snapshot.docs.forEach((doc) => {
               guest.push({
                  id: doc.id,
                  ...doc.data(),
               });
            });
            setGuests(guest);
         },
      });
      return () => subscriber();
   }, []);

   const renderItem = ({ item }: any) => {
      return (
         <TouchableOpacity>
            {!item.done &&
               <View key={item.id} style={styles.cardContainer}>
                  <View style={styles.roomType}>
                     <Text style={styles.roomText}>{item.roomType}</Text>
                     <Text style={styles.roomText}>{item.roomNumber}</Text>
                  </View>
                  <View style={styles.roomInfoContainer}>
                     <View style={styles.innerContainer}>
                        <Ionicons
                           name={'person-circle-outline'}
                           style={styles.icon}
                        />
                        <Text style={[styles.text, styles.guestName]}>
                           {item.guestName}
                        </Text>
                     </View>
                     <View style={styles.innerContainer}>
                        <Ionicons name={'timer'} style={styles.timeIcon} />
                        <Text style={styles.text}>
                           {item.dateCheckin} - {item.dateCheckout}
                        </Text>
                     </View>
                  </View>
               </View>
            }
         </TouchableOpacity>
      );
   };

   return (
      <View>
            <FlatList
               data={guests}
               renderItem={renderItem}
               style={styles.flatList}
               keyExtractor={(item) => item.id}
               showsVerticalScrollIndicator={false}
               ListEmptyComponent={<SkeletonList/>}
            />
         <CustomBottomSheetModal ref={bottomSheetRef} />
      </View>
   );
};

export default ActiveGuests;

const styles = StyleSheet.create({
   container: {
      flex: 2,
      paddingHorizontal: 16,
      height: '100%',
      marginTop: StatusBar.currentHeight,
      marginBottom: 10,
      gap: 5,
   },
   cardContainer: {
      backgroundColor: '#7BD3EA',
      borderRadius: 10,
      marginBottom: 20,
   },
   flatList: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      height: 'auto',
      borderRadius: 10,
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
   roomInfoContainer: {
      margin: 4,
   },
   innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   roomText: {
      color: 'white',
      fontFamily: 'Quicksand-Bold',
      fontSize: 15,
   },
   headText: {
      color: 'black',
      fontFamily: 'Maison',
      fontSize: 24,
      textAlign: 'center',
   },
   text: {
      color: 'black',
      fontFamily: 'Maison',
   },
   guestName: {
      fontSize: 20,
   },
   icon: {
      color: 'white',
      fontSize: 35,
   },
   timeIcon: {
      fontSize: 20,
      color: 'white',
   },
   emptyContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   emptyImage: {
      width: 140,
      height: 90,
   },
   emptyText: {
      fontSize: 16,
      fontFamily: 'Maison',
      color: '#86A7FC',
   },
});
