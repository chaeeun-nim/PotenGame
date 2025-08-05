
import { create } from 'zustand';

type MyModalStore = {
  isAddressModalOpen: boolean;
  openAddressModal: () => void;
  closeAddressModal: () => void;
};

export const useMyModalStore = create<MyModalStore>((set) => ({
  isAddressModalOpen: false,
  openAddressModal: () => set({ isAddressModalOpen: true }),
  closeAddressModal: () => set({ isAddressModalOpen: false }),
}));
