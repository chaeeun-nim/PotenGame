import { IcartCost, IcartItem } from '@/types/Cart';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  paycart: IcartItem[];
  paycost: IcartCost;
  allselectBtn: boolean;
  setPayCart: (dataItems: IcartItem[]) => void;
  setPayCost: (IcartCost: IcartCost) => void;
  resetPayStore: () => void;
  setAllselectBtn: () => void;
  ItemSelectBtn: boolean[];
};

const usePayStore = create<Store>()(
  persist(
    (set) => ({
      paycart: [],
      ItemSelectBtn: [],
      allselectBtn: false,
      paycost: {
        products: 0,
        shippingFees: 0,
        discount: { products: 0, shippingFees: 0 },
        total: 0,
      },
      setPayCart: (dataItems: IcartItem[]) => {
        set({ paycart: dataItems });
      },
      setAllselectBtn: () => {
        set((state) => ({ allselectBtn: !state.allselectBtn }));
      },
      setPayCost: (IcartCost: IcartCost) => {
        set({ paycost: IcartCost });
      },
      resetPayStore: () => {
        set({ paycart: [] });
        set({
          paycost: {
            products: 0,
            shippingFees: 0,
            discount: { products: 0, shippingFees: 0 },
            total: 0,
          },
        });
      },
    }),
    {
      name: 'payCart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default usePayStore;
