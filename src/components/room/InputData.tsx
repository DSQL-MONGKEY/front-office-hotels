/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useGuestDataStore } from '../../state';
interface InputDataProps {
   type?: string,
   label: React.ReactNode,
   placeholder: string,
   onChangeEvent: (e: any) => void
}

const InputData = ({ type, label, placeholder, onChangeEvent }: InputDataProps) => {
   const [dateValue] = useState(dayjs());
   const updateDateNow = useGuestDataStore((state) => state.updateDateNow);

   if (type === 'date') {
      return (
         <View style={styles.dateContainer}>
            <DateTimePicker
            value={dateValue}
            onValueChange={(date: any) => {
               onChangeEvent(date);
               updateDateNow(dateValue.format('YYYY-MM-DD HH:mm').toString());
            }}
            displayFullDays={true}
            headerTextStyle={styles.calenderTextStyles}
            calendarTextStyle={styles.calenderTextStyles}
            weekDaysTextStyle={styles.calenderTextStyles}
            headerButtonColor={'#86A7FC'}
            selectedItemColor={'#86A7FC'}
            locale={'id'}
            />
         </View>
      );
   }

   if (type === 'deposit') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'numeric'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               autoComplete={'cc-number'}
               />
         </View>
      );
   }
   if (type === 'cash') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'numeric'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               autoComplete={'cc-number'}
               />
         </View>
      );
   }
   if (type === 'email') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'email'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               autoComplete={'cc-number'}
               />
         </View>
      );
   }
   if (type === 'tel') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'tel'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               autoComplete={'cc-number'}
               maxLength={13}
               />
         </View>
      );
   }
   if (type === 'address') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'text'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               autoComplete={'address-line1'}
               />
         </View>
      );
   }
   if (type === 'services') {
      return (
         <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
               onChangeText={onChangeEvent}
               inputMode={'text'}
               placeholder={placeholder}
               autoCapitalize={'none'}
               style={[styles.contentStyle, styles.textInput]}
               allowFontScaling
               />
         </View>
      );
   }

   return (
      <View>
         <Text style={styles.label}>{label}</Text>
         <TextInput
            onChangeText={onChangeEvent}
            inputMode={'text'}
            placeholder={placeholder}
            autoCapitalize={'words'}
            style={[styles.contentStyle, styles.textInput]}
            allowFontScaling
         />
      </View>
   );
};

export default InputData;

const styles = StyleSheet.create({
   label: {
      fontSize: 20,
      color: '#000000',
      fontFamily: 'Maison',
   },
   textInput: {
      backgroundColor: '#f8f9fa',
      fontSize: 17,
   },
   contentStyle: {
      color: '#343a40',
      fontFamily: 'Quicksand-Bold',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
   },

   dateContainer: {
      backgroundColor: 'white',
      borderRadius: 20,
   },
   calenderTextStyles: {
      color: 'black',
   },
});
