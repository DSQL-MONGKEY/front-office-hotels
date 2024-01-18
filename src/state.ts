/* eslint-disable prettier/prettier */
import { create } from 'zustand';

type State = {
   guestName: string,
   email: string,
   phoneNumber: string,
   address: string,
   deposit: string,
   addServices: string,
   date: string,
};

type Action = {
   updateGuestName: (guestName: State['guestName']) => void,
   updateEmail: (email: State['email']) => void,
   updatePhoneNumber: (phoneNum: State['phoneNumber']) => void,
   updateAddress: (guestName: State['address']) => void,
   updateDeposit: (guestName: State['deposit']) => void,
   updateAddServices: (guestName: State['addServices']) => void,
   updateDate: (date: State['date']) => void
};

export const useGuestDataStore = create<State & Action>((set) => ({
   guestName: '',
   email: '',
   phoneNumber: '',
   address: '',
   deposit: '',
   addServices: '',
   date: '',
   updateGuestName: (guestName) => set(() => ({ guestName: guestName })),
   updateEmail: (email) => set(() => ({ email: email })),
   updatePhoneNumber: (phoneNum) => set(() => ({ phoneNumber: phoneNum })),
   updateAddress: (address) => set(() => ({ address: address })),
   updateDeposit: (deposit) => set(() => ({ deposit: deposit })),
   updateAddServices: (services) => set(() => ({ addServices: services })),
   updateDate: (date) => set(() => ({ date: date })),
}));

