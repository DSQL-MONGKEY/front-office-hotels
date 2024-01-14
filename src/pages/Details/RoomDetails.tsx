/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import InputData from '../../components/InputData';
import RoomInfo from '../../components/RoomInfo';
import ImageCarousel from '../../components/ImageCarousel';
import RoomNumber from '../../components/RoomNumber';
import { Divider } from 'react-native-paper';

const RoomDetails = ({ route }: any) => {
   // Get data from navigation params
   const { qtyPerson, roomName, images, facility, price } = route.params;
   // Event Handler
   const handleRenderItem = ({ item }: any) => <ImageCarousel images={item} />;

   return (
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
               placeholder={'Enter guest name'} />
            <InputData
               label={'Address'}
               placeholder={'Enter address'} />
            <InputData
               label={'Deposit'}
               placeholder={'Enter deposit'} />
            <InputData
               label={'Additional Services'}
               placeholder={'Enter services'} />
            <InputData
               type="date"
               label={'Additional Services'}
               placeholder={'Enter services'} />
         </View>
      </ScrollView>
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
