/* eslint-disable prettier/prettier */
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import React from 'react';
import { roomList } from '../../constants/constants';
import RoomList from '../../components/RoomList';

const Home = () => {
   return (
      <View style={styles.container}>
         <FlatList
            data={roomList}
            keyExtractor={item => item.roomName}
            renderItem={({item}) => <RoomList id={item.id} roomName={item.roomName} imageBanner={item.imageBanner} images={item.imageBanner} />}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};


const styles = StyleSheet.create({
   container:{
      flex: 1,
      padding:20 ,
      alignContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
   },
   text:{ color: '#163020' },
});

export default Home;
