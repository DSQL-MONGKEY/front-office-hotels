/* eslint-disable prettier/prettier */
import {compactRoom, compactRoom2, compactRoom3, deluxeRoom, deluxeRoom2, deluxeRoom3, familyRoom, familyRoom2, familyRoom3, suitesRoom, suitesRoom2, suitesRoom3, traveRoom, traveRoom2, traveRoom3, zenRoom, zenRoom2, zenRoom3} from '../assets';



const availableRoomId = [
   {id: '10', status: true},
   {id: '13', status: true},
   {id: '14', status: true},
   {id: '15', status: true},
   {id: '20', status: true},
   {id: '25', status: true},
   {id: '27', status: true},
   {id: '29', status: true},
   {id: '30', status: true},
   {id: '31', status: true},
   {id: '32', status: true},
   {id: '34', status: true},
   {id: '36', status: true},
];

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
      price: '3.500.000',
      facility: ['4 Bedroom', '2 King Bed', '2 Deluxe Bed', '4 Bathroom', 'Premiere TV', 'Netflix', 'Breakfast', 'Launch Voucher', 'Morning Tea'],
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
      price: '2.500.000',
      facility: ['3 Bedroom', '2 Queen Bed', '1 Deluxe Bed', '2 Bathroom', 'Disney+', 'Netflix', 'Breakfast', 'Launch Voucher'],
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
      price: '1.850.000',
      facility: ['3 Bedroom', '3 Deluxe Bed', '2 Bathroom', 'Netflix', 'Morning Tea', 'Launch Voucher'],
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
      price: '850.000',
      facility: ['2 Bedroom', '2 Bed', '2 Bathroom', 'Netflix', 'Morning Snack', 'Launch Voucher'],
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
      price: '1.200.000',
      qtyPerson: 4,
      facility: ['1 Bedroom', '2 Bed', '1 Bathroom', 'Morning tea', 'Breakfast'],
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
      price: '380.000',
      qtyPerson: 2,
      facility: ['1 Bedroom', '2 Bed', '1 Bathroom', 'Morning tea', 'snacks'],
   },
];

export {
   roomList,
   availableRoomId,
};

