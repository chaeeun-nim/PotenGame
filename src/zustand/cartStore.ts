import { IcartCost, IcartItem } from '@/types/Cart';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  cart: IcartItem[];
  cost: IcartCost;
  setCart: (dataItems: IcartItem[]) => void;
  setCost: (IcartCost: IcartCost) => void;
};

/*
const useCartStore = create<Store>()((set) => ({
  cart: [],
  setCart: (dataItems: IcartItem[]) => {
    set({ cart: dataItems });
  },
})); */

const useCartStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      cost: {
        products: 0,
        shippingFees: 0,
        discount: { products: 0, shippingFees: 0 },
        total: 0,
      },
      setCart: (dataItems: IcartItem[]) => {
        set({ cart: dataItems });
      },
      setCost: (IcartCost: IcartCost) => {
        set({ cost: IcartCost });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCartStore;
