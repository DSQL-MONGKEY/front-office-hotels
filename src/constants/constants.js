/* eslint-disable prettier/prettier */
import {compactRoom, compactRoom2, compactRoom3, deluxeRoom, deluxeRoom2, deluxeRoom3, familyRoom, familyRoom2, familyRoom3, suitesRoom, suitesRoom2, suitesRoom3, traveRoom, traveRoom2, traveRoom3, zenRoom, zenRoom2, zenRoom3} from '../assets';



const availableRoomId = [10, 13, 14, 15, 20, 25, 26, 29, 31, 33, 35, 37, 39, 40];

const roomList = [
   {
      id: 1,
      roomName: 'Family Room',
      imageBanner: familyRoom,
      images: [
         {
            id: 1,
            image: familyRoom,
         },
         {
            id: 2,
            image: familyRoom2,
         },
         {
            id: 3,
            image: familyRoom3,
         },
      ],
      qtyPerson: 15,
   },
   {
      id: 2,
      roomName: 'Suites Room',
      imageBanner: suitesRoom,
      images: [
         {
            id: 1,
            image: suitesRoom,
         },
         {
            id: 2,
            image: suitesRoom2,
         },
         {
            id: 3,
            image: suitesRoom3,
         },
      ],
      qtyPerson: 5,
   },
   {
      id: 3,
      roomName: 'Deluxe Room',
      imageBanner: deluxeRoom,
      images: [
         {
            id: 1,
            image: deluxeRoom,
         },
         {
            id: 2,
            image: deluxeRoom2,
         },
         {
            id: 1,
            image: deluxeRoom3,
         },
      ],
      qtyPerson: 10,
   },
   {
      id: 4,
      roomName: 'Compact Room',
      imageBanner: compactRoom,
      images: [
         {
            id: 1,
            image: compactRoom,
         },
         {
            id: 2,
            image: compactRoom2,
         },
         {
            id: 1,
            image: compactRoom3,
         },
      ],
      qtyPerson: 4,
   },
   {
      id: 5,
      roomName: 'Zen Room',
      imageBanner: zenRoom,
      images: [
         {
            id: 1,
            image: zenRoom,
         },
         {
            id: 2,
            image: zenRoom2,
         },
         {
            id: 3,
            image: zenRoom3,
         },
      ],
      qtyPerson: 4,
   },
   {
      id: 6,
      roomName: 'Trave Room',
      imageBanner: traveRoom,
      images: [
         {
            id: 1,
            image: traveRoom,
         },
         {
            id: 2,
            image: traveRoom2,
         },
         {
            id: 3,
            image: traveRoom3,
         },
      ],
      qtyPerson: 2,
   },
];

export {
   roomList,
   availableRoomId,
};

