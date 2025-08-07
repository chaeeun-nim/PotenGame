'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import useUserStore from '@/zustand/userStore';
import { IRecentOrder } from '@/types/RecentOrder';
import EmptyState from '@/components/MyPage/EmptyState';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export default function MyPageRecent() {
  const { user, setUser } = useUserStore();
  const token = user?.token?.accessToken as string | undefined;

  const orders = user?.extra?.orders ?? [];

  useEffect(() => {
    if (!token || orders.length > 0) return; // 이미 있으면 요청 생략

    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_URL}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Client-ID': CLIENT_ID,
          },
        });

        const json = await res.json();
        if (json.ok) {
          const item = json.item;
          const normalized = Array.isArray(item) ? item : [item];

          const deduped = normalized.filter(
            (order, index, self) => index === self.findIndex((o) => o.id === order.id),
          );

          const updatedUser = {
            ...user!,
            extra: {
              ...user!.extra,
              purchases: user?.extra?.purchases ?? 0,
              nickname: user?.extra?.nickname ?? '',
              birthday: user?.extra?.birthday ?? '',
              membershipClass: user?.extra?.membershipClass ?? 'MC01',
              address: user?.extra?.address ?? [],
              orders: deduped, // 중복 제거된 배열 사용
            },
          };
          setUser(updatedUser);
        } else {
          console.warn('❗ /orders API 응답 실패:', json);
        }
      } catch (err) {
        console.error('🚨 /orders 요청 실패:', err);
      }
    };

    fetchOrders();
  }, [token]);

  const visibleOrders = orders.slice(0, 2); // 최대 2개 노출

  return (
    <>
      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg px-4 mb-8">
        <SectionHeader />
        {visibleOrders.length === 0 ? (
          <EmptyState />
        ) : (
          visibleOrders.map((order, index) => (
            <Card order={order} key={`lg-${order.id ?? index}`} size="lg" />
          ))
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
              {visibleOrders.map((order, index) => (
                <Card order={order} key={`md-${order.id ?? index}`} size="md" />
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
            {visibleOrders.map((order, index) => (
              <Card order={order} key={`sm-${order.id ?? index}`} size="sm" />
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
          <span className="text-[13px] text-[var(--color-poten-gray-2)]">
            (최근 1개월 기준)
          </span>
        </div>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />
    </>
  );
}

// 주문 상태 코드 → 한글 매핑
const stateToLabel: Record<string, string> = {
  OS010: '결제전',
  OS020: '상품준비중',
  OS030: '배송중',
  OS040: '배송완료',
};
// 주문 카드 컴포넌트
function Card({ order, size }: { order: IRecentOrder; size: 'lg' | 'md' | 'sm' }) {
  const imageSize = size === 'lg' ? 'w-[169px] h-[169px]' : 'w-full h-[100px]';

  const layoutClass =
    size === 'lg'
      ? 'flex gap-6 p-6 mb-6'
      : 'grid grid-cols-[100px_1fr] gap-3 sm:gap-4 p-3 sm:p-4 mb-3 sm:mb-4';

  return (
    <div
      // 카드 배경 및 테두리, 반응형 레이아웃 클래스 조합
      className={`bg-[var(--color-poten-snowgray1)] border border-[var(--color-poten-gray-1)] rounded-[8px] ${layoutClass}`}>
      {/* 상품 이미지 */}
      <div className={`${imageSize} bg-white shadow-inner rounded-md overflow-hidden`}>
        {order.products?.length > 0 ? (
          <Image
            src={order.products[0].image.path}
            alt={order.products[0].image.originalname || order.products[0].name}
            width={160}
            height={160}
            className="w-full h-full object-contain"
            style={{ width: '100%', height: 'auto' }} // 명시적 비율 유지
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
            이미지 없음
          </div>
        )}
      </div>

      {/* 텍스트 정보 영역 */}
      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-bold text-black">{stateToLabel[order.state]}</p>
          <p className="text-[12px] text-[var(--color-poten-gray-2)]">
            {new Date(order.createdAt)
              .toLocaleDateString('ko-KR', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
              })
              .replace(/\./g, '.')
              .replace(/\s/g, '')}{' '}
            주문
          </p>
          <p className="text-[14px] text-black mt-1">{order.products[0].name}</p>
          <p className="text-[16px] font-bold text-black">
            {order.cost.total.toLocaleString()}원
          </p>
        </div>

        {/* 상세보기 / 리뷰쓰기 버튼 */}
        <div className="mt-2 flex justify-between items-center">
          <Link
            href={`/list/${order.products[0]._id}`} // 상품 상세 페이지 링크
            className="flex items-center gap-1 text-sm text-[var(--color-poten-red)]">
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
