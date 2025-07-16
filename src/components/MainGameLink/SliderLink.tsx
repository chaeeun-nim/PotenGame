'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import linkGame1 from '@/assets/img/01-switchlit.webp';
import linkGame2 from '@/assets/img/01-swtich.webp';
import linkGame3 from '@/assets/img/01-switch2.webp';
import linkGame4 from '@/assets/img/01-ps4.webp';
import linkGame5 from '@/assets/img/01-ps5.webp';
import Link from 'next/link';

export default function SliderLink() {
  return (
    <>
      <Swiper
        breakpoints={{
          0: {
            spaceBetween: 0,
          },
          768: {
            spaceBetween: 20,
          },
          1280: {
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        navigation={false}
        slidesPerView={'auto'}>
        <SwiperSlide className="!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[24px] xl:!ml-[0px]  ">
          <Link
            href="/"
            className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
            <Image
              className="md:rounded"
              src={linkGame1}
              width={800}
              height={800}
              alt="닌텐도 스위치 라이트"
            />
            <h3 className="text-[14px] text-center">Nintendo Switch Lite</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[12px] xl:!ml-[0px]  ">
          <Link
            href="/"
            className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
            <Image
              className="md:rounded"
              src={linkGame2}
              width={800}
              height={800}
              alt="닌텐도 스위치"
            />
            <h3 className="text-[14px] text-center">Nintendo Switch</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[12px] xl:!ml-[0px]  ">
          <Link
            href="/"
            className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
            <Image
              className="md:rounded"
              src={linkGame3}
              width={800}
              height={800}
              alt="닌텐도 스위치 2"
            />
            <h3 className="text-[14px] text-center">Nintendo Switch 2</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[12px] xl:!ml-[0px]  ">
          <Link
            href="/"
            className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
            <Image
              className="md:rounded"
              src={linkGame4}
              width={800}
              height={800}
              alt="플레이 스테이션4"
            />
            <h3 className="text-[14px] text-center">PS 4</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[12px] xl:!ml-[0px]  md:!mr-[24px]">
          <Link
            href="/"
            className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
            <Image
              className="md:rounded"
              src={linkGame5}
              width={800}
              height={800}
              alt="플레이 스테이션 5"
            />
            <h3 className="text-[14px] text-center">PS 5</h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
