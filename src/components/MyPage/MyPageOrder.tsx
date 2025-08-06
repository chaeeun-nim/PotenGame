'use client';

import React, { useEffect, useState } from 'react';
import { IOrderSummaryRes } from '@/types/myorder';

export default function MyPageOrder() {
  const [orderData, setOrderData] = useState<IOrderSummaryRes[]>([]);

  const orderSteps = ['결제전', '상품준비중', '배송중', '배송완료'] as const;

  const statusCounts: Record<(typeof orderSteps)[number], number> = {
    결제전: 0,
    상품준비중: 0,
    배송중: 0,
    배송완료: 0,
  };

  const stateToStepMap: Record<string, (typeof orderSteps)[number]> = {
    OS010: '결제전',
    OS020: '상품준비중',
    OS030: '배송중',
    OS040: '배송완료',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raw = sessionStorage.getItem('user');
        const parsed = JSON.parse(raw || '{}');
        const token = parsed?.state?.user?.token?.accessToken;

        if (!token) return;

        const res = await fetch('/api/myorder', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();
        if (json.ok) {
          setOrderData(json.item);
        }
      } catch (err) {
        console.error('주문 요약 정보를 불러오지 못했습니다.', err);
      }
    };

    fetchData();
  }, []);

   // API에서 받아온 주문 데이터를 카운트로 정리
  orderData.forEach((order) => {
    const step = stateToStepMap[order.state];
    if (step) statusCounts[step] += order.count;
  });

  return (
    <>
      {/* PC 전용 */}
     <section className="hidden xl:block bg-white rounded-lg mb-10 px-4">
        <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />
        <div className="flex justify-center items-end gap-6 max-w-[700px] mx-auto">
          {orderSteps.map((label, index) => (
            <StatusItem
              key={label}
              label={label}
              count={statusCounts[label]}
              size="xl"
              showArrow={index < orderSteps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white pt-6 py-12 px-4 w-full">
        <div className="w-full max-w-[895px] mx-auto">
          <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />
          <div className="flex justify-center items-end gap-4">
            {orderSteps.map((label, index) => (
              <StatusItem
                key={label}
                label={label}
                count={statusCounts[label]}
                size="md"
                showArrow={index < orderSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden w-full bg-white py-6 px-4">
        <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />
        <div className="flex justify-center items-end gap-4">
          {orderSteps.map((label, index) => (
            <StatusItem
              key={label}
              label={label}
              count={statusCounts[label]}
              size="sm"
              showArrow={index < orderSteps.length - 1}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <div className="flex items-end gap-2 mb-2">
        <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
        <h2 className="text-[16px] font-semibold text-black">{title}</h2>
        <span className="text-[14px] text-[var(--color-poten-gray-2)]">{subtitle}</span>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />
    </>
  );
}

function StatusItem({
  label,
  count,
  size,
  showArrow = false,
}: {
  label: string;
  count: number;
  size: 'xl' | 'md' | 'sm';
  showArrow?: boolean;
}) {
  
  const textSize = {
  xl: 'text-[28px] sm:text-5xl md:text-6xl xl:text-8xl',
  md: 'text-[28px] sm:text-4xl md:text-5xl',
  sm: 'text-3xl sm:text-4xl',
  }[size];

  const labelSize = {
  xl: 'text-base',
  md: 'text-[13px]',
  sm: 'text-[12px]',
  }[size];

  const arrowSize = {
    xl: 'text-[52px]',
    md: 'text-[40px]',
    sm: 'text-[32px]',
  }[size];

  const color = count > 0
  ? 'text-[var(--color-poten-red)]'
  : 'text-[var(--color-poten-gray-2)]';

  return (
    <div className="flex items-center gap-3">
      {/* 라벨 + 숫자 */}
      <div className="flex flex-col items-center">
        <span className={`${labelSize} text-black mb-1 whitespace-nowrap`}>{label}</span>
        <span className={`${textSize} font-bold leading-none ${color}`}>{count}</span>
      </div>
      {/* 오른쪽 화살표 */}
      {showArrow && (
    <div className="flex items-center h-full">
      <span className={`${arrowSize} text-[var(--color-poten-gray-2)] leading-none relative top-[10px]`}>›</span>
    </div>
  )}
</div>
  );
}
