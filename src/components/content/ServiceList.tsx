/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ServiceList = ({ item }: any) => {
   return (
      <View>
         <Image source={item.link} />
      </View>
   );
};

export default ServiceList;

const styles = StyleSheet.create({

});
