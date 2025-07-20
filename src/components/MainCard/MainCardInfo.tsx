'use client';

import { Iproduct } from '@/types/products';
import { isNewProducts } from './isNewProducts';
import { DateFormat } from './DateFormat';
import UsedTag from './UsedTag';
import NewTag from './NewTag';
import Link from 'next/link';
import noLikeIcon from '@/assets/icons/heart-gray.svg';
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';

import CartBtn from './CartBtn';
import ItemLikeBtn from '../list-ItemCard/ItemLikeBtn';

export default function MainCardInfo({ item }: { item: Iproduct }) {
  const [releaseDate, setReleaseDate] = useState('');

  const [Tags, setTags] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setReleaseDate(DateFormat(item.extra.releaseDate));
    const isNew = isNewProducts(item.extra.releaseDate);

    if (item.extra.used) {
      setTags(<UsedTag />);
    } else if (isNew) {
      setTags(<NewTag />);
    } else {
      setTags(null);
    }
  }, [item.extra.used, item.extra.releaseDate]);

  return (
    <>
      <div className="py-1 leading-[150%] ">
        <Link href={`/list/${item._id}`} className=" mb- flex flex-col p-0.5 md:p-2">
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
          <CartBtn ItemId={item._id} />
          <ItemLikeBtn className={`w-[30px] h-[30px]`} />
        </div>
      </div>
    </>
  );
}
