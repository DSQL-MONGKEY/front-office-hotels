/* eslint-disable prettier/prettier */
import React, { useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import Invoice from './Invoice';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';

const ModalBottom = () => {
   const snapPoints = useMemo(() => ['25%', '50%', '85%'], []);
   const bottomSheetRef = useRef(null);

   return (
      <BottomSheet
         ref={bottomSheetRef}
         snapPoints={snapPoints}
      >
         <View style={styles.contentContainer}>
            <Invoice />
            <Button contentStyle={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Confirm</Text>
            </Button>
         </View>
      </BottomSheet>
   );
};

export default ModalBottom;

const styles = StyleSheet.create({
   contentContainer: {
      flex: 1,
      padding: 10,
   },
   textHeadline: {
      color: 'black',
      fontSize: 20,
   },
   button: {
      backgroundColor: '#86A7FC',
      marginHorizontal: 20,
      marginVertical: 10,
      height: 60,
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
   },
   buttonText: {
      fontSize: 20,
      padding: 50,
      fontFamily: 'Quicksand-Bold',
      color: 'white',
   },
});
