import { create } from 'zustand';

type Store = {
  modal: boolean;
  closeModal: () => void;
};

const useModalStore = create<Store>()((set) => ({
  modal: true,
  closeModal: () => {
    set({ modal: false });
  },
}));

export default useModalStore;
