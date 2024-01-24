/* eslint-disable prettier/prettier */
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import Invoice from './Invoice';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import InputData from './InputData';
import { useGlobalState, useGuestDataStore } from '../../state';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FIREBASE_APP, FIREBASE_DB } from '../../../FirebaseConfig';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalBottom = () => {
   const snapPoints = useMemo(() => ['50%', '90%'], []);
   const bottomSheetRef = useRef(null);
   const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);

   const guestName = useGuestDataStore((state) => state.guestName);
   const email = useGuestDataStore((state) => state.email);
   const phoneNum = useGuestDataStore((state) => state.phoneNumber);
   const address = useGuestDataStore((state) => state.address);
   const roomType = useGuestDataStore((state) => state.roomType);
   const roomNumber = useGuestDataStore((state) => state.roomNumber);
   const deposit = useGuestDataStore((state) => state.deposit);
   const addServices = useGuestDataStore((state) => state.addServices);
   const date = useGuestDataStore((state) => state.date);
   const roomPrice = useGuestDataStore((state) => state.roomPrice);
   const cashAmount = useGuestDataStore((state) => state.cashAmount);

   const updateCashAmount = useGuestDataStore((state) => state.updateCashAmount);
   const updateIsConfirm = useGlobalState((state) => state.updateIsConfirm);


   const testdoc = async() => {
      await addDoc(collection(FIREBASE_DB, 'guests-data'), {
         guestName: guestName,
         email: email,
         phoneNumber: phoneNum,
         address: address,
         roomType: roomType,
         roomNumber: roomNumber,
         addServices: addServices,
         dateCheckin: serverTimestamp(),
         dateCheckout: date,
         deposit: deposit,
         roomPrice: roomPrice,
      });
   };
   const handlePress = () => {
      updateIsConfirm(false);
   };
   const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
   }, []);

   return (
      <BottomSheetModalProvider>
         <BottomSheet
         ref={bottomSheetRef}
         snapPoints={snapPoints}
         enableContentPanningGesture={false}
         handleIndicatorStyle={styles.indicator}
         backdropComponent={renderBackdrop}
         onChange={handleSheetChanges}
         >
         <BottomSheetScrollView>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons
                  name={'close-octagon-outline'} style={styles.closeIcon} onPress={handlePress} />
            </View>
            <View style={styles.contentContainer}>
                  <Invoice
                     guestName={guestName}
                     email={email}
                     phoneNum={phoneNum}
                     address={address}
                     roomType={roomType}
                     roomNumber={roomNumber}
                     deposit={deposit}
                     addServices={addServices}
                     date={date}
                     roomPrice={roomPrice}
                  />
                  <InputData
                     type={'cash'}
                     label={'Cash'}
                     placeholder={'Enter amount'}
                     onChangeEvent={updateCashAmount}
                  />
                  <Button
                     contentStyle={styles.button}
                     onPress={() => testdoc()}
                  >
                     <Text style={styles.buttonText}>Confirm</Text>
                  </Button>
               </View>
         </BottomSheetScrollView>
      </BottomSheet>
      </BottomSheetModalProvider>
   );
};

export default ModalBottom;

const styles = StyleSheet.create({
   contentContainer: {
      flex: 1,
      padding: 10,
      height: '100%',
   },
   textHeadline: {
      color: 'black',
      fontSize: 20,
   },
   button: {
      backgroundColor: '#86A7FC',
      marginHorizontal: 20,
      marginVertical: 10,
      height: 60,
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
   },
   buttonText: {
      fontSize: 20,
      padding: 50,
      fontFamily: 'Quicksand-Bold',
      color: 'white',
   },
   indicator: {
      borderRadius: 100,
      paddingHorizontal: 10,
   },
   iconContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'flex-end',
      paddingRight: 20,
   },
   closeIcon:{
      fontSize: 30,
      color: '#B6C4B6',
   },
});
