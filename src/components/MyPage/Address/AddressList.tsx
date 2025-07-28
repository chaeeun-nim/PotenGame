'use client';

import AddressHeader from './AddressHeader';
import AddressCards from './AddressCards';

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

      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader />
        <AddressCards addresses={addresses} size="lg" />
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="16px" barHeight="20px" />
        <AddressCards addresses={addresses} size="md" />
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="15px" barHeight="18px" />
        <AddressCards addresses={addresses} size="sm" />
      </section>
    </>
  );
}
