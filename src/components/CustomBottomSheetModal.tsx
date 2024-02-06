/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, forwardRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';



export type Ref = BottomSheetModal;
const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
   const snapPoints = useMemo(() => ['50%', '85%'], []);
   return (
      <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
         <View style={styles.container}>
            <Text style={styles.containerHeadText}>TEST</Text>
         </View>
      </BottomSheetModal>
   );
});

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   containerHeadText: {
      color: 'black',
      fontSize: 20,
   },
});
