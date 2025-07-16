'use client';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/components/MainSlider/MainSlider.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import visual1 from '@/assets/img/visual1-pc.jpg';
import visual2 from '@/assets/img/visual2-pc.jpg';
import visual3 from '@/assets/img/visual3-pc.jpg';
import visual4 from '@/assets/img/visual4-pc.jpg';
import visual5 from '@/assets/img/visual5-pc.jpg';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainSlider() {
  return (
    <>
      <Swiper
        className="!pb-[50px] !px-[16px]"
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        slidesPerView={'auto'}
        speed={800}
        breakpoints={{
          0: {
            spaceBetween: 16,
          },
          768: {
            spaceBetween: 20,
          },
          1200: {
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}>
        <SwiperSlide className="lg:!w-[1000px] md:!w-[80%] !w-full">
          <Image
            className="rounded"
            src={visual1}
            width={1920}
            height={1080}
            alt="비주얼이미지"
          />
        </SwiperSlide>
        <SwiperSlide className="lg:!w-[1000px] md:!w-[80%] !w-full ">
          <Image
            className="rounded"
            src={visual2}
            width={1920}
            height={1080}
            alt="비주얼이미지"
          />
        </SwiperSlide>
        <SwiperSlide className="lg:!w-[1000px] md:!w-[80%] !w-full">
          <Image
            className="rounded"
            src={visual3}
            width={1920}
            height={1080}
            alt="비주얼이미지"
          />
        </SwiperSlide>
        <SwiperSlide className="lg:!w-[1000px] md:!w-[80%] !w-full">
          <Image
            className=" rounded"
            src={visual4}
            width={1920}
            height={1080}
            alt="비주얼이미지"
          />
        </SwiperSlide>
        <SwiperSlide className="lg:!w-[1000px] md:!w-[80%] !w-full">
          <Image
            className=" rounded"
            src={visual5}
            width={1920}
            height={1080}
            alt="비주얼이미지"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
