'use client';

import '@/app/globals.css';

import timeBlack from '@/assets/icons/time-black.svg';

import home from '@/assets/icons/home.svg';
import sale from '@/assets/icons/sale.svg';

import Image from 'next/image';
import Link from 'next/link';

import { TopNavElem } from '@/components/Header/TopNavElem';
import ds from '@/assets/img/ds.webp';
import switch1 from '@/assets/img/switch01.webp';
import switch2 from '@/assets/img/switch02.webp';
import ps4 from '@/assets/img/ps4.webp';
import ps5 from '@/assets/img/ps5.webp';
import MobileGnb from '@/components/Header/MobileGnb';

export function Nav() {
  const topNavElems = [
    {
      id: 0,
      title: '닌텐도 DS',
      link: '/list/NINTENDONDS',
      img: ds,
      categoryCode: 'NINTENDONDS',
    },
    {
      id: 1,
      title: '닌텐도 스위치',
      link: '/list/NINTENDO01',
      img: switch1,
      categoryCode: 'NINTENDO01',
    },
    {
      id: 2,
      title: '닌텐도 스위치 2',
      link: '/list/NINTENDO02',
      img: switch2,
      categoryCode: 'NINTENDO02',
    },
    {
      id: 3,
      title: '플레이스테이션 4',
      link: '/list/PLAYSTATION04',
      img: ps4,
      categoryCode: 'PLAYSTATION04',
    },
    {
      id: 4,
      title: '플레이스테이션 5',
      link: '/list/PLAYSTATION05',
      img: ps5,
      categoryCode: 'PLAYSTATION05',
    },
  ];

  return (
    <>
      <div>
        {/* 모바일 하단 네비게이터 */}
        <MobileGnb />

        {/* 상단 네비게이터 */}
        <div className="border-y-2 border-poten-gray-1 bg-white sticky top-0 z-2 w-full">
          <ul className="flex md:p-0 gap-5 whitespace-nowrap overflow-x-scroll [&::-webkit-scrollbar]:hidden md:overflow-visible justify-around items-center max-w-300 m-auto ">
            <li className="hidden xl:block border-x-2 border-poten-gray-1">
              <Link href={'/'}>
                <Image src={home} alt="메인 페이지" className="m-5" />
              </Link>
            </li>

            {topNavElems.map((elem) => (
              <TopNavElem
                key={elem.id}
                link={elem.link}
                title={elem.title}
                img={elem.img}
                categoryCode={elem.categoryCode}
              />
            ))}

            <li className="group relative py-5">
              <Link href="/">
                <span className="group-hover:font-bold group-hover:text-poten-red">
                  포텐게임
                </span>
              </Link>
              <div className="hidden bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1">
                <ul className="flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1">
                  <li>
                    <Link href={'/about'}>회사소개</Link>
                  </li>
                  <li>
                    <Link href={'/'}>공지사항</Link>
                  </li>
                  <li>
                    <Link href={'/'}>자유게시판</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="hidden md:block border-x-2 border-poten-gray-1">
              <Link href={'/'} className="relative">
                <Image src={sale} alt="타임세일" className="absolute bottom-7" />
                <Image src={timeBlack} alt="타임세일" className="m-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
