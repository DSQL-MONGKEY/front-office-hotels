/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';

interface InputDataProps {
   label: React.ReactNode,
   placeholder: string,
}

const InputData = ({ label, placeholder }: InputDataProps) => {
   return (
      <>
         <Text>{label}</Text>
         <TextInput
            placeholder={placeholder}
            mode="outlined"
         />
      </>
   );
};

export default InputData;

const styles = StyleSheet.create({});
