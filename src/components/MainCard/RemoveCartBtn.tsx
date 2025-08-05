'use client';

import Image from 'next/image';
import removeCartIcon from '@/assets/icons/addcart.svg';

import useCartStore from '@/zustand/cartStore';
import { removeCart } from '@/data/functions/removeCart';
import { useState } from 'react';
import LoadingRing from './LoadingRing';
import useUserStore from '@/zustand/userStore';

export default function RemoveCartBtn({ ItemId }: { ItemId: number }) {
  const { cart, setCart, setCost } = useCartStore();
  const { user } = useUserStore();
  const cartBasket = cart.find((item) => item.product._id === ItemId);
  const [isLoading, setLoading] = useState(false);

  async function removeHandle() {
    if (cartBasket?._id) {
      setLoading(true);
      const res = await removeCart(user?.token.accessToken as string, cartBasket._id);
      setLoading(false);
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    }
  }

  return (
    <>
      <button
        onClick={removeHandle}
        className="flex items-center w-[100px] md:w-[150px] xl:w-[200px] font-medium text-[16px] md:text-[18px] xl:text-[20px] text-poten-gray3  flex-row place-content-center  h-[32px] xl:h-[36px] bg-white  rounded-sm gap-1 border-1 border-poten-gray-1"
        disabled={isLoading}
        type="button">
        {isLoading ? (
          <LoadingRing />
        ) : (
          <>
            장바구니
            <Image
              className="xl:w-[20px]"
              src={removeCartIcon}
              alt="장바구니에 있음"
              width={18}
              height={18}
            />
          </>
        )}
      </button>
    </>
  );
}
