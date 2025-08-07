'use client';

import AddressHeader from './AddressHeader';
import AddressCards from './AddressCards';
import EmptyState from '@/components/MyPage/EmptyState';
import useUserStore from '@/zustand/userStore';
import type { MyAddress } from '@/types/MyAddress';

export default function AddressList() {
  const user = useUserStore((state) => state.user);

  // 주소 가공 (user.extra.address → MyAddress[])
  const raw = (user?.extra?.address ?? []) as unknown as Partial<MyAddress>[];
  const addresses: MyAddress[] = raw.map((addr) => ({
  id: addr.id ?? 0,
  name: addr.name ?? '',
  value: addr.value ?? '',
  phone: addr.phone ?? user?.phone ?? '',
  addressNumber: String(addr.addressNumber ?? ''),
  isDefault: addr.isDefault ?? false,
  isSelected: addr.isSelected ?? false,
}));

  const isEmpty = addresses.length === 0;

  return (
    <>
      {/* PC */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader />
        {isEmpty ? (
          <>
            <EmptyState message="등록된 배송지가 없습니다." />
            <AddressCards addresses={[]} size="lg" /> {/* 주소 없을 때도 버튼 보이게 렌더링 */}
          </>
        ) : (
          <AddressCards addresses={addresses} size="lg" />
        )}
      </section>

      {/* Tablet */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="16px" barHeight="20px" />
        {isEmpty ? (
          <>
            <EmptyState message="등록된 배송지가 없습니다." />
            <AddressCards addresses={[]} size="md" /> {/* 주소 없을 때도 버튼 보이게 렌더링 */}
          </>
        ) : (
          <AddressCards addresses={addresses} size="md" />
        )}
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="15px" barHeight="18px" />
        {isEmpty ? (
          <>
            <EmptyState message="등록된 배송지가 없습니다." />
            <AddressCards addresses={[]} size="sm" /> {/* 주소 없을 때도 버튼 보이게 렌더링 */}
          </>
        ) : (
          <AddressCards addresses={addresses} size="sm" />
        )}
      </section>
    </>
  );
}
