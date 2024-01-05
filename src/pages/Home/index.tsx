/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { roomList } from '../../constants/constants';
import RoomList from '../../components/RoomList';
import Header from '../../components/Header';

const Home = ({ navigation }: any) => {
   return (
      <View style={styles.container}>
         <Header/>
         <FlatList
            data={roomList}
            keyExtractor={item => item.roomName}
            renderItem={({item}) => <RoomList id={item.id} roomName={item.roomName} imageBanner={item.imageBanner} images={item.images} qtyPerson={item.qtyPerson} navigation={navigation} />}
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
      paddingTop: StatusBar.currentHeight || 0,
      backgroundColor: '#89ADE2',
   },
   flatList: {
   },
});

export default Home;
