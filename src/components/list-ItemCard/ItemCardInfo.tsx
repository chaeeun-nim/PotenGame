'use client'
import Image from 'next/image';
import cart from '@/assets/icons/cart.svg';
import cartAdded from '@/assets/icons/addcart.svg';
import usedTag from '@/assets/icons/used-tag.svg';
import { useState } from 'react';
import ItemLikeBtn, { ItemLikeBtnProps } from '@/components/list-ItemCard/ItemLikeBtn';
// import newTag from '@/assets/icons/new-tag.svg'

//TODO 서버 데이터 도입, info 교체
export default function ItemCardInfo({ className }:{ className: ItemLikeBtnProps }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div className="flex flex-col justify-start flex-1 m-3">
      <div className="flex flex-row gap-1.5 text-[11px] md:text-sm xl:text-base">
        <div className="items-center flex flex-row gap-0.5 font-bold italic text-poten-usedorange">
          <Image src={usedTag} alt="new item" className="w-4 h-4" />
          S급 중고
        </div>
        <div>발매 25.06.05</div>
      </div>
      <div className="font-bold text-sm my-2 md:text-xl xl:text-[22px] line-clamp-1">
        젤다의 전설 야생의 숨결
      </div>
      <div className="mb-2">
        <div className="text-poten-gray-2 font-bold text-xs xl:text-[13px] line-through">
          1,000,000원
        </div>
        <div className="text-poten-nintendo font-bold">89,900원</div>
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={handleCartClick}
          className="items-center flex flex-row place-content-center sm:text-xs w-[95px] h-[26px] md:w-[152px] md:h-[28px] xl:w-[152px] xl:h-[32px] rounded-sm gap-1 bg-white">
          {isInCart ? '장바구니' : '담기'}
          <Image
            src={isInCart ? cartAdded : cart}
            alt={isInCart ? '장바구니에서 제거' : '장바구니에 추가'}
            className="w-5 h-5"
          />
        </button>

        <ItemLikeBtn className="w-5 h-5" />
      </div>
    </div>
  );
}
