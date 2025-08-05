'use client';

import { Iorder } from '@/types/payorder';
import useCartStore from '@/zustand/cartStore';
import useOrderSotre from '@/zustand/orderStore';
import useUserStore from '@/zustand/userStore';
import { useEffect } from 'react';
import PayAddress from './PayAddress';
import OrderList from './OrderList';
import OrderPay from './OrderPay';
import OrderBtnBar from './OrderBtnBar';

export default function OrderSetup() {
  const { user } = useUserStore();
  const { cart, cost } = useCartStore();
  const { updateOrder } = useOrderSotre();

  useEffect(() => {
    const productList = cart.map((item) => ({
      _id: item.product_id,
      quantity: item.quantity,
    }));

    const firstAddress = user?.extra?.address?.[0];

    updateOrder((prev: Iorder) => ({
      ...prev,
      products: productList,
      address: {
        addressNumber: firstAddress?.addressNumber || 0,
        name: firstAddress?.name || '',
        value: firstAddress?.value || '',
      },
    }));
  }, [user, cart, cost]);

  if (!user && !cart && !cost) return null;
  if (!user) return null;

  return (
    <>
      <h3
        className=" xl:max-w-[894px] mx-auto w-full  font-bold mt-[40px] mb-[16px] md:mt-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
        배송지
      </h3>
      <PayAddress />

      <h3
        className=" xl:max-w-[894px] mx-auto w-full  font-bold xl:mt-[40px] md:mt-[36px] mt-[20px]  mb-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
        주문상품
      </h3>
      <OrderList />

      <h3
        className=" xl:max-w-[894px] mx-auto w-full  font-bold xl:mt-[40px] md:mt-[36px] mt-[20px]  mb-[16px] 
      text-[20px] md:text-[22px] pl-[16px] md:pl-[24px] xl:pl-[0px]">
        결제수단
      </h3>
      <OrderPay />
      <OrderBtnBar />
    </>
  );
}
