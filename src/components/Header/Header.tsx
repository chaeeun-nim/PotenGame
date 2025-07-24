"use client";

import Image from "next/image";
import Link from "next/link";

import logo1 from "@/../public/logo/logo1.svg";
import logo2 from "@/../public/logo/logo2.svg";
import bannerSm from "@/assets/img/top-banner-sm.webp";
import bannerMd from "@/assets/img/top-banner-md.webp";
import bannerLg from "@/assets/img/top-banner-lg.webp";

import loginLogo from "@/assets/icons/login.svg";
import signinLogo from "@/assets/icons/signin.svg";

import myPage from "@/assets/icons/mypage.svg";
import cart from "@/assets/icons/cart.svg";
import logOut from "@/assets/icons/logout.svg";


import '@/app/globals.css';
import { Nav } from "@/components/Header/Nav";
import React from "react";
import Input from "@/components/Header/Input";
import useUserStore from "@/zustand/userStore";

export function Header() {

const { user, resetUser } = useUserStore();

  return(
    <>
    {/* 상단 광고 */}
    <div className="bg-[#0E0E0E]">
      <Image src={bannerSm} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full  m-auto md:hidden"/> 
      <Image src={bannerMd} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full m-auto hidden md:block xl:hidden "/>
      <Image src={bannerLg} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full m-auto hidden xl:block max-w-[1280px]"/>
    </div>
 
    <div className="flex md:grid grid-flow-col grid-cols-12 grid-rows-2 xl:flex justify-between items-center  py-6 max-w-[1200px] mx-5 xl:m-auto">
    
      {/* 로고 */}
      <Link href='/' className="col-span-5">
        {/* 모바일, 테블릿 로고 */}
        <Image className="w-31 h-4 md:w-70 md:h-7  xl:hidden" src={logo2} alt="메인 로고"/> 
        {/* 데스크탑 로고 */}
        <Image className="hidden md:hidden xl:block" src={logo1} alt="메인 로고" width={177} height={70}/> 
      </Link>

      

      {/*검색창*/}
      <div className="col-span-full row-start-2">
      <Input />
      </div>
        

      {/* 비로그인: 로그인, 회원가입 버튼 / 로그인: 마이페이지, 장바구니, 로그아웃*/}
      { user?
      <ul className="hidden md:flex items-center gap-x-2.5 col-start-10 col-span-3 ">
        <li>
          <Link href='/myPage' className="flex gap-x-2 whitespace-nowrap ">
            <Image src={myPage} alt="마이페이지" />
            <span>마이페이지</span>
          </Link>
        </li>
        <li>
          <Link href='/cart' className="flex gap-x-2 whitespace-nowrap">
            <Image src={cart} alt="장바구니" />
            <span>장바구니</span>
          </Link>
        </li>
        <li>
          <button onClick={() => resetUser()} className="flex gap-x-2 whitespace-nowrap cursor-pointer">
            <Image src={logOut} alt="로그아웃" />
            <span>로그아웃</span>
          </button>
        </li>
      </ul>
      :<ul className="hidden md:flex  gap-x-2.5 col-start-10 col-span-3 ">
        <li>
          <Link href='/login' className="flex gap-x-2 whitespace-nowrap">
            <Image src={loginLogo} alt="로그인" />
            <span>로그인</span>
          </Link>
        </li>
        <li>
          <Link href='/login/signUp/' className="flex gap-x-2 whitespace-nowrap">
            <Image src={signinLogo} alt="회원가입" />
            <span>회원가입</span>
          </Link>
        </li>
      </ul>
      }
    </div>

    <Nav />
    </>
  )
}