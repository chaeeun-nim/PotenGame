'use client';

import { Iproduct } from '@/types/products';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MainCard from './MainCard';
import { useEffect, useState } from 'react';

export default function MobileCardList({
  ProductItems,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const [viewGame, setViewGame] = useState(ProductItems.slice(0, 4));
  const [count, setCount] = useState(4);

  function moreClick() {
    setCount((prev) => prev + 4);
  }
  useEffect(() => {
    const newViewGame = ProductItems.slice(0, count);
    setViewGame(newViewGame);
  }, [count, ProductItems]);

  return (
    <>
      <div className="mb-[100px]">
        <div className="grid grid-cols-2 grid-rows-2  gap-4 mx-4 gap-y-8">
          {viewGame.map((item) => (
            <MainCard key={item._id} item={item}></MainCard>
          ))}
        </div>
        {count < ProductItems.length && (
          <button
            className="mt-[30px] mb-[50px]  mx-auto block border-2 border-poten-red text-poten-red font-bold py-1 px-16 text-[20px] rounded-[500px]"
            onClick={moreClick}>
            더보기
          </button>
        )}
      </div>
    </>
  );
}
