'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IRecentOrder } from '@/types/RecentOrder';
import EmptyState from '@/components/MyPage/EmptyState';

type Props = {
  recentOrders: IRecentOrder[];
};

export default function MyPageRecent({ recentOrders }: Props) {
  const visibleOrders = recentOrders.slice(0, 2); // 최대 2개만 노출

  return (
    <>
      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg px-4 mb-8">
        <SectionHeader />
        {visibleOrders.length === 0 ? (
          <EmptyState /> 
        ) : (
          visibleOrders.map((order) => <Card order={order} key={order.id} size="lg" />)
        )}
      </section>
      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white pt-6 py-12 px-4 w-full">
        <div className="w-full max-w-[895px] mx-auto">
          <SectionHeader />
          {visibleOrders.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="flex flex-col">
              {visibleOrders.map((order) => (
                <Card order={order} key={order.id} size="md" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden bg-white px-4 py-6">
        <SectionHeader />
        {visibleOrders.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col">
            {visibleOrders.map((order) => (
              <Card order={order} key={order.id} size="sm" />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

// 제목 헤더 공통 UI
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

// 주문 카드 컴포넌트
function Card({
  order,
  size,
}: {
  order: IRecentOrder;
  size: 'lg' | 'md' | 'sm';
}) {
  const imageSize =
    size === 'lg' ? 'w-[169px] h-[169px]' : 'w-full h-[100px]';

  const layoutClass =
    size === 'lg'
      ? 'flex gap-6 p-6 mb-6'
      : 'grid grid-cols-[100px_1fr] gap-3 sm:gap-4 p-3 sm:p-4 mb-3 sm:mb-4';

  return (
    <div
      // 카드 배경 및 테두리, 반응형 레이아웃 클래스 조합
      className={`bg-[var(--color-poten-snowgray1)] border border-[var(--color-poten-gray-1)] rounded-[8px] ${layoutClass}`}
    >
      {/* 상품 이미지 */}
      <div className={`${imageSize} bg-white shadow-inner rounded-md overflow-hidden`}>
        <Image
          // 서버에서 받은 경로 조합
          src={`/files/febc13-final14-emjf/${order.image.path}`}
          alt={order.title}
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </div>

      {/* 텍스트 정보 영역 */}
      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-bold text-black">{order.status}</p>
          <p className="text-[12px] text-[var(--color-poten-gray-2)]">{order.date}</p>
          <p className="text-[14px] text-black mt-1">{order.title}</p>
          <p className="text-[16px] font-bold text-black">{order.price}</p>
        </div>

        {/* 상세보기 / 리뷰쓰기 버튼 */}
        <div className="mt-2 flex justify-between items-center">
          <Link
            href={`/list/${order.productId}`} // 상품 상세 페이지 링크
            className="flex items-center gap-1 text-sm text-[var(--color-poten-red)]"
          >
            상세보기
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <button className="h-[26px] px-3 rounded-full border border-[var(--color-poten-red)] text-sm text-[var(--color-poten-red)] font-medium">
            리뷰쓰기
          </button>
        </div>
      </div>
    </div>
  );
}
