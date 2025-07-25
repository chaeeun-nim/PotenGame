
'use client';

import Link from 'next/link';
import React from 'react';

export default function MyPage() {
  // 더미 주문 내역 데이터 
  const recentOrders = [
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

  return (
    <>
      {/* PC 전용 */}
  <section className="hidden xl:block bg-white rounded-lg">
    {/* 주문처리 현황 */}
    <section className="mb-10">
      <div className="flex items-end gap-2 mb-4">
        <div className="w-[4px] h-[23px] bg-[var(--color-poten-red)] rounded-sm" />
        <h2 className="text-[18px] font-semibold text-black">주문처리 현황</h2>
        <span className="text-[14px] text-[var(--color-poten-gray-2)]">(최근 6개월 기준)</span>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-8" />
      <div className="flex justify-center items-end gap-6 max-w-[700px] mx-auto">
        {['결제전', '상품준비중', '배송중', '배송완료'].map((label, index) => (
      <React.Fragment key={label}>
        <div className="flex flex-col items-center w-[70px] sm:w-[80px] md:w-[90px] xl:w-[100px] shrink-0">
          <span className="text-sm text-black">{label}</span>
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-[28px] sm:text-5xl md:text-6xl xl:text-8xl font-bold leading-none ${
                label === '배송완료'
                  ? 'text-[var(--color-poten-red)]'
                  : 'text-[var(--color-poten-gray-2)]'
              }`}
            >
              {label === '배송완료' ? '8' : '0'}
            </span>
            {index < 3 && (
              <span className="text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] text-[var(--color-poten-gray-2)] leading-none">›</span>
            )}
          </div>
        </div>
      </React.Fragment>
    ))}
    </div>
  </section>

        {/* 최근 주문 */}
        <section>
          <div className="flex items-end gap-2 mb-4">
            <div className="w-[4px] h-[23px] bg-[var(--color-poten-red)] rounded-sm" />
            <h2 className="text-[18px] font-semibold text-black">최근 주문 상품</h2>
            <span className="text-[14px] text-[var(--color-poten-gray-2)]">(최근 1개월 기준)</span>
          </div>
          <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-8" />
          {recentOrders.map((order) => (
            <div key={order.id} className="flex gap-6 p-6 mb-6 rounded-[8px] border bg-[var(--color-poten-snowgray1)]">
              <div className="flex flex-col items-start gap-2 w-[169px]">
                <p className="text-[20px] font-bold">{order.status}</p>
                <div className="w-[169px] h-[169px] bg-white shadow-inner rounded-md flex items-center justify-center">
                  {/* 이미지 자리 */}
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <p className="text-sm text-[var(--color-poten-gray-2)]">{order.date}</p>
                  <p className="mt-2 text-[16px] font-medium text-black">{order.title}</p>
                  <p className="text-[18px] font-bold text-black">{order.price}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-[var(--color-poten-red)] text-sm">
                    상세보기
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="h-[30px] px-4 rounded-full border text-sm font-medium border-[var(--color-poten-red)] text-[var(--color-poten-red)]">
                    리뷰쓰기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>


      {/* 태블릿 전용 */}
    <section className="hidden md:block xl:hidden bg-white py-12">
      {/* 주문처리 현황 */}
      <section className="-mt-10 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
          <h2 className="text-[16px] font-semibold text-black">주문처리 현황</h2>
          <span className="text-[14px] text-[var(--color-poten-gray-2)]">(최근 6개월 기준)</span>
        </div>
        <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />
        
        <div className="flex justify-center items-end gap-4 max-w-[700px] mx-auto">
          {['결제전', '상품준비중', '배송중', '배송완료'].map((label, index) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center w-[65px] shrink-0">
                <span className="text-[13px] text-black">{label}</span>
                <span  className={`text-[28px] sm:text-4xl md:text-5xl font-bold leading-none ${
                  label === '배송완료'
                    ? 'text-[var(--color-poten-red)]'
                    : 'text-[var(--color-poten-gray-2)]'
                }`}>
                  {label === '배송완료' ? '2' : '0'}
                </span>
              </div>
              {index < 3 && (
                <div className="text-[18px] text-[var(--color-poten-gray-2)]">›</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 최근 주문 상품 */}
      <section>
        <div className="flex items-end gap-2 mb-3">
          <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
          <div className="flex items-baseline gap-2">
            <h2 className="text-[16px] font-semibold text-black">최근 주문 상품</h2>
            <span className="text-[13px] text-[var(--color-poten-gray-2)]">(최근 1개월 기준)</span>
          </div>
        </div>
        <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />

        {/* 주문 내역 */}
        <div className="flex-1 flex flex-col px-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-[100px_1fr] gap-3 sm:gap-4 w-full bg-[var(--color-poten-snowgray1)] border border-[var(--color-poten-gray-1)] rounded-[8px] p-3 sm:p-4 mb-3 sm:mb-4"
            >
              {/* 이미지 */}
              <div className="w-full h-[100px] bg-white shadow-inner rounded-md flex items-center justify-center" />
              
              {/* 텍스트 정보 */}
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-bold text-black">{order.status}</p>
                  <p className="text-[12px] text-[var(--color-poten-gray-2)]">{order.date}</p>
                  <p className="text-[14px] text-black mt-1">{order.title}</p>
                  <p className="text-[16px] font-bold text-black">{order.price}</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[var(--color-poten-red)]">상세보기</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="h-[26px] px-3 rounded-full border border-[var(--color-poten-red)] text-sm text-[var(--color-poten-red)] font-medium">
                    리뷰쓰기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>


      {/* 모바일 전용 */}
      <section className="block md:hidden w-full bg-white py-6 px-4">
        <div className="flex flex-col">
          {/* 버튼 그룹 */}
          <div className="flex gap-2 mb-6">
            <Link href="/myPage/profile">
              <button className="w-[90px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)] cursor-pointer">
                회원정보수정
              </button>
            </Link>
            <Link href="/myPage/address">
              <button className="w-[95px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)] cursor-pointer">
                배송지 주소록
              </button>
            </Link>
            <Link href="/myPage/mypost">
              <button className="w-[70px] h-[25px] text-[14px] border border-[var(--color-poten-gray-2)] text-[var(--color-poten-gray-2)] rounded-[4px] hover:text-[var(--color-poten-red)] cursor-pointer">
                작성한 글
              </button>
            </Link>
          </div>

      {/* 주문처리 현황 */}
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
        <h2 className="text-[16px] font-semibold text-black">주문처리 현황</h2>
        <span className="text-[14px] text-[var(--color-poten-gray-2)]">(최근 6개월 기준)</span>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />
      <div className="flex justify-center items-end gap-4">
        {['결제전', '상품준비중', '배송중', '배송완료'].map((label, index) => (
          <React.Fragment key={label}>
            <div className="flex flex-col items-center w-[65px] shrink-0">
              <span className="text-[13px] text-black">{label}</span>
              <span
                className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-none ${
                  label === '배송완료'
                    ? 'text-[var(--color-poten-red)]'
                    : 'text-[var(--color-poten-gray-2)]'
                }`}
              >
                {label === '배송완료' ? '2' : '0'}
              </span>
            </div>
            {index < 3 && (
              <div className="text-[20px] text-[var(--color-poten-gray-2)]">›</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>

    {/* 최근 주문 상품 */}
    <section className="mb-6">
      <div className="flex items-end gap-2 mb-3">
        <div className="w-[4px] h-[20px] bg-[var(--color-poten-red)] rounded-sm" />
        <div className="flex items-baseline gap-2">
          <h2 className="text-[16px] font-semibold text-black">최근 주문 상품</h2>
          <span className="text-[13px] text-[var(--color-poten-gray-2)]">(최근 1개월 기준)</span>
        </div>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-4" />

      {/* 주문 내역 */}
      <div className="flex flex-col">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-[100px_1fr] gap-3 sm:gap-4 w-full bg-[var(--color-poten-snowgray1)] border border-[var(--color-poten-gray-1)] rounded-[8px] p-3 sm:p-4 mb-3 sm:mb-4"
          >
            {/* 이미지 */}
            <div className="w-full h-[100px] bg-white shadow-inner rounded-md flex items-center justify-center" />
            
            {/* 텍스트 정보 */}
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-bold text-black">{order.status}</p>
                <p className="text-[12px] text-[var(--color-poten-gray-2)]">{order.date}</p>
                <p className="text-[14px] text-black mt-1">{order.title}</p>
                <p className="text-[16px] font-bold text-black">{order.price}</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-[var(--color-poten-red)]">상세보기</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-[var(--color-poten-red)]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <button className="h-[26px] px-3 rounded-full border border-[var(--color-poten-red)] text-sm text-[var(--color-poten-red)] font-medium">
                  리뷰쓰기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
      </section>
    </>
  );
}






























