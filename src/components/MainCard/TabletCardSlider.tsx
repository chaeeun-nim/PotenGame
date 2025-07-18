'use client';

import { Iproduct } from '@/types/products';
import MainCard from './MainCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function TabletCardSlider({ ProductItems }: { ProductItems: Iproduct[] }) {
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
          slidesPerView={3}
          navigation={{
            prevEl: '.my-prev',
            nextEl: '.my-next',
          }}>
          {SlidItemsTablet}
        </Swiper>
      </div>
      <button className="my-prev disabled:bg-amber-600 bg-black">왼쪽</button>
      <button className="my-next">오른쪽</button>
    </>
  );
}
