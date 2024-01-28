/* eslint-disable prettier/prettier */
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader/native';
import { Rect } from 'react-native-svg';

const SkeletonList = () => {
   return (
      <View>
      <Text><Facebook/></Text>
   </View>
   );
};

export default SkeletonList;

const styles = StyleSheet.create({});
