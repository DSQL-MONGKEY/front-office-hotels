/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-paper';
import Icon from '../Icon';

interface InvoiceProps {
   guestName: string,
   email: string,
   phoneNum: string,
   address: string,
   roomType: string,
   roomNumber: number,
   deposit: number,
   addServices: string,
   date: string,
   roomPrice: number,
}

const Invoice = ({ guestName, email, phoneNum, address, roomType, roomNumber, deposit, addServices, date, roomPrice }: InvoiceProps) => {

   return (
      <>
         <Text style={styles.headText}>Confirmation Data and Payment method!</Text>
         <View style={styles.container}>
            <View>
               <Icon type={'text'} />
               <Text style={styles.textInvoice}>Invoice</Text>
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
               <Text style={styles.text}>Room Number: </Text>
               <Text style={styles.text}>{roomNumber}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Services+ : </Text>
            <Text style={[styles.text, styles.wrap]}>{addServices}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Date Checkout: </Text>
            <Text style={styles.text}>{date}</Text>
            </View>
            <Divider horizontalInset style={styles.divider} />
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Deposit: </Text>
               <Text style={styles.text}>Rp. {deposit}</Text>
            </View>
            <View style={styles.itemContainer}>
               <Text style={styles.text}>Room Price: </Text>
               <Text style={styles.text}>Rp. {roomPrice}</Text>
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
      width: '100%',
   },
   textContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
   },
   headText: {
      fontSize: 30,
      textAlign: 'center',
      color: '#00AA13',
      fontFamily: 'Maison',
      marginVertical: 5,
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
      textAlign: 'right',
   },
   wrap: {
      width: '70%',
   },
   divider: {
      marginVertical: 10,
   },
});
