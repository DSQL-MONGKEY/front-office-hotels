/* eslint-disable prettier/prettier */
import { create } from 'zustand';

type State = {
   roomNumber: string,
   roomType: string,
   guestName: string,
   email: string,
   phoneNumber: string,
   address: string,
   deposit: string,
   addServices: string,
   date: string,
   roomPrice: string,
};

type Action = {
   updateRoomNumber: (roomNumber: State['roomNumber']) => void,
   updateRoomType: (roomType: State['roomType']) => void,
   updateGuestName: (guestName: State['guestName']) => void,
   updateEmail: (email: State['email']) => void,
   updatePhoneNumber: (phoneNum: State['phoneNumber']) => void,
   updateAddress: (guestName: State['address']) => void,
   updateDeposit: (guestName: State['deposit']) => void,
   updateAddServices: (guestName: State['addServices']) => void,
   updateDate: (date: State['date']) => void
   updateRoomPrice: (roomPrice: State['roomPrice']) => void,
   reset: () => void,
};

const initialState: State = {
   roomNumber: '',
   roomType: '',
   guestName: '',
   email: '',
   phoneNumber: '',
   address: '',
   deposit: '',
   addServices: '',
   date: '',
   roomPrice: '',
};

export const useGuestDataStore = create<State & Action>((set) => ({
   ...initialState,
   updateRoomNumber: (roomNumber) => set(() => (
      { roomNumber: roomNumber }
   )),
   updateRoomType: (roomType) => set(() => (
      { roomType: roomType }
   )),
   updateGuestName: (guestName) => set(() => (
      { guestName: guestName }
   )),
   updateEmail: (email) => set(() => (
      { email: email }
   )),
   updatePhoneNumber: (phoneNum) => set(() => (
      { phoneNumber: phoneNum }
   )),
   updateAddress: (address) => set(() => (
      { address: address }
   )),
   updateDeposit: (deposit) => set(() => (
      { deposit: deposit }
   )),
   updateAddServices: (services) => set(() => (
      { addServices: services }
   )),
   updateDate: (date) => set(() => (
      { date: date }
   )),
   updateRoomPrice: (roomPrice) => set(() => (
      { roomPrice: roomPrice }
   )),
   reset: () => set(initialState),
}));

type RoomState = {
   id: string,
   status: boolean
}
type RoomAction = {
   updateStatus: (status: RoomState['status']) => void
}


export const useRoomNumber = create<RoomState & RoomAction>((set) => ({
   id: '',
   status: true,
   updateStatus: (status) => set(() => (
      { status: status }
   )),
}));

