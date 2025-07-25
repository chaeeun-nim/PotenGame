import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  viewModal: boolean;
  openViewModal: () => void;
  closeViewModal: () => void;
};

const useLoginModal = create<Store>()(
  persist(
    (set) => ({
      viewModal: false,
      openViewModal: () => {
        set({ viewModal: true });
      },
      closeViewModal: () => {
        set({ viewModal: false });
      },
    }),
    {
      name: 'viewModal',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useLoginModal;
