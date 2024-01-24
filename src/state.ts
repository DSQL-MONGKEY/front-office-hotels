/* eslint-disable prettier/prettier */
import { create } from 'zustand';

type State = {
   roomNumber: number,
   roomType: string,
   guestName: string,
   email: string,
   phoneNumber: string,
   address: string,
   deposit: number,
   addServices: string,
   date: string,
   roomPrice: number,
   cashAmount: string,
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
   updateCashAmount: (cashAmount: State['cashAmount']) => void,
   reset: () => void,
};

const initialState: State = {
   roomNumber: NaN,
   roomType: '',
   guestName: '',
   email: '',
   phoneNumber: '',
   address: '',
   deposit: NaN,
   addServices: '',
   date: '',
   roomPrice: NaN,
   cashAmount: '',
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
   updateCashAmount: (cashAmount) => set(() => (
      { cashAmount: cashAmount }
   )),
   reset: () => set(initialState),
}));

// Global state for conditional components
type GlobalState = {
   isConfirm: boolean,
   isLoading: boolean,

}
type GlobalStateAction = {
   updateIsConfirm: (isConfirm: GlobalState['isConfirm']) => void,
   updateIsLoading: (isLoading: GlobalState['isLoading']) => void,
}
const initialGlobalState: GlobalState = {
   isConfirm: false,
   isLoading: false,
};
export const useGlobalState = create<GlobalState & GlobalStateAction>((set) => ({
   ...initialGlobalState,
   updateIsConfirm: (isConfirm) => set(() => (
      { isConfirm: isConfirm }
   )),
   updateIsLoading: (isLoading) => set(() => (
      { isLoading: isLoading }
   )),
}));
