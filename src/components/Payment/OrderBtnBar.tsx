'use client';

import { addOrder } from '@/data/functions/addOrder';
import { resetCart } from '@/data/functions/resetCart';
import useCartStore from '@/zustand/cartStore';
import useOrderSotre from '@/zustand/orderStore';
import useUserStore from '@/zustand/userStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OrderBtnBar() {
  const { order, resetStore } = useOrderSotre();
  const { cost, resetCartStore } = useCartStore();
  const [active, setActive] = useState(true);
  const { user } = useUserStore();
  const router = useRouter();
  const orderHandle = async () => {
    const res = await addOrder(user?.token.accessToken as string, order);
    if (res.ok) {
      resetStore();
      resetCartStore();
      await resetCart(user?.token.accessToken as string);
      router.push(`/payment/${res.item._id}`);
    }
  };
  useEffect(() => {
    if (order.payment.pay_method === '무통장 입금') {
      setActive(false);
    } else if (
      order.payment.pay_method === '신용카드' &&
      order.payment.card_num !== '' &&
      order.payment.card_name !== ''
    ) {
      setActive(false);
    } else if (
      order.payment.pay_method === '휴대폰 결제' &&
      order.payment.pay_phone_num !== ''
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [order]);

  return (
    <>
      <div
        className="fixed w-full  pb-2 md:pb-0  h-[80px] md:h-[80px] bg-black bottom-0 z-[999999999] flex
      justify-center items-center transform-none md:rounded-none">
        <div className="md:flex md:w-full justify-end  xl:max-w-[1200px] mx-auto md:px-8 xl:px-0">
          <button
            disabled={active}
            onClick={orderHandle}
            className="flex items-center justify-center font-bold text-[18px] rounded-[50px] md:rounded-none
            text-white shrink-0 bg-poten-red py-2 px-10 xl:px-16
            disabled:bg-poten-gray-2 cursor-pointer
            ">
            <span className="md:hidden pr-1">{cost.total?.toLocaleString()}원</span>
            결제하기
          </button>
        </div>
      </div>
    </>
  );
}
