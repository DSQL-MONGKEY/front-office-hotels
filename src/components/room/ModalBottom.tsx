/* eslint-disable prettier/prettier */
import React, { useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScrollView, StyleSheet, View } from 'react-native';
import Invoice from './Invoice';
import { Button } from 'react-native-paper';
import { Text } from 'react-native';
import InputData from './InputData';
import { useGuestDataStore } from '../../state';

const ModalBottom = () => {
   const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);
   const bottomSheetRef = useRef(null);

   const cashAmount = useGuestDataStore((state) => state.cashAmount);
   const updateCashAmount = useGuestDataStore((state) => state.updateCashAmount);

   return (
      <BottomSheet
         ref={bottomSheetRef}
         snapPoints={snapPoints}

      >
         <ScrollView>
            <View style={styles.contentContainer}>
               <Invoice />
               <InputData
                  type={'cash'}
                  label={'Cash'}
                  placeholder={'Enter amount'}
                  value={cashAmount}
                  onChangeEvent={updateCashAmount}
               />
               <Button contentStyle={styles.button} onPress={() => {}}>
                     <Text style={styles.buttonText}>Confirm</Text>
               </Button>
            </View>
         </ScrollView>
      </BottomSheet>
   );
};

export default ModalBottom;

const styles = StyleSheet.create({
   contentContainer: {
      flex: 1,
      padding: 10,
      height: '100%',
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
