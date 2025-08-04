'use client';

import Image from 'next/image';
import Link from 'next/link';

import logo1 from '@/../public/logo/logo1.svg';
import logo2 from '@/../public/logo/logo2.svg';
import bannerSm from '@/assets/img/top-banner-sm.webp';
import bannerMd from '@/assets/img/top-banner-md.webp';
import bannerLg from '@/assets/img/top-banner-lg.webp';

import loginLogo from '@/assets/icons/login.svg';
import signinLogo from '@/assets/icons/signin.svg';

import myPage from '@/assets/icons/mypage.svg';
import cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/logout.svg';

import '@/app/globals.css';
import { Nav } from '@/components/Header/Nav';
import React from 'react';
import HeaderInput from '@/components/Header/HeaderInput';
import useUserStore from '@/zustand/userStore';
import useCartStore from '@/zustand/cartStore';
import useOrderSotre from '@/zustand/orderStore';

export function Header() {
  const { user, resetUser } = useUserStore();
  const { resetCartStore } = useCartStore();
  const { resetStore } = useOrderSotre();

  const handleLogout = () => {
    location.reload();
    resetUser();
    resetCartStore();
    resetStore();
  };

  return (
    <>
      {/* 상단 광고 */}
      <div className="bg-[#0E0E0E] w-full md:px-6">
        <Image
          src={bannerSm}
          alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요"
          className="w-full  m-auto md:hidden"
        />
        <Image
          src={bannerMd}
          alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요"
          className="w-auto max-h-[100px] m-auto hidden md:block xl:hidden "
        />
        <Image
          src={bannerLg}
          alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요"
          className="m-auto hidden xl:block max-w-[1200px]"
        />
      </div>

      <div
        className="flex w-full xl:flex flex-wrap xl:max-w-[1200px] px-4 md:px-6 xl:px-0 py-4 mx-auto justify-between items-center xl:gap-6 md:gap-y-2 gap-x-0
      md:grid md:grid-rows-2">
        {/* 로고 */}
        <Link href="/" className="flex-shrink-0 md:row-start-1 md:col-start-0">
          {/* 모바일, 테블릿 로고 */}
          <Image className="md:w-60 w-40   xl:hidden" src={logo2} alt="메인 로고" />
          {/* 데스크탑 로고 */}
          <Image
            className="hidden md:hidden xl:block w-[160px]"
            src={logo1}
            alt="메인 로고"
            width={177}
            height={70}
          />
        </Link>

        {/*검색창*/}
        <HeaderInput />

        {/* 상단 아이콘 */}

        {user ? (
          // 로그인o: 마이페이지, 장바구니, 로그아웃
          <ul className="hidden md:flex items-center gap-x-4 md:row-start-1 md:col-end-13">
            <li>
              <Link href="/myPage" className="flex gap-x-2 whitespace-nowrap ">
                <Image src={myPage} alt="마이페이지" />
                <span>마이페이지</span>
              </Link>
            </li>
            <li>
              <Link href="/cart" className="flex gap-x-2 whitespace-nowrap">
                <Image src={cart} alt="장바구니" />
                <span>장바구니</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleLogout()}
                className="flex gap-x-2 whitespace-nowrap cursor-pointer">
                <Image src={logOut} alt="로그아웃" />
                <span>로그아웃</span>
              </button>
            </li>
          </ul>
        ) : (
          // 로그인x: 로그인, 회원가입
          <ul className="hidden md:flex items-center gap-x-4 md:row-start-1 md:col-end-13">
            <li>
              <Link href="/login" className="flex gap-x-2 whitespace-nowrap">
                <Image src={loginLogo} alt="로그인" />
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <Link href="/login/signUp/" className="flex gap-x-2 whitespace-nowrap">
                <Image src={signinLogo} alt="회원가입" />
                <span>회원가입</span>
              </Link>
            </li>
          </ul>
        )}
      </div>

      <Nav />
    </>
  );
}
