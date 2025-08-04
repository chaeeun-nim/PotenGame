'use client';

import plusIcon from '@/assets/icons/plusicon.svg';
import minusIcon from '@/assets/icons/minusicon.svg';
import equalIcon from '@/assets/icons/equalicon.svg';
import Image from 'next/image';
import useCartStore from '@/zustand/cartStore';

import { useRouter } from 'next/navigation';
import useOrderSotre from '@/zustand/orderStore';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

export default function PaymentBar() {
  const { cart, cost } = useCartStore();
  const { resetStore } = useOrderSotre();
  const [active, setActive] = useState(true);
  const countItem = cart.reduce((sum, next) => sum + next.quantity, 0);
  const router = useRouter();

  const payHandle = async () => {
    const res = await fetch('/api/can_payment', { method: 'POST' });
    const result = await res.json();

    if (result?.ok) {
      router.push('/payment');
      resetStore();
    } else {
      throw new Error('결제 진입 실패');
    }
  };

  useEffect(() => {
    const cartLength = cart.length === 0;
    const noItem = cart.some((item) => item.product.quantity <= item.product.buyQuantity);

    if (cartLength || noItem) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [cart]);

  return (
    <>
      <div
        className="fixed w-full pb-2  h-[80px] md:h-[100px] bg-black  bottom-0 z-[999999999] flex
      justify-center items-center transform-none md:rounded-none">
        <div className="md:flex md:w-full  xl:max-w-[1200px] mx-auto">
          <div className=" md:flex md:w-full  justify-between  leading-tight md:px-[24px] xl:px-[0]">
            <div className="hidden md:block text-white shrink-0">
              <p>선택상품금액</p>
              <p className="md:text-[20px] xl:text-[28px] font-bold">
                {cost.products?.toLocaleString() ?? 0}원
              </p>
            </div>
            <Image src={plusIcon} alt="더하기" className="w-auto hidden md:block" />
            <div className="hidden md:block text-white shrink-0">
              <p>배송비</p>
              <p className="md:text-[20px] xl:text-[28px] font-bold">
                {(cost.total ?? 0 > 50000) ? 0 : cost.shippingFees?.toLocaleString()}원
              </p>
            </div>
            <Image src={minusIcon} alt="빼기" className="w-auto hidden md:block" />
            <div className="hidden md:block text-white shrink-0">
              <p>단골할인</p>
              <p className="md:text-[20px] xl:text-[28px] font-bold">
                {(
                  (cost.discount.products ?? 0) + (cost.discount.shippingFees ?? 0)
                ).toLocaleString()}
                원
              </p>
            </div>
            <Image src={equalIcon} alt="결과" className="w-auto hidden md:block" />
            <div className="hidden md:block text-white shrink-0">
              <p>최종 결제금액</p>
              <p className="md:text-[20px] xl:text-[28px] font-bold text-[#FF0037]">
                {cost.total?.toLocaleString() ?? 0}원
              </p>
            </div>
            <button
              onClick={payHandle}
              disabled={active}
              className="flex items-center justify-center font-bold text-[18px] rounded-[50px] md:rounded-none
            text-white shrink-0 bg-poten-red py-2 px-10 xl:px-16
            disabled:bg-poten-gray-2 cursor-pointer
            ">
              <span className="md:hidden mr-1">
                {cost.products?.toLocaleString() ?? 0}원
              </span>
              결제하기
              <span
                className="text-poten-red md:hidden bg-white text-center w-8 h-8 rounded-4xl flex justify-center items-center
            text-[16px] ml-2">
                {countItem}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
