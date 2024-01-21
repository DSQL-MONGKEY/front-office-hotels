/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjqsu4m_fI1RcB5Q5GS3FmqmYvH_vC56I',
  authDomain: 'frontofficeapp-2d6d3.firebaseapp.com',
  projectId: 'frontofficeapp-2d6d3',
  storageBucket: 'frontofficeapp-2d6d3.appspot.com',
  messagingSenderId: '85579867609',
  appId: '1:85579867609:web:9c3c612b303dac81aae5c8',
  measurementId: 'G-ZF7WNB33C5',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

