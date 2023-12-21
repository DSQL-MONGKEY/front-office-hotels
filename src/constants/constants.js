/* eslint-disable prettier/prettier */
import {compactRoom, compactRoom2, compactRoom3, deluxeRoom, deluxeRoom2, deluxeRoom3, familyRoom, familyRoom2, familyRoom3, suitesRoom, suitesRoom2, suitesRoom3, traveRoom, traveRoom2, traveRoom3, zenRoom, zenRoom2, zenRoom3} from '../assets';



const availableRoomId = [10, 13, 14, 15, 20, 25, 26, 29, 31, 33, 35, 37, 39, 40];

const roomList = [
   {
      id: 1,
      roomName: 'Family Room',
      imageBanner: familyRoom,
      images: [familyRoom2, familyRoom3],
   },
   {
      id: 2,
      roomName: 'Suites Room',
      imageBanner: suitesRoom,
      images: [suitesRoom2, suitesRoom3],
   },
   {
      id: 3,
      roomName: 'Deluxe Room',
      imageBanner: deluxeRoom,
      images: [deluxeRoom2, deluxeRoom3],
   },
   {
      id: 4,
      roomName: 'Compact Room',
      imageBanner: compactRoom,
      images: [compactRoom2, compactRoom3],
   },
   {
      id: 5,
      roomName: 'Zen Room',
      imageBanner: zenRoom,
      images: [zenRoom2, zenRoom3],
   },
   {
      id: 6,
      roomName: 'Trave Room',
      imageBanner: traveRoom,
      images: [traveRoom2, traveRoom3],
   },
];

export {
   roomList,
   availableRoomId,
};

