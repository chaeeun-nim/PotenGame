'use client';

import Link from 'next/link';
import mainIcon from '@/assets/icons/nav-icon/main.svg';
import myPageIcon from '@/assets/icons/nav-icon/nav-mypage.svg';
import MenuIcon from '@/assets/icons/nav-icon/menu.svg';
import LikeIcon from '@/assets/icons/nav-icon/nav-heart.svg';
import cartIcon from '@/assets/icons/nav-icon/nav-cart.svg';
import loginIcon from '@/assets/icons/nav-icon/nav-login.svg';

import Image from 'next/image';
import useUserStore from '@/zustand/userStore';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import MobileNav from './MobileNav';
import useLoginModal from '@/zustand/areyouLogin';

export default function MobileGnb() {
  const { user } = useUserStore();
  const pathName = usePathname();
  const [menuActive, setMunuActive] = useState(false);
  const [animation, setAnimation] = useState('top-[100%]');
  const navRef = useRef<HTMLDivElement>(null);
  const { openViewModal } = useLoginModal();

  const openLoginHandler = () => {
    closeMenu();
    openViewModal();
  };

  const menuHandle = () => {
    setMunuActive(!menuActive);
    if (!menuActive) {
      setAnimation('top-0');
    } else {
      setAnimation('top-[150%]');
    }
  };

  const closeMenu = () => {
    setMunuActive(false);
    setAnimation('top-[150%]');
  };

  useEffect(() => {
    setAnimation('top-[150%]');
    setMunuActive(false);
    document.body.style.overflow = '';
  }, [pathName]);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
      if (navRef.current) {
        navRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
  }, [menuActive]);

  return (
    <>
      <MobileNav animation={animation} navRef={navRef} closeMenu={closeMenu} />
      <nav className="md:hidden w-full bg-white border-t-1 h-[80px] text-poten-gray3 px-4 py-2 shadow-[0_-1px_8px_0_rgba(0,0,0,0.1)] border-poten-gray-1 fixed bottom-0 z-[9] rounded-t-[4px]">
        <ul className="flex flex-row  w-full  justify-between gap-2">
          <li
            className={` p-2 rounded-[4px] w-full ${pathName === '/' ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
            <Link href="/" className="w-full flex justify-center items-center flex-col">
              <Image
                className="mb-0.5"
                src={mainIcon}
                alt="메인화면"
                width={24}
                height={24}
              />
              <p className="text-[10px] text-center">메인</p>
            </Link>
          </li>

          {user ? (
            <li
              className={` p-2 rounded-[4px] w-full ${pathName === '/myPage' ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
              <Link
                href="/mypages"
                onClick={closeMenu}
                className="w-full flex justify-center items-center flex-col">
                <Image
                  className="mb-0.5"
                  src={myPageIcon}
                  alt="내 정보"
                  width={24}
                  height={24}
                />
                <p className="text-[10px] text-center">내 정보</p>
              </Link>
            </li>
          ) : (
            <li
              className={` p-2 rounded-[4px] w-full ${pathName === '/login' ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
              <Link
                href="/login"
                onClick={closeMenu}
                className="w-full flex justify-center items-center flex-col">
                <Image
                  className="mb-0.5"
                  src={loginIcon}
                  alt="로그인"
                  width={24}
                  height={24}
                />
                <p className="text-[10px] text-center">로그인</p>
              </Link>
            </li>
          )}

          <li
            className={` p-2 rounded-[4px] w-full ${menuActive ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
            <button
              className="w-full flex justify-center items-center flex-col text-[10px] text-center"
              onClick={menuHandle}>
              <Image
                className="mb-0.5"
                src={MenuIcon}
                alt="전체 메뉴"
                width={24}
                height={24}
              />
              메뉴
            </button>
          </li>
          <li
            className={` p-2 rounded-[4px] w-full ${pathName === '/myPage/like' ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
            {user ? (
              <Link
                href="/mypages/like"
                onClick={closeMenu}
                className="w-full flex justify-center items-center flex-col">
                <Image
                  className="mb-0.5"
                  src={LikeIcon}
                  alt="찜"
                  width={24}
                  height={24}
                />
                <p className="text-[10px] text-center">찜 목록</p>
              </Link>
            ) : (
              <button
                onClick={openLoginHandler}
                className="w-full flex justify-center items-center flex-col cursor-pointer">
                <Image
                  className="mb-0.5"
                  src={LikeIcon}
                  alt="찜"
                  width={24}
                  height={24}
                />
                <span className="text-[10px] text-center blcok">찜 목록</span>
              </button>
            )}
          </li>
          <li
            className={` p-2 rounded-[4px] w-full ${pathName === '/cart' ? 'bg-poten-snowgray2 shadow-[inset_1px_1px_1px_0_rgba(0,0,0,0.16)]' : null} `}>
            {user ? (
              <Link
                href="/cart"
                onClick={closeMenu}
                className="w-full flex justify-center items-center flex-col">
                <Image
                  className="mb-0.5"
                  src={cartIcon}
                  alt="장바구니"
                  width={24}
                  height={24}
                />
                <p className="text-[10px] text-center">장바구니</p>
              </Link>
            ) : (
              <button
                onClick={openLoginHandler}
                className="w-full flex justify-center items-center flex-col cursor-pointer">
                <Image
                  className="mb-0.5"
                  src={cartIcon}
                  alt="장바구니"
                  width={24}
                  height={24}
                />
                <span className="text-[10px] text-center blcok">장바구니</span>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
