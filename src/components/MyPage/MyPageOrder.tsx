'use client';

import React, { useEffect, useState } from 'react';
import useUserStore from '@/zustand/userStore';

const orderSteps = ['결제전', '상품준비중', '배송중', '배송완료'] as const;
type OrderStep = typeof orderSteps[number];

type Order = {
  state: string;
};

export default function MyPageOrder() {
  const user = useUserStore((state) => state.user);

  const [statusCounts, setStatusCounts] = useState<Record<OrderStep, number>>({
    결제전: 0,
    상품준비중: 0,
    배송중: 0,
    배송완료: 0,
  });

  useEffect(() => {
    if (!user || !user?._id || !user?.token?.accessToken) {
      console.warn('⛔️ user 또는 토큰 정보 없음, 요청 중단');
      return;
    }

    const fetchOrders = async () => {
      console.log('user:', user);
      console.log('userId:', user._id);
      console.log('accessToken:', user.token.accessToken);

      try {
        const res = await fetch(`/api/orders/${user._id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token.accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();
        console.log('응답 데이터:', data);

        if (!data.ok || !Array.isArray(data.item)) {
          console.error('API 응답 오류:', data);
          return;
        }

        const stepMap: Record<string, OrderStep> = {
          OS010: '결제전',
          OS020: '상품준비중',
          OS030: '배송중',
          OS040: '배송완료',
        };

        const counts: Record<OrderStep, number> = {
          결제전: 0,
          상품준비중: 0,
          배송중: 0,
          배송완료: 0,
        };

        data.item.forEach((order: Order) => {
          const step = stepMap[order.state];
          if (step) counts[step]++;
        });

        console.log('상태별 주문 수:', counts);
        setStatusCounts(counts);
      } catch (err) {
        console.error('주문 데이터를 불러오지 못했습니다:', err);
      }
    };

    fetchOrders();
  }, [user]);

  // 조건부 렌더링: user 없으면 메시지 출력
  if (!user) {
    return (
      <div className="text-center text-gray-500 py-10">
        로그인 후 주문처리 현황을 확인할 수 있습니다.
      </div>
    );
  }



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
  count: number | string;
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
