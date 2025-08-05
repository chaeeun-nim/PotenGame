'use client';

import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import linkGame2 from '@/assets/img/01-swtich.webp';
import linkGame3 from '@/assets/img/01-switch2.webp';
import linkGame4 from '@/assets/img/01-ps4.webp';
import linkGame5 from '@/assets/img/01-ps5.webp';
import Link from 'next/link';

// 게임기별 카테고리 정보 타입 정의
interface GameConsole {
  id: string;
  name: string;
  displayName: string;
  image: StaticImageData;
  alt: string;
  categoryPath: string;
}

export default function SliderLink() {
  // 게임기별 카테고리 정보 배열
  const gameConsoles: GameConsole[] = [
    {
      id: 'nintendo-switch',
      name: 'Nintendo Switch',
      displayName: 'Nintendo Switch',
      image: linkGame2,
      alt: '닌텐도 스위치',
      categoryPath: '/list/NINTENDO01',
    },
    {
      id: 'nintendo-switch-2',
      name: 'Nintendo Switch 2',
      displayName: 'Nintendo Switch 2',
      image: linkGame3,
      alt: '닌텐도 스위치 2',
      categoryPath: '/list/NINTENDO02',
    },
    {
      id: 'playstation-4',
      name: 'PS 4',
      displayName: 'PS 4',
      image: linkGame4,
      alt: '플레이 스테이션4',
      categoryPath: '/list/PLAYSTATION04',
    },
    {
      id: 'playstation-5',
      name: 'PS 5',
      displayName: 'PS 5',
      image: linkGame5,
      alt: '플레이 스테이션 5',
      categoryPath: '/list/PLAYSTATION05',
    },
  ];

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
        {gameConsoles.map((console, index) => (
          <SwiperSlide
            key={console.id}
            className={`!w-[90px] md:!w-[130px] xl:!w-[150px] !ml-[16px] md:!ml-[12px] xl:!ml-[0px] ${
              index === gameConsoles.length - 1 ? 'md:!mr-[24px]' : ''
            }`}>
            <Link
              href={console.categoryPath}
              className="flex flex-col justify-center items-center transition-transform ease-in-out hover:translate-y-[-10px]">
              <Image
                className="md:rounded"
                src={console.image}
                width={800}
                height={800}
                alt={console.alt}
              />
              <h3 className="text-[14px] text-center">{console.displayName}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
