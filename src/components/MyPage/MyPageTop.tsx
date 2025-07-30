'use client';

import useUserStore from '@/zustand/userStore'; // 실제 전역 상태에서 가져오는 경우
// import { Iuser } from '@/types/user'; // 필요 시 유지

export default function MyPageTop() {
  const user = useUserStore((state) => state.user); // 전역 상태에서 유저 정보 가져옴

  // 유저 정보 구조 분해
  const { membershipClass, purchases = 0 } = user?.extra ?? {};
  const isVip = membershipClass === 'MC02';
  const badgeLabel = isVip ? '단골' : '일반';
  const remaining = Math.max(3 - purchases, 0);
  const userName = user?.name ?? '사용자';

  return (
    <>
      {/* PC*/}
      <div className="hidden xl:block w-full bg-[var(--color-poten-bluegray)] py-8">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4">
            {/* 유저 정보 */}
            <div className="col-span-1 sm:col-span-2 xl:col-span-6 h-[250px] bg-white rounded-lg shadow px-6 py-4 flex flex-col justify-between">
              <div>
                {/* 단골/일반 뱃지 */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[24px] font-semibold ${
                      isVip ? 'bg-[var(--color-poten-red)] text-white' : 'bg-poten-gray3 text-white'
                    }`}
                  >
                    {badgeLabel}
                  </div>
                  <h2 className="text-[28px] font-semibold">{userName} 님 &gt;</h2>
                </div>

                {/* 등급 안내 메시지 */}
                <p className="text-[15px] text-gray-600">
                  {isVip ? (
                    <span className="text-[var(--color-poten-red)] font-bold">단골 등급입니다.</span>
                  ) : (
                    <>
                      <span className="text-[var(--color-poten-red)] font-bold">단골 등급</span>을 위해서
                      <b className="text-black font-bold mx-1">{remaining}번 구매</b>가 필요합니다.
                    </>
                  )}
                </p>
              </div>
              <button className="self-start w-fit px-6 py-2 border border-poten-gray-1 rounded-full text-sm font-medium">등급별 혜택</button>
            </div>

            {/* 총 주문 */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-3 h-[250px] bg-white rounded-lg shadow px-6 py-4 flex flex-col justify-between">
              <div className="text-[18px] font-semibold text-gray-600">총 주문</div>
              <p className="text-5xl font-bold text-[#E5242B] mt-auto mb-3">
                {purchases}
                <span className="text-base text-black font-normal ml-1">회</span>
              </p>
              <button className="mt-4 w-fit px-6 py-2 border border-poten-gray-1 rounded-full text-sm font-medium">주문 배송 조회</button>
            </div>

            {/* 관심 상품 */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-3 h-[250px] bg-white rounded-lg shadow px-6 py-4 flex flex-col justify-between">
              <div className="text-[18px] font-semibold text-gray-600">관심 상품</div>
              <p className="text-5xl font-bold text-[#E5242B] mt-auto mb-3">
                8<span className="text-base text-black font-normal ml-1">개</span>
              </p>
              <button className="mt-4 w-fit px-6 py-2 border border-poten-gray-1 rounded-full text-sm font-medium">관심상품 조회</button>
            </div>
          </div>
        </div>
      </div>


            {/* 태블릿 */}
            <div className="hidden md:block xl:hidden w-full bg-[var(--color-poten-snowgray1)] px-6 pt-6 pb-8">
                <div className="flex items-center gap-3 mb-1">
                  {/* 뱃지 */}
                  <div
                    className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[24px] font-semibold ${
                      isVip ? 'bg-[var(--color-poten-red)] text-white' : 'bg-poten-gray3 text-white'
                    }`}
                  >
                    {badgeLabel}
                  </div>
                  <h2 className="text-[28px] font-semibold">{userName} 님 &gt;</h2>
                </div>

                {/* 메시지 */}
                <p className="text-sm text-gray-600 mt-4 mb-2 pl-1">
                  {isVip ? (
                    <span className="text-[var(--color-poten-red)] font-semibold">단골 등급입니다.</span>
                  ) : (
                    <>
                      <span className="text-[var(--color-poten-red)] font-semibold">단골 등급</span>을 위해서{' '}
                      <b>{remaining}번 구매</b>가 필요합니다.
                    </>
                  )}
                </p>
              <div className="flex justify-end mt-6 mb-5 pr-2">
                <button className="h-[32px] px-4 text-sm font-medium border rounded-full border-poten-gray-1 text-black">등급별 혜택</button>
              </div>

              {/* 주문/관심 상품 카드 */}
              <div className="grid grid-cols-2 gap-4 px-2">
                <div className="border rounded-md p-4 border-[var(--color-poten-gray-1)]">
                  <p className="text-sm font-medium text-black mb-1 pl-1">관심 상품</p>
                  <p className="text-[28px] text-[#E5242B] font-bold leading-none pl-1">8<span className="text-sm text-black font-medium ml-1">개</span></p>
                  <div className="flex justify-end mt-4">
                    <button className="px-3 py-1 text-sm text-black font-medium border border-poten-gray-1 rounded-full">관심상품 조회</button>
                  </div>
                </div>
                <div className="border rounded-md p-4 border-[var(--color-poten-gray-1)]">
                  <p className="text-sm font-medium text-black mb-1 pl-1">총 주문</p>
                  <p className="text-[28px] text-[#E5242B] font-bold leading-none pl-1">
                    {purchases}
                    <span className="text-sm text-black font-medium ml-1">회</span>
                  </p>

                  <div className="flex justify-end mt-4">
                    <button className="px-3 py-1 text-sm text-black border border-poten-gray-1 rounded-full">주문배송 조회</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 모바일 */}
            <div className="block md:hidden w-full bg-[var(--color-poten-snowgray1)] px-4 pt-6 pb-8">
              <div className="flex items-center gap-3 mb-1">
                {/* 뱃지 */}
                <div
                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-[24px] font-semibold ${
                    isVip ? 'bg-[var(--color-poten-red)] text-white' : 'bg-poten-gray3 text-white'
                  }`}
                >
                  {badgeLabel}
                </div>
                <h2 className="text-[28px] font-semibold">{userName} 님 &gt;</h2>
              </div>

              {/* 메시지 */}
              <p className="text-sm text-gray-600 mt-4 mb-2 pl-1">
                {isVip ? (
                  <span className="text-[var(--color-poten-red)] font-semibold">단골 등급입니다.</span>
                ) : (
                  <>
                    <span className="text-[var(--color-poten-red)] font-semibold">단골 등급</span>을 위해서{' '}
                    <b>{remaining}번 구매</b>가 필요합니다.
                  </>
                )}
              </p>
              <div className="flex justify-end mt-6 mb-5 pr-2">
                <button className="h-[32px] px-4 text-sm font-medium border rounded-full border-[var(--color-poten-gray-1)] text-black">등급별 혜택</button>
              </div>

              {/* 주문/관심 상품 카드 */}
              <div className="grid grid-cols-2 gap-4 px-2">
                <div className="border rounded-md p-4 border-[var(--color-poten-gray-1)]">
                  <p className="text-sm font-medium text-black mb-1 pl-1">관심 상품</p>
                  <p className="text-[28px] text-[#E5242B] font-bold leading-none pl-1">8<span className="text-sm text-black font-medium ml-1">개</span></p>
                </div>
                <div className="border rounded-md p-4 border-[var(--color-poten-gray-1)]">
                  <p className="text-sm font-medium text-black mb-1 pl-1">총 주문</p>
                  <p className="text-[28px] text-[#E5242B] font-bold leading-none pl-1">
                    {purchases}
                    <span className="text-sm text-black font-medium ml-1">회</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      }
