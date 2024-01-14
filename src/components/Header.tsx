/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
      <View>
         <Button>
            <Ionicons name="arrow-back-circle-outline" style={styles.backButton} /> Back
         </Button>
      </View>
   );
};

export default Header;

const styles = StyleSheet.create({
   backButton: {
      fontSize: 30,
   },
});
