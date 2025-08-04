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
import MobileGnb from './MobileGnb';

export function Nav() {
  const topNavElems = [
    { id: 0, title: '닌텐도 DS', link: '/', img: ds },
    { id: 1, title: '닌텐도 스위치', link: '/', img: switch1 },
    { id: 2, title: '닌텐도 스위치 2', link: '/', img: switch2 },
    { id: 3, title: '플레이스테이션 4', link: '/', img: ps4 },
    { id: 4, title: '플레이스테이션 5', link: '/', img: ps5 },
  ];

  return (
    <>
      <div>
        {/* 모바일 하단 네비게이터 */}
        {/* <div style={{ boxShadow: '0 -4px 6px -1px rgba(0,0,0,0.1)' }} 
          className='bg-white fixed bottom-0 z-4 w-full rounded-t-lg shadow-lg shadow-black md:hidden'
      >
        <ul className='flex justify-around items-center h-15'>
          <li>
            <Link className='flex flex-col items-center' href={'/'}>
              <Image src={timeRed} alt="타임세일"/>
              <span>타임세일</span>
            </Link>
          </li>
          <li>
            { user? 
            <Link className='flex flex-col items-center' href={'/mypage'}>
              <Image src={mypage} alt="내 정보"/>
              <span>내 정보</span>
            </Link>
            :<Link className='flex flex-col items-center' href={'/login'}>
              <Image src={mypage} alt="로그인"/>
              <span>로그인</span>
            </Link>
            }
          </li>
          <li>
            <Link className='flex flex-col items-center' href={'/mypage'}>
              <Image src={category} alt="카테고리"/>
              <span>카테고리</span>
            </Link>
          </li>
          <li >
            <Link className='flex flex-col items-center' href={'/'}>
              <Image src={like} alt="찜" />
              <span >찜</span>
            </Link>
          </li>
          <li>
            <Link className='flex flex-col items-center' href={'/cart'}>
              <Image src={cart} alt="장바구니"/>
              <span>장바구니</span>
            </Link>
          </li>
        </ul> 
      </div> */}
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
                    <Link href={'/'}>회사소개</Link>
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
