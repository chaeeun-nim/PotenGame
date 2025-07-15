"use client";

import Image from "next/image";
import Link from "next/link";

import logo1 from "../../public/logo/logo1.svg";
import logo2 from "../../public/logo/logo2.svg";
import bannerSm from "@/assets/img/top-banner-sm.webp";
import bannerMd from "@/assets/img/top-banner-md.webp";
import bannerLg from "@/assets/img/top-banner-lg.webp";

import loginLogo from "../assets/icons/login.svg";
import signinLogo from "../assets/icons/signin.svg";
import search from "@/assets/icons/search.svg";
import close from "@/assets/icons/close.svg";
import game from "@/assets/icons/game.svg";
import myPage from "@/assets/icons/mypage.svg";
import cart from "@/assets/icons/cart.svg";
import logOut from "@/assets/icons/logout.svg";


import '@/app/globals.css';
import { Nav } from "@/components/Nav";
import { useEffect, useState } from "react";

export function Header() {

  // 로그인 여부
  const [ isLogin, setIsLogin ] = useState(false);

  // 모바일 상태에서 검색버튼 눌렀을때 상태관리
  const [ isSearchClick, setIsSearchClick ] = useState<HTMLButtonElement | false | true>(false);
  
  const handleSearchClick = () => {
    setIsSearchClick(!isSearchClick)
  }

  const [ title, setTitle ] = useState('');

  const [ searched, setSearched ] = useState<string[]>([]);

  const addStorage = () => {
    setSearched([...searched, title])
    window.localStorage.setItem('최근 검색어', JSON.stringify(searched));
  }
  
  const handleKeyDown = (e:React.KeyboardEvent) => {
    if(e.key === 'Enter'){
      addStorage();
    }
  }

  useEffect(() => {
    setIsLogin(true);
    // setIsLogin(false);
  },[])

  return(
    <>
    {/* 상단 광고 */}
    <div className="bg-black">
      <Image src={bannerSm} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full  m-auto md:hidden"/> 
      <Image src={bannerMd} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full m-auto hidden md:block xl:hidden "/>
      <Image src={bannerLg} alt="컨디션 최상의 중고칩 국내 최다보유 포텐 게임에서 인생게임을 찾아보세요" className="w-full m-auto hidden xl:block max-w-[1280px]"/>
    </div>
 
    <div className="flex items-center justify-between py-6 max-w-[1200px] mx-5 xl:m-auto">
      
      {/* 로고 */}
      <Link href='/'>
          {/* 모바일, 테블릿 로고 */}
          <Image className="w-31 h-4 md:w-70 md:h-7  xl:hidden" src={logo2} alt="메인 로고"/> 
          {/* 데스크탑 로고 */}
          <Image className="hidden md:hidden xl:block" src={logo1} alt="메인 로고" width={177} height={70}/> 
      </Link>

      {/* 검색버튼 */}
        <button className=" md:hidden" onClick={ () => handleSearchClick() }>
          { isSearchClick? <Image src={search} alt="검색"/> : <Image src={close} alt="닫기"/>}
        </button>

      {/* 데스크탑 검색창 */}
      <div className="hidden xl:flex relative items-center">
        <div className="absolute left-3">
          <Image src={game} alt="검색창" />
        </div>
        <input 
        className=" w-[689] h-[50] pl-10 rounded-xl bg-poten-gray-1" 
        type="text" 
        placeholder="어떤 상품을 찾으시나요? 중고 게임칩, 신상 게임칩, 게임기 모두 검색"
        onChange={ e => setTitle(e.target.value) }
        value={ title }
        onKeyDown={ e => handleKeyDown(e) }
        />
        <button className="absolute right-3" value={ title } onClick={ () => addStorage() }>
          <Image src={search} alt='검색'></Image>
        </button>
      </div>


      {/* 비로그인: 로그인, 회원가입 버튼 / 로그인: 마이페이지, 장바구니, 로그아웃*/}
      { isLogin? 
      <ul className="hidden md:flex gap-x-2.5">
        <li>
          <Link href='/myPage' className="flex gap-x-2 ">
            <Image src={myPage} alt="마이페이지" />
            <span>마이페이지</span>
          </Link>
        </li>
        <li>
          <Link href='/cart' className="flex gap-x-2">
            <Image src={cart} alt="장바구니" />
            <span>장바구니</span>
          </Link>
        </li>
        <li>
          <Link href='/' className="flex gap-x-2">
            <Image src={logOut} alt="로그아웃" />
            <span>로그아웃</span>
          </Link>
        </li>
      </ul>
      :<ul className="hidden md:flex gap-x-2.5">
        <li>
          <Link href='/login' className="flex gap-x-2 ">
            <Image src={loginLogo} alt="로그인" />
            <span>로그인</span>
          </Link>
        </li>
        <li>
          <Link href='/login/signUp/' className="flex gap-x-2">
            <Image src={signinLogo} alt="회원가입" />
            <span>회원가입</span>
          </Link>
        </li>
      </ul>
      }
      
    </div>

    {/* 모바일 검색창 */}
    { isSearchClick? <div className="hidden">검색기록</div> : 
      <div className=" md:hidden bg-white h-90 absolute top-35 p-3 z-1 w-full">
        <div className="flex relative items-center">
          <input 
          className="bg-poten-gray-1 rounded-xl h-10 w-full my-3" 
          type="text" 
          placeholder="어떤 상품을 찾으시나요?"
          onChange={ e => setTitle(e.target.value) }
          value={ title }
          onKeyDown={ e => handleKeyDown(e) }
          />
        <button className="absolute right-3" value={ title } onClick={ () => addStorage() }>
          <Image src={search} alt='검색'></Image>
        </button>
        </div>
        
        <div>
          <p className="border-b-2 border-poten-gray-1 font-bold p-3">최근 검색어</p>
          <ul> 
            <li>
              <button className="inline-block m-2 p-2  border-2 border-poten-gray-1 rounded-4xl">
                <span>스폰지밥 게임</span>
                <button> x </button>
              </button>
            </li>
          </ul>
        </div>
      </div>
    }

    {/* 테블릿 검색창 */}
    <div className="hidden md:flex xl:hidden relative items-center">
      <div className="absolute left-10">
        <Image src={game} alt="검색창" />
      </div>
      <input 
        className="pl-13 rounded-xl md:block bg-poten-gray-1 h-10 w-full my-3 max-w-screen mx-5 xl:hidden" 
        type="text" 
        placeholder="어떤 상품을 찾으시나요? 중고 게임칩, 신상 게임칩, 게임기 모두 검색"
        onChange={ e => setTitle(e.target.value) }
        value={ title }
        onKeyDown={ e => handleKeyDown(e) }/>
      <button className="absolute right-10" value={ title } onClick={ () => addStorage() }>
        <Image src={search} alt='검색'></Image>
      </button>
    </div>

    <Nav />
    </>
  )
}