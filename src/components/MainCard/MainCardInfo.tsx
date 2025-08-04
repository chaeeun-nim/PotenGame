'use client';

import { Iproduct } from '@/types/products';
import { isNewProducts } from './isNewProducts';
import { DateFormat } from './DateFormat';
import UsedTag from './UsedTag';
import NewTag from './NewTag';
import Link from 'next/link';
import { JSX, useEffect, useState } from 'react';

import CartBtn from './CartBtn';
import LikeBtn from './LikeBtn';

export default function MainCardInfo({ item }: { item: Iproduct }) {
  const [releaseDate, setReleaseDate] = useState('');

  // 제품의 상태(중고, 신상)임을 판별하여 적절한 택을 달아주는 상태
  const [Tags, setTags] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setReleaseDate(DateFormat(item.extra.releaseDate)); //신상인지 아닌지 체크하는 함수. 현재 날짜를 기준으로 180일 이내 출시시 신상품
    const isNew = isNewProducts(item.extra.releaseDate); //신상이면 true 아니면 false

    if (item.extra.used) {
      // 중고품목 체크 조건문
      setTags(<UsedTag />); // 중고면 중고 택
    } else if (isNew) {
      setTags(<NewTag />); // 중고가 아니고 신상품이면 신상 택
    } else {
      setTags(null); // 둘중에 아무것도 아니면 택 없이
    }
  }, []); // eslint 경고 무시

  return (
    <>
      <div className="py-1 leading-[150%] ">
        <Link href={`/list/${item._id}`} className="flex flex-col p-0.5 md:p-2">
          <div className="flex flex-row gap-2  md:gap-4  items-center">
            {Tags}
            <p className="text-[12px] md:text-[16px] text-poten-gray-2">
              발매 {releaseDate}
            </p>
          </div>
          <p className="font-extrabold md:my-[8px] my-[2px] text-[18px] md:text-[20px] xl:text-[22px] text-poten-black line-clamp-1">
            {item.name}
          </p>
          <div className="tracking-tight leading-[120%] md:leading-[150%]">
            <p className=" font-bold text-poten-gray-2  text-[14px] xl:text-[16px]">
              <span className="sr-only">원가</span>
              <s>{item.extra.originalPrice.toLocaleString()}원</s>
            </p>
            <p className=" font-extrabold text-[18px] md:text-[22px] xl:text-[24px] text-poten-red">
              <span className="sr-only">최종 할인가</span>
              {item.price.toLocaleString()}원
            </p>
          </div>
        </Link>
        <div className="mt-[16px] w-full flex flex-row items-center justify-between gap-4">
          {/* 장바구니 담기버튼 */}
          <CartBtn ItemId={item._id} />
          {/* 찜하기 버튼 */}
          <LikeBtn productId={item._id} />
        </div>
      </div>
    </>
  );
}
