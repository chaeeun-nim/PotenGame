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

  // 주문 상태 요약 데이터 → 상태별 count로 분류
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
            <React.Fragment key={label}>
              <StatusItem label={label} count={statusCounts[label]} size="xl" />
              {index < 3 && <Arrow size="xl" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white pt-6 py-12 px-4 w-full">
        <div className="w-full max-w-[895px] mx-auto">
          <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />
          <div className="flex justify-center items-end gap-4">
            {orderSteps.map((label, index) => (
              <React.Fragment key={label}>
                <StatusItem label={label} count={statusCounts[label]} size="md" />
                {index < 3 && <Arrow size="md" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden w-full bg-white py-6 px-4">
        <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />
        <div className="flex justify-center items-end gap-4">
          {orderSteps.map((label, index) => (
            <React.Fragment key={label}>
              <StatusItem label={label} count={statusCounts[label]} size="sm" />
              {index < 3 && <Arrow size="sm" />}
            </React.Fragment>
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
}: {
  label: string;
  count: number;
  size: 'xl' | 'md' | 'sm';
}) {
  const textSize = {
    xl: 'text-[28px] sm:text-5xl md:text-6xl xl:text-8xl',
    md: 'text-[28px] sm:text-4xl md:text-5xl',
    sm: 'text-3xl sm:text-4xl',
  }[size];

  const width = {
    xl: 'w-[100px]',
    md: 'w-[65px]',
    sm: 'w-[65px]',
  }[size];

  const color = label === '배송완료' ? 'text-[var(--color-poten-red)]' : 'text-[var(--color-poten-gray-2)]';

  return (
    <div className={`flex flex-col items-center ${width} shrink-0`}>
      <span className="text-sm text-black">{label}</span>
      <span className={`${textSize} font-bold leading-none ${color}`}>{count}</span>
    </div>
  );
}

function Arrow({ size }: { size: 'xl' | 'md' | 'sm' }) {
  const arrowSize = {
    xl: 'text-[40px]',
    md: 'text-[18px]',
    sm: 'text-[20px]',
  }[size];

  return <span className={`${arrowSize} text-[var(--color-poten-gray-2)]`}>›</span>;
}
