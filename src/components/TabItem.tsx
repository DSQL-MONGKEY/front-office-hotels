/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TabItem = ({ isFocused, onPress, onLongPress, label }: any) => {

   const styles = StyleSheet.create({
      container: { flex: 1 },
      text: { color: isFocused ? '#673ab7' : '#222' },
   });

   return (
      <TouchableOpacity
         onPress={onPress}
         onLongPress={onLongPress}
         style={styles.container}
      >
         <Text style={styles.text}>
            {label}
         </Text>
      </TouchableOpacity>
   );
};

export default TabItem;


