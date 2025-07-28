'use client';

import React from 'react';

/* Order 타입 선언 */
type Order = {
  id: number;
  status: string;
  title: string;
  date: string;
  price: string;
};

/* recentOrders 배열에 타입 지정 */
const recentOrders: Order[] = [
  {
    id: 1,
    status: '구매확정완료',
    title: '포켓몬스터 바이올렛',
    date: '25.06.30 주문',
    price: '146,000원',
  },
  {
    id: 2,
    status: '구매확정완료',
    title: '젤다의 전설 티어스 오브 더 킹덤',
    date: '25.06.28 주문',
    price: '69,000원',
  },
];

export default function MyPageRecent() {
  return (
    <>
      {/* PC */}
      <section className="hidden xl:block bg-white rounded-lg px-4 mb-8">
        <SectionHeader />
        {recentOrders.map((order) => (
          <Card order={order} key={order.id} size="lg" />
        ))}
      </section>

      {/* 태블릿 */}
      <section className="hidden md:block xl:hidden bg-white pt-6 py-12 px-4 w-full">
        <div className="w-full max-w-[895px] mx-auto">
          <SectionHeader />
          <div className="flex flex-col">
            {recentOrders.map((order) => (
              <Card order={order} key={order.id} size="md" />
            ))}
          </div>
        </div>
      </section>


      {/* 모바일 */}
      <section className="block md:hidden bg-white px-4 py-6">
        <SectionHeader />
        <div className="flex flex-col">
          {recentOrders.map((order) => (
            <Card order={order} key={order.id} size="sm" />
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHeader() {
  return (
    <>
      <div className="flex items-end gap-2 mb-3">
        <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
        <div className="flex items-baseline gap-2">
          <h2 className="text-[16px] font-semibold text-black">최근 주문 상품</h2>
          <span className="text-[13px] text-[var(--color-poten-gray-2)]">(최근 1개월 기준)</span>
        </div>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />
    </>
  );
}

/* 컴포넌트 order */
function Card({ order, size }: { order: Order; size: 'lg' | 'md' | 'sm' }) {
  const imageSize = size === 'lg' ? 'w-[169px] h-[169px]' : 'w-full h-[100px]';
  const layoutClass = size === 'lg' ? 'flex gap-6 p-6 mb-6' : 'grid grid-cols-[100px_1fr] gap-3 sm:gap-4 p-3 sm:p-4 mb-3 sm:mb-4';

  return (
    <div className={`bg-[var(--color-poten-snowgray1)] border border-[var(--color-poten-gray-1)] rounded-[8px] ${layoutClass}`}>
      {/* 이미지 */}
      <div className={`${imageSize} bg-white shadow-inner rounded-md flex items-center justify-center`} />

      {/* 텍스트 정보 */}
      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-bold text-black">{order.status}</p>
          <p className="text-[12px] text-[var(--color-poten-gray-2)]">{order.date}</p>
          <p className="text-[14px] text-black mt-1">{order.title}</p>
          <p className="text-[16px] font-bold text-black">{order.price}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center gap-1 text-sm text-[var(--color-poten-red)]">
            상세보기
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <button className="h-[26px] px-3 rounded-full border border-[var(--color-poten-red)] text-sm text-[var(--color-poten-red)] font-medium">
            리뷰쓰기
          </button>
        </div>
      </div>
    </div>
  );
}
