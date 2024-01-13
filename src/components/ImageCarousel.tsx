/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const ImageCarousel = ({ images }: any) => {
   return (
      <View key={Math.random()} style={styles.container}>
         <Image source={images.image} style={styles.images} />
      </View>
   );
};

export default ImageCarousel;

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   images: {
      width: screenWidth,
      height: 200,
   },
});


