
'use client';

import Link from 'next/link';

export default function MobileMyPageNav() {
  return (
    <section className="block md:hidden w-full bg-white px-4 pt-6">
      <div className="flex gap-2 mb-6">
        <Link href="/myPage/profile">
          <button className="w-[90px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)]">
            회원정보수정
          </button>
        </Link>
        <Link href="/myPage/address">
          <button className="w-[95px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)]">
            배송지 주소록
          </button>
        </Link>
        <Link href="/myPage/mypost">
          <button className="w-[70px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)]">
            작성한 글
          </button>
        </Link>
      </div>
    </section>
  );
}
