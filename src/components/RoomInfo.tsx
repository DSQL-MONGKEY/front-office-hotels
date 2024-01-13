/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Chip } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface roomInfoProps {
   qtyPerson: number,
   roomName: string,
   facility: [string],
   price: string,
}

const RoomInfo = ({ qtyPerson, roomName, facility, price }: roomInfoProps) => {
   return (
      <View style={styles.container}>
         <>
            <Text style={styles.infoTitle}>{roomName}</Text>
         </>
         <View style={styles.chipsContainer}>
            {facility.map((fac: string, idx: number) => (
               <Chip key={idx} style={styles.chip} mode="outlined" >
                  <Text style={styles.text}>{fac}</Text>
               </Chip>
            ))}
         </View>
         <View style={styles.infoDescContainer}>
            <Text style={styles.descText}>
               <MaterialCommunityIcons
                  name="account-supervisor-outline"
                  style={styles.icon}
               /> {qtyPerson}
            </Text>
            <Text style={styles.descText}>
               <MaterialCommunityIcons name="cash" style={styles.icon} />
               Rp. {price}
            </Text>
            <Text style={styles.descText}>
               <Ionicons name="checkmark-done" style={styles.icon} />
               Checked
            </Text>
         </View>
         <Text style={styles.textRules}>
         Verification:
            Verify the guest's identity by asking for a valid ID or passport.
            Cross-check the guest's information with the reservation details.
         </Text>
         <Text style={styles.textRules}>
         Confirmation of Stay:
            Confirm the guest's reservation details, including the check-in and check-out dates.
            Ensure any special requests or preferences are noted.
         </Text>
      </View>
   );
};

export default RoomInfo;

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: 'auto',
      flex: 3,
      gap: 5,
      padding: 10,
      flexDirection: 'column',
   },
   infoContainerTitle: {
      flex: 2,
   },
   infoTitle: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 25,
      color: 'black',
   },
   chipsContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
   },
   chip: {
      backgroundColor: 'white',
   },
   infoDescContainer: {
      flex: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#86A7FC',
   },
   descText: {
      fontFamily: 'Quicksand-Bold',
      fontSize: 15,
      color: '#ffffff',
   },


   text: {
      fontSize: 15,
      color: '#86A7FC',
      fontFamily: 'Quicksand-Bold',
   },
   textRules: {
      fontSize: 15,
      color: '#86A7FC',
      fontFamily: 'Quicksand-Bold',
      paddingHorizontal: 10,
   },
   icon: {
      fontSize: 20,
   },
});
