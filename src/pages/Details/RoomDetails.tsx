/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputData from '../../components/room/InputData';
import RoomInfo from '../../components/room/RoomInfo';
import ImageCarousel from '../../components/room/ImageCarousel';
import RoomNumber from '../../components/room/RoomNumber';
import { Button, Divider } from 'react-native-paper';
import { useGuestDataStore } from '../../state';
import ModalBottom from '../../components/room/ModalBottom';

const RoomDetails = ({ route }: any) => {
   const [isConfirm, setIsConfirm] = useState(false);
   // Get data from navigation params
   const { qtyPerson, roomName, images, facility, price } = route.params;
   // Event Handler
   const handleRenderItem = ({ item }: any) => <ImageCarousel images={item} />;
   const handleConfirm = () => {
      setIsConfirm(true);
      if (isConfirm) {
         setIsConfirm(false);
      }
   };

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
            <Button contentStyle={styles.button} onPress={handleConfirm}>
               <Text style={styles.buttonText}>Confirm</Text>
            </Button>
         </ScrollView>
         {isConfirm &&
            <ModalBottom/>
         }
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
});
