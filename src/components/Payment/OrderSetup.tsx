'use client';

import { Iorder } from '@/types/order';
import useCartStore from '@/zustand/cartStore';
import useOrderSotre from '@/zustand/orderStore';
import useUserStore from '@/zustand/userStore';
import { useEffect } from 'react';
import PayAddress from './PayAddress';

export default function OrderSetup() {
  const { user } = useUserStore();
  const { cart, cost } = useCartStore();
  const { updateOrder } = useOrderSotre();

  useEffect(() => {
    const productList = cart.map((item) => ({
      _id: item.product_id,
      quantity: item.quantity,
    }));

    updateOrder((prev: Iorder) => ({
      ...prev,
      products: productList,
      address: {
        addressNumber: user?.extra?.address[0].addressNumber || 0,
        name: user?.extra?.address[0].name || '',
        value: user?.extra?.address[0].value || '',
      },
    }));
  }, [user, cart, cost]);

  if (!user && !cart && !cost) return null;

  return (
    <>
      <h3
        className=" max-w-[894px] mx-auto w-full font-bold
      mt-[40px] mb-[16px] md:mt-[16px]  text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
        배송지
      </h3>
      <PayAddress />
    </>
  );
}
