/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }: any) => {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text style={{ color: '#163020' }}>Home SCREEM</Text>
         <Button title="Coba" onPress={() => navigation.navigate('coba')} />
      </View>
   );
 };

export default Home;
