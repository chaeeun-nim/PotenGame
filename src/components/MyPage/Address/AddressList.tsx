'use client';

import { useEffect, useState } from 'react';
import AddressHeader from './AddressHeader';
import AddressCards from './AddressCards';
import EmptyState from '@/components/MyPage/EmptyState';
import useUserStore from '@/zustand/userStore';
import { useUserAddress } from '@/zustand/userAddress'; // 전역 주소 store 사용

export default function AddressList() {
  const user = useUserStore((state) => state.user);
  const { addresses, fetchAddresses } = useUserAddress(); // 전역 상태와 fetch 함수 사용

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = user?.token?.accessToken as string | undefined;

  // 주소 API 호출
  useEffect(() => {
    const fetch = async () => {
      const userId = user?._id;
      if (!token || !userId) {
        console.warn('토큰 또는 userId 누락');
        setLoading(false);
        return;
      }

    try {
        await fetchAddresses(`${userId}`, token);
      } catch (err) {
        console.error('주소 API 호출 오류:', err);
        setError('주소를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

  fetch();
  }, [user?._id, token, fetchAddresses]);

  // 상태 반영 후 주소가 없는 경우 에러 메시지 출력
  useEffect(() => {
    if (!loading && addresses.length === 0) {
      setError('등록된 주소가 없습니다.');
    }
  }, [addresses, loading]);

  return (
    <>
      {/* PC 화면용 (화면 너비 ≥ 1280px) */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader />
        {loading ? (
          <p className="text-sm text-gray-400 px-2 py-4">로딩 중입니다...</p>
        ) : error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          <AddressCards addresses={addresses} size="lg" />
        )}
      </section>

      {/* 태블릿 화면용 (768px ≤ 너비 < 1280px) */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="16px" barHeight="20px" />
        {loading ? (
          <p className="text-sm text-gray-400 px-2 py-4">로딩 중입니다...</p>
        ) : error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          <AddressCards addresses={addresses} size="md" />
        )}
      </section>

      {/* 모바일 화면용 (너비 < 768px) */}
      <section className="block md:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="15px" barHeight="18px" />
        {loading ? (
          <p className="text-sm text-gray-400 px-2 py-4">로딩 중입니다...</p>
        ) : error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          <AddressCards addresses={addresses} size="sm" />
        )}
      </section>
    </>
  );
}
