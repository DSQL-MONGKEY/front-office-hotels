/* eslint-disable prettier/prettier */
import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const Home = ({ navigation }: any) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Home SCREEM</Text>
         <Button title="Account" onPress={() => navigation.navigate('Account')} />
      </View>
   );
 };

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   text:{ color: '#163020' },
});

export default Home;
