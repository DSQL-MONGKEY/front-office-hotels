/* eslint-disable prettier/prettier */
import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { roomList } from '../../constants/constants';
import RoomList from '../../components/content/RoomList';

const Home = ({ navigation }: any) => {
   return (
      <View style={styles.container}>
         <FlatList
            data={roomList}
            keyExtractor={item => item.roomName}
            renderItem={({item}) => (
               <RoomList id={item.id} roomName={item.roomName} imageBanner={item.imageBanner} images={item.images} facility={item.facility} qtyPerson={item.qtyPerson} price={item.price} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};


const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignContent: 'center',
      paddingHorizontal: 20,
   },
});

export default Home;
