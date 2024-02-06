/* eslint-disable prettier/prettier */
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import CustomBottomSheetModal from '../../components/CustomBottomSheetModal';
import { empty } from '../../assets';
import SkeletonList from '../../components/SkeletonList';

const InactiveGuests = () => {
   const [guests, setGuests] = useState<any>([]);
   const bottomSheetRef = useRef<BottomSheetModal>(null);

   useEffect(() => {
      const guestListRef = collection(FIREBASE_DB, 'guests-data');
      const q = query(guestListRef, orderBy('dateCheckin', 'desc'));
      const subscriber = onSnapshot(q, {
         next: (snapshot) => {
            const guest: any[] = [];
            snapshot.docs.forEach((doc) => {
               guest.push({
                  id: doc.id,
                  ...doc.data(),
               });
            });
            const filteredGuets = guest.filter((data) => data.done === true);
            setGuests(filteredGuets);
         },
      });
      return () => subscriber();
   }, []);

   const renderDoneItem = ({item}: any) => {
      return (
         <TouchableOpacity>
               <View key={item.id} style={styles.cardContainer}>
                  <View style={[styles.roomType, { backgroundColor: item.done && '#00AA13' }]}>
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
         </TouchableOpacity>
      );
   };
   return (
      <View>
         {guests.length > 0 ?
            (
               <FlatList
                  data={guests}
                  renderItem={renderDoneItem}
                  style={styles.flatList}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={<SkeletonList/>}
               />
            ) : (
               <View style={styles.emptyContainer}>
                  <Image source={empty} style={styles.emptyImage} />
                  <Text style={styles.emptyText}>
                     No Guests Yet
                  </Text>
               </View>
            )
         }
         <CustomBottomSheetModal ref={bottomSheetRef} />
      </View>
   );
};

export default InactiveGuests;

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
      backgroundColor: '#C3E2C2',
      borderRadius: 10,
      marginBottom: 20,
   },
   flatList: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      height: '100%',
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
