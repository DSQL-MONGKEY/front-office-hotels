/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useGuestDataStore } from '../../state';
import { Divider } from 'react-native-paper';
import Icon from '../Icon';

const Invoice = () => {
   const guestName = useGuestDataStore((state) => state.guestName);
   const email = useGuestDataStore((state) => state.email);
   const phoneNum = useGuestDataStore(state => state.phoneNumber);
   const address = useGuestDataStore(state => state.address);
   const roomType = useGuestDataStore((state) => state.roomType);
   const deposit = useGuestDataStore(state => state.deposit);
   const addServices = useGuestDataStore(state => state.addServices);
   const date = useGuestDataStore(state => state.date);
   console.log(guestName);

   return (
      <>
         <Text style={styles.headText}>Konfirmasi data dan pembayaran!</Text>
         <View style={styles.container}>
            <View>
               <Icon type={'text'} />
               <Text style={styles.textInvoice}>Inovoice</Text>
            </View>
            <Divider />
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Guest Name: </Text>
               <Text style={styles.text}>{guestName}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Email: </Text>
               <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Phone Number: </Text>
               <Text style={styles.text}>{phoneNum}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Address: </Text>
               <Text style={[styles.text, styles.wrap]}>{address}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Room Type: </Text>
               <Text style={styles.text}>{roomType}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Deposit: </Text>
               <Text style={styles.text}>Rp. {deposit}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Services+ : </Text>
            <Text style={[styles.text, styles.wrap]}>{addServices}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Date Checkout: </Text>
            <Text style={styles.text}>{date}</Text>
            </View>
         </View>
      </>
   );
};

export default Invoice;

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: 'auto',
      padding: 15,
      backgroundColor: '#DEFCFC',
      borderRadius: 10,
   },
   itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
   },
   textContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
   },
   headText: {
      fontSize: 18,
      color: 'green',
      fontFamily: 'Quicksand-Bold',
      marginVertical: 10,
   },
   textInvoice: {
      fontSize: 20,
      color: '#86A7FC',
      fontFamily: 'Poppins-Black',
   },
   text: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'Poppins-Medium',
   },
   wrap: {
      width: '70%',
   },
});
