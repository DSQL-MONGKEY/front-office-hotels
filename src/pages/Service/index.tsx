/* eslint-disable prettier/prettier */
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import ServiceList from '../../components/content/ServiceList';

const Service = () => {
   const [services, setServices] = useState<any>([]);

   useEffect(() => {
      const serviceListRef = collection(FIREBASE_DB, 'services');
      const subscriber = onSnapshot(serviceListRef, {
         next: (snapshot) => {
            const service: object[] = [];
            snapshot.docs.forEach((doc) => {
               service.push({
                  id: doc.id,
                  ...doc.data(),
               });
            });
            setServices(service);
         },
      });
      return () => subscriber();
   },[]);

   return (
      <View style={styles.container}>
         <FlatList
            data={services}
            keyExtractor={(item, id) => String(id)}
            renderItem={({item}) => <ServiceList item={item} />}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

export default Service;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignContent: 'center',
      paddingHorizontal: 20,
   },
});
