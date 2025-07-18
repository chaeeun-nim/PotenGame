'use client';

import { Iproduct } from '@/types/products';
import MainCard from './MainCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { dataArray } from './makeSliderArray';

export default function DefualtCardSlider({
  ProductItems,
  btnId,
}: {
  ProductItems: Iproduct[];
  btnId: string;
}) {
  const data = dataArray(ProductItems, 4);

  const SlidItems = data.map((group, i) => (
    <SwiperSlide key={i}>
      <ul className="grid grid-cols-2 grid-rows-2 xl:grid-rows-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
        {group.map((item) => (
          <MainCard key={item._id} item={item}></MainCard>
        ))}
      </ul>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        modules={[Navigation]}
        effect={'creative'}
        speed={700}
        navigation={{
          prevEl: `.prev-${btnId}`,
          nextEl: `.next-${btnId}`,
        }}
        loop={true}>
        {SlidItems}
      </Swiper>

      <button className={`prev-${btnId}`}>왼쪽</button>
      <button className={`next-${btnId}`}>오른쪽</button>
    </>
  );
}
