import { IcartCost, IcartItem } from '@/types/Cart';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  cart: IcartItem[];
  cost: IcartCost;
  setCart: (dataItems: IcartItem[]) => void;
  setCost: (IcartCost: IcartCost) => void;
  resetCartStore: () => void;
};

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
      resetCartStore: () => {
        set({ cart: [] });
        set({
          cost: {
            products: 0,
            shippingFees: 0,
            discount: { products: 0, shippingFees: 0 },
            total: 0,
          },
        });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);



export default useCartStore;
