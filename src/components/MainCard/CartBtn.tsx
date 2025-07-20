'use client';

import { addCart } from '@/data/actions/addCart';
import cart from '@/assets/icons/cart.svg';
import cartAdded from '@/assets/icons/addcart.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function CartBtn({ ItemId }: { ItemId: number }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleAddCart = (event: React.FormEvent<HTMLFormElement>) => {
    setIsInCart(!isInCart);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    addCart(formData);
  };
  //  w-[100px] h-[32px] md:w-[160px]  xl:w-[200px] md:h-[36px]
  return (
    <>
      <form onSubmit={handleAddCart} className="flex-1 ">
        <input type="number" name="quantity" className="hidden" defaultValue={1} />
        <input type="number" name="product_id" className="hidden" defaultValue={ItemId} />
        <button
          type="submit"
          className={`items-center flex flex-row place-content-center w-full h-[32px]
          bg-white  rounded-sm gap-1 border-1 border-poten-gray-1  ${!isInCart ? 'border-poten-gray-1' : ''}`}>
          <span
            className={`text-[18px] font-medium ${!isInCart ? 'text-poten-gray-2' : 'text-poten-gray3'}`}>
            {isInCart ? '장바구니' : '담기'}
          </span>
          <Image
            src={isInCart ? cartAdded : cart}
            alt={isInCart ? '장바구니에서 제거' : '장바구니에 추가'}
            width={30}
            height={30}
            className="w-5 h-5"
            style={
              !isInCart
                ? {
                    filter:
                      'brightness(0) saturate(100%) invert(69%) sepia(6%) saturate(365%) hue-rotate(181deg) brightness(92%) contrast(86%)',
                  }
                : {}
            }
          />
        </button>
      </form>
    </>
  );
}
