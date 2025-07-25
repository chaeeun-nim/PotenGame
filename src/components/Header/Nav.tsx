"use client";

import '@/app/globals.css';

import timeBlack from '@/assets/icons/time-black.svg';
import timeRed from '@/assets/icons/time-red.svg';
import mypage from '@/assets/icons/mypage.svg';
import cart from '@/assets/icons/cart.svg';
import like from '@/assets/icons/like.svg';
import category from '@/assets/icons/menu.svg';
import home from '@/assets/icons/home.svg';
import sale from '@/assets/icons/sale.svg';

import ds from '@/assets/img/ds.webp';
import switch1 from '@/assets/img/switch01.webp';
import switch2 from '@/assets/img/switch02.webp';
import ps5 from '@/assets/img/ps5.webp';

import Image from 'next/image';
import Link from 'next/link';
import useUserStore from '@/zustand/userStore';

export function Nav() {

  const { user } = useUserStore();

  return(
    <>
    <div>
      {/* 모바일 하단 네비게이터 */}
      <div style={{ boxShadow: '0 -4px 6px -1px rgba(0,0,0,0.1)' }} className='bg-white fixed bottom-0  z-4 w-full rounded-t-lg shadow-lg shadow-black  md:hidden'>
        <ul className='flex justify-around p-3 '>
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
      </div>

      {/* 상단 네비게이터 */}
      <div className='border-y-2 border-poten-gray-1 bg-white sticky top-0 z-2 w-full'>  
        <ul 
        className='flex md:p-0 gap-5 whitespace-nowrap overflow-x-scroll [&::-webkit-scrollbar]:hidden md:overflow-visible justify-around items-center max-w-300 m-auto '>
          <li className='hidden xl:block border-x-2 border-poten-gray-1'>
            <Link href={'/'}>
              <Image src={home} alt='메인 페이지' className='m-5'/>
            </Link>
          </li>

          <li className='group relative py-5'>
            <Link href={'/list'}>
              <span className='group-hover:font-bold group-hover:text-poten-red'>닌텐도 DS</span>
            </Link>
            <div className='hidden w-150 bg-white border-1 border-poten-gray-1 xl:group-hover:flex  hover:flex absolute top-16 z-1'>
              <ul className='flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1'>
                <li><Link href={'/'}>중고 게임기</Link></li>    
                <li><Link href={'/'}>중고 게임</Link></li>
                <li><Link href={'/'}>새제품 게임기</Link></li>
                <li><Link href={'/'}>새제품 게임</Link></li>
              </ul>
              <Image className='w-100' src={ds} alt='닌텐도 DS' />
            </div>
          </li>

          <li className='group relative py-5'>
            <Link href={'/list'}>
              <span className='group-hover:font-bold group-hover:text-poten-red'>닌텐도 스위치</span>
            </Link>
            <div className='hidden w-150 bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1'>
              <ul className='flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1'>
                <li><Link href={'/'}>중고 게임기</Link></li>    
                <li><Link href={'/'}>중고 게임</Link></li>
                <li><Link href={'/'}>새제품 게임기</Link></li>
                <li><Link href={'/'}>새제품 게임</Link></li>
              </ul>
              <Image className='w-100' src={switch1} alt='닌텐도 DS' />
            </div>
          </li>

          <li className='group relative py-5'>
            <Link href={'/list'}>
              <span className='group-hover:font-bold group-hover:text-poten-red'>닌텐도 스위치 2</span>
            </Link>
            <div className='hidden w-150 bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1'>
              <ul className='flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1'>
                <li><Link href={'/'}>중고 게임기</Link></li>    
                <li><Link href={'/'}>중고 게임</Link></li>
                <li><Link href={'/'}>새제품 게임기</Link></li>
                <li><Link href={'/'}>새제품 게임</Link></li>
              </ul>
              <Image className='w-100' src={switch2} alt='닌텐도 DS' />
            </div>
          </li>

          <li className='group relative py-5'>
            <Link href={'/list'}>
              <span className='group-hover:font-bold group-hover:text-poten-red'>플레이스테이션</span>
            </Link>
            <div className='hidden w-170 bg-white border-1 border-poten-gray-1 xl:group-hover:flex hover:flex absolute top-16 z-1'>
              <ul className='flex flex-col gap-3 p-6 border-r-1 border-poten-gray-1'>
                <li><Link href={'/'}>중고 게임기</Link></li>    
                <li><Link href={'/'}>중고 게임</Link></li>
                <li><Link href={'/'}>새제품 게임기</Link></li>
                <li><Link href={'/'}>새제품 게임</Link></li>
              </ul>
              <Image className='w-100' src={ps5} alt='닌텐도 DS' />
            </div>
          </li>
        
          <li>
            <Link href={'/'}>
              <span className='hover:font-bold hover:text-poten-red'>게시판</span>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <span className='hover:font-bold hover:text-poten-red'>회사소개</span>
            </Link>
          </li>
          <li className='hidden md:block border-x-2 border-poten-gray-1'>
            <Link href={'/'} className='relative'>
              <Image src={sale} alt='타임세일' className='absolute bottom-7'/>
              <Image src={timeBlack} alt='타임세일' className='m-5' />
            </Link>
          </li>
        </ul> 
      </div>

    </div>
    </>
  );
}