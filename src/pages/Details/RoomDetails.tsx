/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import InputData from '../../components/InputData';
import RoomInfo from '../../components/RoomInfo';
import ImageCarousel from '../../components/ImageCarousel';

const RoomDetails = ({ navigation, route }: any) => {
   // Get data from navigation params
   const { qtyPerson, roomName, images } = route.params;
   // State image index
   const [activeIndex, setActiveIndex] = useState(0);
   const flatListRef = useRef(null);

   // Get window dimensions
   const {width} = useWindowDimensions();

   // Auto Scroll
   useEffect(() => {
      const interval = setInterval(() => {
         if (activeIndex === images.length - 1) {
            flatListRef.current.scrollToIndex({
               index: 0,
               animated: true,
            });
         } else {
            flatListRef.current.scrollToIndex({
               index: activeIndex + 1,
               animated: true,
            });
         }
      },3000);
      return () => clearInterval(interval);
   });

   // Event Handler
   const handleRenderItem = ({ item }: any) => <ImageCarousel images={item} />;
   const handleOnScroll = (event: any) => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const index = (scrollPosition / width).toFixed();
      console.log(index);
      setActiveIndex(parseInt(index, 10));
   };
   return (
      <ScrollView style={styles.container}>
         <FlatList
            data={images}
            keyExtractor={item => item.id}
            ref={flatListRef}
            renderItem={handleRenderItem}
            onScroll={handleOnScroll}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            />
         <RoomInfo qtyPerson={qtyPerson} />
         <View style={styles.inputContainer}>
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
         </View>
      </ScrollView>
   );
};

export default RoomDetails;

const styles = StyleSheet.create({
   container: {
      height: '100%',
      backgroundColor: '#4F6F52',
   },
   inputContainer: {
      backgroundColor: '#C499F3',
      padding: 20,
   },
});
