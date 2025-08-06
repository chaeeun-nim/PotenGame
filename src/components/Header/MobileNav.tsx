'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RefObject } from 'react';
import Logo from '../../../public/logo/logo2.svg';
import closeBtn from '@/assets/icons/nav-icon/nav-close.svg';
import useUserStore from '@/zustand/userStore';
import linkArrow from '@/assets/icons/nav-icon/link-arrow.svg';
import useCartStore from '@/zustand/cartStore';
import useOrderSotre from '@/zustand/orderStore';
import nintendoDs from '@/assets/img/ds.webp';
import nintendoSwitch from '@/assets/img/switch01.webp';
import nintendoSwitch2 from '@/assets/img/switch02.webp';
import ps4 from '@/assets/img/01-ps4.webp';
import ps5 from '@/assets/img/01-ps5.webp';
import PotenLogo from '../../../public/logo/logo1.svg';
import useLikeStore from '@/zustand/likeStore';
import useListStore from '@/zustand/listStore';

export default function MobileNav({
  animation,
  navRef,
  closeMenu,
}: {
  animation: string;
  navRef: RefObject<HTMLDivElement | null>;
  closeMenu: () => void;
}) {
  const { user, resetUser } = useUserStore();
  const { resetCartStore } = useCartStore();
  const { resetStore } = useOrderSotre();
  const { resetLikeStore } = useLikeStore();
  const { setFilters, resetFilters } = useListStore();

  const handleLogout = () => {
    resetUser();
    resetCartStore();
    resetStore();
    resetLikeStore();
    location.reload();
  };

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (
    platForm:
      | 'NINTENDONDS'
      | 'NINTENDO01'
      | 'NINTENDO02'
      | 'PLAYSTATION04'
      | 'PLAYSTATION05',
  ) => {
    closeMenu();
    // 카테고리 플랫폼 필터 설정
    const platformValue = platForm;
    resetFilters(); // 기존 필터 초기화
    setFilters({ platform: platformValue }); // 해당 카테고리 필터 설정
  };

  const handleSubCategoryClick = (
    condition: 'used' | 'new',
    category: 'GAME' | 'HARDWARE',
    platForm:
      | 'NINTENDONDS'
      | 'NINTENDO01'
      | 'NINTENDO02'
      | 'PLAYSTATION04'
      | 'PLAYSTATION05',
  ) => {
    closeMenu();
    const platformValue = platForm;
    resetFilters(); // 기존 필터 초기화

    // 플랫폼, 컨디션, 카테고리 필터 동시 설정
    setFilters({
      platform: platformValue,
      condition: condition === 'used' ? 'used' : 'new',
      category: category,
    });
  };

  return (
    <>
      <div
        ref={navRef}
        className={`w-full bg-white fixed ${animation} pb-[120px]  transition-all text-poten-black ease-in-out duration-500 left-0 overflow-y-auto h-full z-[9]`}>
        <div className="w-full px-4 pt-4 pb-6 border-b-1  border-poten-gray-1">
          <div className="flex justify-between mb-4">
            <Link href="/">
              <Image
                src={Logo}
                alt="메인메뉴"
                className="w-[170px]"
                width={170}
                height={19}
              />
            </Link>
            <button onClick={closeMenu}>
              <Image src={closeBtn} width={24} height={24} alt="닫기" />
            </button>
          </div>
          <div>
            {user ? (
              <Link
                href="/mypages"
                onClick={closeMenu}
                className="flex flex-row gap-1 justify-start items-center">
                <h2 className="font-bold text-[20px] mb-2 ">{user.name}님</h2>
                <Image
                  src={linkArrow}
                  className="w-[14px] pb-1"
                  width={16}
                  height={16}
                  alt="마이페이지링크"
                />
              </Link>
            ) : (
              <h2 className="font-bold text-[20px] mb-2 ">고객님 환영합니다.</h2>
            )}
            {user ? (
              <div className="flex flex-row gap-4">
                <Link
                  className="inline-block px-[12px] rounded-[2px] py-[2px] bg-poten-red text-white font-semibold"
                  href="/cart">
                  장바구니
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-[12px] rounded-[2px] py-[2px] bg-white text-poten-gray-2 border-1 border-poten-gray-1 font-semibold">
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="inline-block px-[12px] rounded-[2px] py-[2px] bg-poten-red text-white font-semibold">
                  로그인
                </Link>
                <Link
                  href="/login/signUp"
                  onClick={closeMenu}
                  className="inline-block px-[12px] rounded-[2px] py-[2px] bg-white text-poten-gray-2 border-1 border-poten-gray-1 font-semibold">
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/list/NINTENDONDS"
                onClick={() => handleCategoryClick('NINTENDONDS')}
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                닌텐도 DS
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDONDS"
                onClick={() => handleSubCategoryClick('used', 'HARDWARE', 'NINTENDONDS')}
                className="p-1 ">
                중고 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDONDS"
                onClick={() => handleSubCategoryClick('used', 'GAME', 'NINTENDONDS')}
                className="p-1 ">
                중고 게임
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDONDS"
                onClick={() => handleSubCategoryClick('new', 'HARDWARE', 'NINTENDONDS')}
                className="p-1 ">
                새제품 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDONDS"
                onClick={() => handleSubCategoryClick('new', 'GAME', 'NINTENDONDS')}
                className="p-1 ">
                새제품 게임
              </Link>
            </li>
          </ul>

          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={nintendoDs}
              width={480}
              height={480}
              alt="닌텐도 DS"
            />
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/list/NINTENDO01"
                onClick={() => handleCategoryClick('NINTENDO01')}
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                닌텐도 스위치
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO01"
                onClick={() => handleSubCategoryClick('used', 'HARDWARE', 'NINTENDO01')}
                className="p-1 ">
                중고 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO01"
                onClick={() => handleSubCategoryClick('used', 'GAME', 'NINTENDO01')}
                className="p-1 ">
                중고 게임
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO01"
                onClick={() => handleSubCategoryClick('new', 'HARDWARE', 'NINTENDO01')}
                className="p-1 ">
                새제품 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO01"
                onClick={() => handleSubCategoryClick('new', 'GAME', 'NINTENDO01')}
                className="p-1 ">
                새제품 게임
              </Link>
            </li>
          </ul>
          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={nintendoSwitch}
              width={480}
              height={480}
              alt="닌텐도 스위치"
            />
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/list/NINTENDO02"
                onClick={() => handleCategoryClick('NINTENDO02')}
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                닌텐도 스위치 2
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO02"
                onClick={() => handleSubCategoryClick('used', 'HARDWARE', 'NINTENDO02')}
                className="p-1 ">
                중고 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO02"
                onClick={() => handleSubCategoryClick('used', 'GAME', 'NINTENDO02')}
                className="p-1 ">
                중고 게임
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO02"
                onClick={() => handleSubCategoryClick('new', 'HARDWARE', 'NINTENDO02')}
                className="p-1 ">
                새제품 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/NINTENDO02"
                onClick={() => handleSubCategoryClick('new', 'GAME', 'NINTENDO02')}
                className="p-1 ">
                새제품 게임
              </Link>
            </li>
          </ul>
          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={nintendoSwitch2}
              width={480}
              height={480}
              alt="닌텐도 스위치 2"
            />
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/list/PLAYSTATION04"
                onClick={() => handleCategoryClick('PLAYSTATION04')}
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                플레이스테이션 4
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION04"
                onClick={() =>
                  handleSubCategoryClick('used', 'HARDWARE', 'PLAYSTATION04')
                }
                className="p-1 ">
                중고 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION04"
                onClick={() => handleSubCategoryClick('used', 'GAME', 'PLAYSTATION04')}
                className="p-1 ">
                중고 게임
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION04"
                onClick={() => handleSubCategoryClick('new', 'HARDWARE', 'PLAYSTATION04')}
                className="p-1 ">
                새제품 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION04"
                onClick={() => handleSubCategoryClick('new', 'GAME', 'PLAYSTATION04')}
                className="p-1 ">
                새제품 게임
              </Link>
            </li>
          </ul>
          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={ps4}
              width={480}
              height={480}
              alt="플레이스테이션 4"
            />
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/list/PLAYSTATION05"
                onClick={() => handleCategoryClick('PLAYSTATION05')}
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                플레이스테이션 5
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION05"
                onClick={() =>
                  handleSubCategoryClick('used', 'HARDWARE', 'PLAYSTATION05')
                }
                className="p-1 ">
                중고 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION05"
                onClick={() => handleSubCategoryClick('used', 'GAME', 'PLAYSTATION05')}
                className="p-1 ">
                중고 게임
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION05"
                onClick={() => handleSubCategoryClick('new', 'HARDWARE', 'PLAYSTATION05')}
                className="p-1 ">
                새제품 게임기
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/list/PLAYSTATION05"
                onClick={() => handleSubCategoryClick('new', 'GAME', 'PLAYSTATION05')}
                className="p-1 ">
                새제품 게임
              </Link>
            </li>
          </ul>
          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={ps5}
              width={480}
              height={480}
              alt="플레이스테이션 5"
            />
          </div>
        </div>
        <div className="flex flex-row border-b-1 border-poten-gray-1">
          <ul className="bg-poten-snowgray1 pl-4 py-6 w-[480px] border-r-1 border-poten-gray-1">
            <li className="pb-4">
              <Link
                href="/about"
                className="font-bold text-[18px] flex items-center border-l-6 border-poten-red px-2">
                포텐게임
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/about" className="p-1 ">
                회사소개
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/making" className="p-1 ">
                공지사항
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/making" className="p-1 ">
                자유게시판
              </Link>
            </li>
          </ul>
          <div className="flex px-4 justify-center items-center">
            <Image
              className="w-[450px]"
              src={PotenLogo}
              width={480}
              height={480}
              alt="포텐게임"
            />
          </div>
        </div>
      </div>
    </>
  );
}
