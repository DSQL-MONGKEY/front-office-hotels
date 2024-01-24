/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputData from '../../components/room/InputData';
import RoomInfo from '../../components/room/RoomInfo';
import ImageCarousel from '../../components/room/ImageCarousel';
import RoomNumber from '../../components/room/RoomNumber';
import { Button, Divider } from 'react-native-paper';
import { useGlobalState, useGuestDataStore } from '../../state';
import ModalBottom from '../../components/room/ModalBottom';

const RoomDetails = ({ route }: any) => {
   // Get data from navigation params
   const { qtyPerson, roomName, images, facility, price } = route.params;

   //state event handler
   const updateGuestName = useGuestDataStore((state) => state.updateGuestName);
   const updateEmail = useGuestDataStore((state) => state.updateEmail);
   const updatePhoneNum = useGuestDataStore((state) => state.updatePhoneNumber);
   const updateAddress = useGuestDataStore((state) => state.updateAddress);
   const updateDeposit = useGuestDataStore((state) => state.updateDeposit);
   const updateAddServices = useGuestDataStore((state) => state.updateAddServices);
   const updateDate = useGuestDataStore((state) => state.updateDate);
   const updateIsConfirm = useGlobalState((state) => state.updateIsConfirm);
   const isConfirm = useGlobalState((state) => state.isConfirm);
   console.log(useGuestDataStore((state) => state));

   // Event Handler
   const handleRenderItem = ({ item }: any) => <ImageCarousel images={item} />;
   const handleConfirm = () => {
      updateIsConfirm(true);
      if (isConfirm) {
         updateIsConfirm(false);
      }
   };

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
                  onChangeEvent={updateGuestName}
                  />
               <InputData
                  type={'email'}
                  label={'Email'}
                  placeholder={'Enter email'}
                  onChangeEvent={updateEmail}
                  />
               <InputData
                  type={'tel'}
                  label={'Phone Number'}
                  placeholder={'Enter phone number'}
                  onChangeEvent={updatePhoneNum}
                  />
               <InputData
                  type={'services'}
                  label={'Address'}
                  placeholder={'Enter address'}
                  onChangeEvent={updateAddress}
                  />
               <InputData
                  type={'deposit'}
                  label={'Deposit'}
                  placeholder={'Enter deposit'}
                  onChangeEvent={updateDeposit}
                  />
               <InputData
                  label={'Additional Services'}
                  placeholder={'Enter services'}
                  onChangeEvent={updateAddServices}
                  />
               <InputData
                  type="date"
                  label={'Date'}
                  placeholder={'Enter date'}
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
