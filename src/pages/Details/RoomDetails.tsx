/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import InputData from '../../components/InputData';
import RoomInfo from '../../components/RoomInfo';
import ImageCarousel from '../../components/ImageCarousel';
import RoomNumber from '../../components/RoomNumber';
import { Divider } from 'react-native-paper';
import { useGuestDataStore } from '../../state';
import BottomSheet from '../../components/BottomSheet';

const RoomDetails = ({ route }: any) => {
   // Get data from navigation params
   const { qtyPerson, roomName, images, facility, price } = route.params;
   // Event Handler
   const handleRenderItem = ({ item }: any) => <ImageCarousel images={item} />;

   //state event handler
   const guestName = useGuestDataStore((state) => state.guestName);
   const updateGuestName = useGuestDataStore((state) => state.updateGuestName);

   const email = useGuestDataStore((state) => state.email);
   const updateEmail = useGuestDataStore((state) => state.updateEmail);

   const phoneNum = useGuestDataStore(state => state.phoneNumber);
   const updatePhoneNum = useGuestDataStore(state => state.updatePhoneNumber);

   const address = useGuestDataStore(state => state.address);
   const updateAddress = useGuestDataStore(state => state.updateAddress);

   const deposit = useGuestDataStore(state => state.deposit);
   const updateDeposit = useGuestDataStore(state => state.updateDeposit);

   const addServices = useGuestDataStore(state => state.addServices);
   const updateAddServices = useGuestDataStore(state => state.updateAddServices);

   const date = useGuestDataStore(state => state.date);
   const updateDate = useGuestDataStore(state => state.updateDate);

   console.log(useGuestDataStore(state => state));

   return (
      <>
      <ScrollView style={styles.container}>
         <View style={styles.carouselContainer}>
            <FlatList
               data={images}
               keyExtractor={item => item.id}
               renderItem={handleRenderItem}
               horizontal={true}
               pagingEnabled={true}
               showsHorizontalScrollIndicator={false}
               />
         </View>
         <RoomInfo qtyPerson={qtyPerson} roomName={roomName}
         facility={facility} price={price} />
         <Divider horizontalInset />
         <View style={styles.innerContainer}>
            <RoomNumber/>
         </View>
         <View style={styles.innerContainer}>
            <InputData
               label={'Guest Name'}
               placeholder={'Enter guest name'}
               value={guestName}
               onChangeEvent={(e) => updateGuestName(e)}
               />
            <InputData
               type={'email'}
               label={'Email'}
               placeholder={'Enter email'}
               value={email}
               onChangeEvent={updateEmail}
               />
            <InputData
               type={'tel'}
               label={'Phone Number'}
               placeholder={'Enter phone number'}
               value={phoneNum}
               onChangeEvent={updatePhoneNum}
               />
            <InputData
               type={'services'}
               label={'Address'}
               placeholder={'Enter address'}
               value={address}
               onChangeEvent={updateAddress}
               />
            <InputData
               type={'deposit'}
               label={'Deposit'}
               placeholder={'Enter deposit'}
               value={deposit}
               onChangeEvent={updateDeposit}
               />
            <InputData
               label={'Additional Services'}
               placeholder={'Enter services'}
               value={addServices}
               onChangeEvent={updateAddServices}
               />
            <InputData
               type="date"
               label={'Date'}
               placeholder={'Enter date'}
               value={date}
               onChangeEvent={updateDate}
               />
         </View>
      <BottomSheet/>
      </ScrollView>
      </>
   );
};

export default RoomDetails;

const styles = StyleSheet.create({
   container: {
      height: '100%',
   },
   innerContainer: {
      padding: 20,
      gap: 10,
   },
   carouselContainer: {
      backgroundColor: 'white',
   },

   textInput: {
      borderRadius: 20,
   },
});
