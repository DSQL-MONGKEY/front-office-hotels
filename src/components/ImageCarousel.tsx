/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const ImageCarousel = ({ images }: any) => {
   return (
      <View>
         <Image source={images.image} style={styles.images} />
      </View>
   );
};

export default ImageCarousel;

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
   images: {
      width: screenWidth,
      height: 200,
   },
   dot: {
      backgroundColor: 'red',
      height: 10,
      width: 10,
      borderRadius: 5,
   },
});


