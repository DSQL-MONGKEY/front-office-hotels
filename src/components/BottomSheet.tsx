/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const BottomSheet = () => {

   const translateY = useSharedValue(0);

   const gesture = Gesture.Pan().onUpdate((event) => {
      translateY.value = event.translationY;
   });
   const rBottomSheetContainer = useAnimatedStyle(() => {
      return {
         transform: [{ translateY: translateY.value }]
      };
   });


   return (
      <GestureDetector gesture={gesture}>
         <Animated.View style={[styles.BottomSheetContanier, rBottomSheetContainer]}>
            <View style={styles.line} />
         </Animated.View>
      </GestureDetector>
   );
};

export default BottomSheet;

const { height: SCREEN_HIGH } = Dimensions.get('window');
const styles = StyleSheet.create({
   BottomSheetContanier: {
      height: SCREEN_HIGH / 2 ,
      width: '100%',
      backgroundColor: 'white',
      top: 0,
      borderRadius: 25,
   },
   line: {
      width: 75,
      height: 4,
      marginVertical: 15,
      borderRadius: 2,
   },
});
