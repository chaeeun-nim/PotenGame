'use client';

import React from 'react';

const orderSteps = ['결제전', '상품준비중', '배송중', '배송완료'];

export default function MyPageOrder() {
  return (
    <>
    
     {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg mb-10 px-4">
        <SectionHeader title="주문처리 현황" subtitle="(최근 6개월 기준)" />

        <div className="flex justify-center items-end gap-6 max-w-[700px] mx-auto">
          {orderSteps.map((label, index) => (
            <React.Fragment key={label}>
              <StatusItem label={label} count={label === '배송완료' ? 8 : 0} size="xl" />
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
                  <StatusItem label={label} count={label === '배송완료' ? 2 : 0} size="md" />
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
              <StatusItem label={label} count={label === '배송완료' ? 2 : 0} size="sm" />
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
