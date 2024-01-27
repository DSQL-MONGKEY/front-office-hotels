/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabItem = ({ isFocused, onPress, onLongPress, label }: any) => {

   const styles = StyleSheet.create({
      container: {
         alignItems: 'center',
      },
      text: {
         fontSize: 13,
         color: isFocused ? '#80B3FF' : '#C8C8C8',
      },
      icon: {
         color: isFocused ? '#80B3FF' : '#5F8670',
         fontSize: 20,
      },
   });

   const Icon:any = ({ style }: any) => {
      if (label === 'Home') {
         return (
            isFocused ?
            <AntDesign name="home" style={style} /> :
            <AntDesign name="home" style={style} />
         );
      }
      if (label === 'Guest list') {
         return (
            isFocused ?
            <MaterialCommunityIcons name="account-box-multiple-outline" style={style} /> :
            <MaterialCommunityIcons name="account-box-multiple-outline" style={style} />
         );
      }
      if (label === 'Services') {
         return (
            isFocused ?
            <MaterialCommunityIcons name="room-service-outline" style={style} /> :
            <MaterialCommunityIcons name="room-service-outline" style={style} />
         );
      }
      if (label === 'Account') {
         return (
            isFocused ?
            <MaterialCommunityIcons name="account-circle-outline" style={style} /> :
            <MaterialCommunityIcons name="account-circle-outline" style={style} />
         );
      }
   };

   return (
      <TouchableOpacity
         onPress={onPress}
         onLongPress={onLongPress}
         style={styles.container}
      >
         <Icon style={styles.icon} />
         <Text style={styles.text}>
            {label}
         </Text>
      </TouchableOpacity>
   );
};

export default TabItem;


