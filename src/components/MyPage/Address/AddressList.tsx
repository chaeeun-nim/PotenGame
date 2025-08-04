'use client';

import { useEffect, useState } from 'react';
import AddressHeader from './AddressHeader';        // 섹션 상단 타이틀 및 구분선 UI
import AddressCards from './AddressCards';          // 주소 카드 리스트 UI
import EmptyState from '@/components/MyPage/EmptyState'; // 비어 있을 때 보여줄 안내 컴포넌트
import type { MyAddress } from '@/types/MyAddress'; // 주소 타입 정의

export default function AddressList() {
  // 주소 데이터를 저장할 상태
  const [addresses, setAddresses] = useState<MyAddress[]>([]);
  // 데이터 로딩 상태
  const [loading, setLoading] = useState(true);
  // 에러 메시지 상태
  const [error, setError] = useState<string | null>(null);

  // 컴포넌트 마운트 시 주소 API 호출
  useEffect(() => {
    const token = sessionStorage.getItem('token'); // 세션 스토리지에서 토큰 가져옴
    if (!token) {
      console.warn('세션에 토큰이 없습니다.');
      setLoading(false);
      return;
    }

    const fetchAddresses = async () => {
      try {
        const res = await fetch('https://fesp-api.koyeb.app/user/address', {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 토큰 포함
          },
        });

        const data = await res.json();
        console.log('주소 API 응답:', data); // 응답 구조 확인용 로그

        // 응답이 정상이고 item이 배열이면 주소 리스트 저장
        if (data.ok && Array.isArray(data.item)) {
          setAddresses(data.item);
        } else {
          setError('주소 데이터를 불러올 수 없습니다.');
        }
      } catch (err) {
        console.error('주소 API 호출 오류:', err);
        setError('주소를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchAddresses();
  }, []);

  return (
    <>
      {/* PC 전용 (화면 너비 xl 이상) */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader />
        {/* 에러 발생 시 에러 메시지 표시 */}
        {error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : 
        // 로딩이 끝났고 주소가 없으면 EmptyState 표시
        !loading && addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          // 주소가 있을 경우 주소 카드 리스트 표시
          <AddressCards addresses={addresses} size="lg" />
        )}
      </section>

      {/* 태블릿 전용 (화면 너비 md 이상 ~ xl 미만) */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="16px" barHeight="20px" />
        {error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : 
        !loading && addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          <AddressCards addresses={addresses} size="md" />
        )}
      </section>

      {/* 모바일 전용 (화면 너비 md 미만) */}
      <section className="block md:hidden bg-white rounded-lg -mt-2 mb-8 px-4">
        <AddressHeader textSize="15px" barHeight="18px" />
        {error ? (
          <p className="text-sm text-red-500 px-2 py-4">{error}</p>
        ) : 
        !loading && addresses.length === 0 ? (
          <EmptyState message="등록된 배송지가 없습니다." />
        ) : (
          <AddressCards addresses={addresses} size="sm" />
        )}
      </section>
    </>
  );
}
