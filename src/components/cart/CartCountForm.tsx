'use client';
import { quantityCart } from '@/data/functions/quantityCart';
import useCartStore from '@/zustand/cartStore';
import useUserStore from '@/zustand/userStore';
import { useState } from 'react';

export default function CartCountForm({
  quantity,
  cartId,
  maxquaintity,
}: {
  quantity: number;
  cartId: number;
  maxquaintity: number;
}) {
  const [quantityState, setQuantityState] = useState(quantity);
  const { setCart, setCost } = useCartStore();
  const user = useUserStore((state) => state.user);

  const addHandle = async () => {
    if (quantityState < maxquaintity) {
      const newQuantity = quantityState + 1;
      setQuantityState(newQuantity);
      const res = await quantityCart(
        user?.token.accessToken as string,
        newQuantity,
        cartId,
      );
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    }
  };

  const minusHandle = async () => {
    if (quantityState > 1) {
      const newQuantity = quantityState - 1;
      setQuantityState(newQuantity);
      const res = await quantityCart(
        user?.token.accessToken as string,
        newQuantity,
        cartId,
      );
      if (res.ok) {
        setCart(res.item);
        setCost(res.cost);
      }
    }
  };

  return (
    <>
      <div className="flex gap-3 justify-end items-center xl:text-[20px]">
        <p className="text-poten-black">수량</p>
        <div className="border-2 flex border-poten-gray-1 text-poten-black-2 rounded-[4px] overflow-hidden">
          <button
            type="button"
            className="w-[32px] xl:w-[40px] font-bold border-r-2 border-poten-gray-1 disabled:text-poten-gray-1 cursor-pointer"
            disabled={quantityState <= 1 ? true : false}
            onClick={minusHandle}>
            -
          </button>
          <p className="w-[50px] text-center">{quantityState}</p>
          <button
            type="button"
            onClick={addHandle}
            disabled={quantityState >= maxquaintity ? true : false}
            className="w-[32px] xl:w-[40px] font-bold border-l-2 border-poten-gray-1 disabled:text-poten-gray-1 cursor-pointer">
            +
          </button>
        </div>
      </div>
    </>
  );
}
