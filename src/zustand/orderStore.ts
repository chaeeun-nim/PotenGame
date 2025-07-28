import { Iorder } from '@/types/order';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  order: Iorder;
  setOrder: (dataItems: Iorder) => void;
  resetStore: () => void;
  updateOrder: (updater: (prev: Iorder) => Iorder) => void;
};

const useOrderSotre = create<Store>()(
  persist(
    (set) => ({
      order: {
        products: [],
        address: {
          addressNumber: 0,
          name: '',
          value: '',
        },
        extra: {
          parcelmemo: '',
        },
        payment: {
          card_name: '',
          pay_method: '',
          pg_type: '',
          success: true,
        },
      },
      setOrder: (dataItems: Iorder) => {
        set({ order: dataItems });
      },
      resetStore: () => {
        set({
          order: {
            products: [],
            address: {
              addressNumber: 0,
              name: '',
              value: '',
            },
            extra: {
              parcelmemo: '',
            },
            payment: {
              card_name: '',
              pay_method: '',
              pg_type: '',
              success: true,
            },
          },
        });
      },
      updateOrder: (updater) => {
        set((state) => ({
          order: updater(state.order),
        }));
      },
    }),
    {
      name: 'order-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useOrderSotre;
