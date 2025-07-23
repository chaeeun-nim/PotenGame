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
  // 보여지는 제품 목록 상태
  const [viewGame, setViewGame] = useState(ProductItems.slice(0, 4));
  // 보여지는 제품 갯수 상태
  const [count, setCount] = useState(4);

  // 더보기 버튼을 누르면, 갯수상태가 +4
  function moreClick() {
    setCount((prev) => prev + 4);
  }

  useEffect(() => {
    const newViewGame = ProductItems.slice(0, count); // 카운트 갯수만큼 제품 데이터에서 viewGame을 count 만큼 복사
    setViewGame(newViewGame); // 보여지는 제품 목록 상태 변경
  }, [count, ProductItems]); // 해당 상태는 count갯수에 의존함.

  return (
    <>
      <div className="mb-[100px]">
        <div className="grid grid-cols-2 grid-rows-2  gap-4 mx-4 gap-y-12">
          {viewGame.map((item) => (
            <MainCard key={item._id} item={item}></MainCard>
          ))}
        </div>
        {/* count가 데이터에서 받아온 제품 목록 갯수와 같아지면 더보기 버튼 삭제 */}
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
