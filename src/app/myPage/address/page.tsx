// 'use client';

// import React from 'react';

// const addresses = [
//   {
//     id: 1,
//     label: '우리집',
//     address: '서울특별시 강남구 부잣집마을로(부자동, 부자 아파트) 204동 4501호',
//     zip: '34505',
//     phone: '010-1234-5678',
//     isDefault: true,
//     isSelected: true,
//   },
//   {
//     id: 2,
//     label: '회사',
//     address: '경기도 성남시 분당구 정자동 95, NAVER 1784 (우)13561',
//     zip: '34505',
//     phone: '010-1234-5678',
//     isDefault: false,
//     isSelected: false,
//   },
// ];

// export default function AddressList() {
//   return (
//     <>
//       {/* PC 전용 */}
//       <section className="hidden xl:block bg-white rounded-lg -mt-6 mb-8">
//         {/* 배송 주소록 헤더 */}
//         <div className="flex items-end gap-2 mb-4">
//           <div className="w-[4px] h-[23px] bg-[var(--color-poten-red)] rounded-sm" />
//           <h2 className="text-[18px] font-semibold text-black">배송 주소록</h2>
//         </div>
//         <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-8" />

//         {/* 주소 목록 */}
//         {addresses.map((addr) => (
//           <div
//             key={addr.id}
//             className="border border-[var(--color-poten-gray-1)] bg-[var(--color-poten-snowgray1)] p-6 mb-4 relative"
//           >
//             <div className="flex justify-between mb-2">
//               <div className="flex items-center gap-2">
//                 <p className="text-[16px] font-semibold">{addr.label}</p>
//                 {addr.isDefault && (
//                   <span className="text-[12px] px-2 py-[2px] rounded-full bg-[var(--color-poten-red)] text-white font-medium">
//                     기본배송지
//                   </span>
//                 )}
//               </div>
//               {addr.isSelected && (
//                 <p className="text-[14px] font-semibold text-[var(--color-poten-red)]">✔ 선택됨</p>
//               )}
//             </div>
//             <p className="text-[14px] text-black">{addr.address}</p>
//             <p className="text-[13px] text-gray-400">({addr.zip})</p>
//             <p className="text-[13px] text-gray-400">수취인 {addr.phone}</p>

//             {/* 버튼 영역 */}
//             <div className="flex justify-end gap-2 mt-4">
//               <button className="border px-4 py-1 text-sm rounded-[2px] text-gray-500 border-poten-gray-1">
//                 삭제
//               </button>
//               <button className="border px-4 py-1 text-sm rounded-[2px] text-gray-500 border-poten-black">
//                 수정
//               </button>
//               {!addr.isDefault && (
//                 <button className="border px-4 py-1 text-sm rounded-[2px] text-[var(--color-poten-red)] border-[var(--color-poten-red)]">
//                   기본배송지로 변경
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* 등록 버튼 */}
//         <div className="flex justify-end mt-6">
//           <button className="bg-[var(--color-poten-red)] text-white font-semibold rounded-md px-6 py-3 text-[14px]">
//             신규 배송지 등록하기
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

'use client';

import MyPageSide from '@/components/MyPage/MyPageSide';
import React from 'react';

const addresses = [
  {
    id: 1,
    label: '우리집',
    address: '서울특별시 강남구 부잣집마을로(부자동, 부자 아파트) 204동 4501호',
    zip: '34505',
    phone: '010-1234-5678',
    isDefault: true,
    isSelected: true,
  },
  {
    id: 2,
    label: '회사',
    address: '경기도 성남시 분당구 정자동 95, NAVER 1784 (우)13561',
    zip: '34505',
    phone: '010-1234-5678',
    isDefault: false,
    isSelected: false,
  },
];

export default function AddressList() {
  return (
    <>

      <MyPageSide variant="mobileOnly" />

      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <Header />
        <AddressCards size="lg" />
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <Header textSize="16px" barHeight="20px" />
        <AddressCards size="md" />
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <Header textSize="15px" barHeight="18px" />
        <AddressCards size="sm" />
      </section>
    </>
  );
}

// 공통 헤더
function Header({
  textSize = '18px',
  barHeight = '23px',
}: {
  textSize?: string;
  barHeight?: string;
}) {
  return (
    <>
      <div className="flex items-end gap-2 mb-4">
        <div
          className="bg-[var(--color-poten-red)] rounded-sm"
          style={{ width: '4px', height: barHeight }}
        />
        <h2 className={`font-semibold text-black`} style={{ fontSize: textSize }}>
          배송 주소록
        </h2>
      </div>
      <div className="w-full border-t border-[var(--color-poten-gray-2)] mb-6" />
    </>
  );
}

// 주소 카드 렌더링
function AddressCards({ size }: { size: 'lg' | 'md' | 'sm' }) {
  const text = {
    lg: ['16px', '14px', '13px'],
    md: ['15px', '13px', '12px'],
    sm: ['14px', '12px', '11px'],
  }[size];

  const buttonPad = {
    lg: 'px-4 py-1',
    md: 'px-3 py-[2px]',
    sm: 'px-2 py-[2px]',
  }[size];

  const radius = {
    lg: 'rounded-[2px]',
    md: 'rounded-[2px]',
    sm: 'rounded-[1px]',
  }[size];

  return (
    <>
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`border border-[var(--color-poten-gray-1)] bg-[var(--color-poten-snowgray1)] p-4 mb-4 ${radius}`}
        >
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className={`font-semibold`} style={{ fontSize: text[0] }}>{addr.label}</p>
              {addr.isDefault && (
                <span
                  className="px-2 py-[2px] rounded-full bg-[var(--color-poten-red)] text-white font-medium"
                  style={{ fontSize: text[2] }}
                >
                  기본배송지
                </span>
              )}
            </div>
            {addr.isSelected && (
              <p className="font-semibold text-[var(--color-poten-red)]" style={{ fontSize: text[1] }}>
                ✔ 선택됨
              </p>
            )}
          </div>
          <p className="text-black" style={{ fontSize: text[1] }}>{addr.address}</p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>({addr.zip})</p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>수취인 {addr.phone}</p>

          {/* 버튼 영역 */}
          <div className={`flex ${size === 'sm' ? 'justify-start' : 'justify-end'} gap-2 mt-3`}>
            <button className={`border text-sm text-gray-500 border-poten-gray-1 ${buttonPad} ${radius}`}>
              삭제
            </button>
            <button className={`border text-sm text-gray-500 border-poten-black ${buttonPad} ${radius}`}>
              수정
            </button>
            {!addr.isDefault && (
              <button className={`border text-sm text-[var(--color-poten-red)] border-[var(--color-poten-red)] ${buttonPad} ${radius}`}>
                기본배송지로 변경
              </button>
            )}
          </div>
        </div>
      ))}

      {/* 등록 버튼 */}
      <div className="flex justify-center md:justify-end mt-6">
        <button className="w-full md:w-auto bg-[var(--color-poten-red)] text-white font-semibold rounded-sm py-3 px-6 text-[14px]">
          신규 배송지 등록하기
        </button>
      </div>

    </>
  );
}
