'use client';

import { Iproduct } from '@/types/products';
import MainCard from './MainCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SlideBtnLeft from './SlideBtnLeft';
import SlideBtnRight from './SlideBtnRight';

export default function PcCardList({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const SlidItemsTablet = ProductItems.map((item, i) => (
    <SwiperSlide key={i}>
      {/* 받아온 데이터로 카드 아이템 리스트를 만들어줍니다. */}
      <MainCard key={item._id} item={item}></MainCard>
    </SwiperSlide>
  ));

  return (
    <>
      <div className="py-6">
        <Swiper
          modules={[Navigation]}
          effect={'creative'}
          spaceBetween={24}
          speed={300}
          slidesPerView={4}
          navigation={{
            prevEl: `.prev-${btnId}`, // 이부분에 들어간 Class가 해당 슬라이드의 버튼
            nextEl: `.next-${btnId}`, // 이부분에 들어간 Class가 해당 슬라이드의 버튼
          }}>
          {/* 해당 데이터를 Swiper안에 넣어줍니다. */}
          {SlidItemsTablet}
        </Swiper>
      </div>
      <div className="z-10 text-right p-4">
        {/* 좌우 버튼 클래스를 각 버튼 컴포넌트로 전달 */}
        <SlideBtnLeft btnId={`prev-${btnId}`} />
        <SlideBtnRight btnId={`next-${btnId}`} />
      </div>
    </>
  );
}
