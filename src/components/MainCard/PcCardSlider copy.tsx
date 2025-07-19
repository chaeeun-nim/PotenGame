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

export default function PcCardSlider({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const SlidItemsTablet = ProductItems.map((item, i) => (
    <SwiperSlide key={i}>
      <MainCard key={item._id} item={item}></MainCard>
    </SwiperSlide>
  ));

  return (
    <>
      <div className="py-6 px-[24px]">
        <Swiper
          modules={[Navigation]}
          effect={'creative'}
          spaceBetween={24}
          speed={300}
          slidesPerView={4}
          navigation={{
            prevEl: `.prev-${btnId}`,
            nextEl: `.next-${btnId}`,
          }}>
          {SlidItemsTablet}
        </Swiper>
      </div>
      <div className="z-10 text-right p-4">
        <SlideBtnLeft btnId={`prev-${btnId}`} />
        <SlideBtnRight btnId={`next-${btnId}`} />
      </div>
    </>
  );
}
