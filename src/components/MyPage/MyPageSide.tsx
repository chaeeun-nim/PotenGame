'use client';

import Link from 'next/link';

export default function MyPageSide() {
  return (
    <>
      {/* PC */}
      <aside className="hidden xl:block h-[500px] bg-white border border-[var(--color-poten-gray-1)] rounded-lg p-4">
        <ul className="space-y-3 text-[15px] font-medium text-poten-black pt-6">
          <li className="text-black font-semibold">쇼핑 정보</li>
          <li className="pl-2 text-poten-gray-2 hover:text-poten-red cursor-pointer">
            <Link href="/mypage/like">관심 상품</Link>
          </li>
          <li className="mt-6 text-black font-semibold">나의 정보</li>
          <li className="pl-2 text-poten-gray-2 hover:text-poten-red cursor-pointer">
            <Link href="/mypage/profile">회원 정보 수정</Link>
          </li>
          <li className="pl-2 text-poten-gray-2 hover:text-poten-red cursor-pointer">
            <Link href="/mypage/address">배송 주소록</Link>
          </li>
          <li className="mt-6 text-black font-semibold">고객센터</li>
          <li className="pl-2 text-poten-gray-2 hover:text-poten-red cursor-pointer">
            <Link href="/notice">공지사항</Link>
          </li>
          <li className="pl-2 text-poten-gray-2 hover:text-poten-red cursor-pointer">작성한 글</li>
        </ul>
      </aside>

      {/* 태블릿 */}
      <aside className="hidden md:block xl:hidden w-[200px] h-[100vh] border-r border-[var(--color-poten-gray-1)] px-4 pt-[48px]">
        <ul className="space-y-4 text-sm sm:text-base leading-snug">
          <li className="font-bold text-poten-black">쇼핑 정보</li>
          <li>
            <Link href="/mypage/like" className="pl-2 block text-[var(--color-poten-gray-2)] hover:text-black transition truncate">
              관심 상품
            </Link>
          </li>
          <li className="font-bold text-poten-black">나의 정보</li>
          <li>
            <Link href="/mypage/profile" className="pl-2 block text-[var(--color-poten-gray-2)] hover:text-black transition truncate">
              회원 정보 수정
            </Link>
          </li>
          <li>
            <Link href="/mypage/address" className="pl-2 block text-[var(--color-poten-gray-2)] hover:text-black transition truncate">
              배송 주소록
            </Link>
          </li>
          <li className="font-bold text-poten-black">고객센터</li>
          <li>
            <Link href="/mypage/notice" className="pl-2 block text-[var(--color-poten-gray-2)] hover:text-black transition truncate">
              공지사항
            </Link>
          </li>
          <li>
            <Link href="/mypage/mypost" className="pl-2 block text-[var(--color-poten-gray-2)] hover:text-black transition truncate">
              작성한 글
            </Link>
          </li>
        </ul>
      </aside> 
    </>
  );
}
