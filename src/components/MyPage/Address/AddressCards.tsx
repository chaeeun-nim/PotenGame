'use client';

import { useState, useEffect } from 'react';
import type { MyAddress } from '@/types/MyAddress';
import useUserStore from '@/zustand/userStore';
import { useMyModalStore } from '@/zustand/myModal';
import AddressModal from './AddressModal';
import { useUserAddress } from '@/zustand/userAddress';

// 환경 변수에서 API URL과 Client ID 추출
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type Props = {
  addresses: MyAddress[];
  size: 'lg' | 'md' | 'sm'; // 카드 크기 지정용
};

export default function AddressCards({ addresses, size }: Props) {
  const { user, setUser } = useUserStore(); // 전역 상태에서 유저 정보 및 setter
  const { isAddressModalOpen, openAddressModal } = useMyModalStore(); // 모달 상태 제어
  const [selectedAddress, setSelectedAddress] = useState<MyAddress | null>(null); // 수정용 선택 주소
  const { fetchAddresses } = useUserAddress();
  const { closeAddressModal } = useMyModalStore();

  // 전역 상태에서 토큰 추출 및 타입 단언
  const token = user?.token?.accessToken as string | undefined;

  // 모달이 닫힐 때 선택된 주소 초기화
  useEffect(() => {
    if (!isAddressModalOpen) {
      setSelectedAddress(null);
    }
  }, [isAddressModalOpen]);

  // 사이즈별 텍스트 크기 설정
  const text = {
    lg: ['16px', '14px', '13px'],
    md: ['15px', '13px', '12px'],
    sm: ['14px', '12px', '11px'],
  }[size];

  // 버튼/카드 radius 설정
  const radius = {
    lg: 'rounded-[2px]',
    md: 'rounded-[2px]',
    sm: 'rounded-[1px]',
  }[size];

  // 기본 배송지로 설정
  const handleSetDefaultAddress = async (selectedId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address) || !token) return;

    // 모든 주소의 isDefault를 false로 변경하고 선택된 주소만 true로 설정
    const updated = user.extra.address.map((addr) => ({
      ...addr,
      isDefault: addr.id === selectedId,
    }));

    try {
      const res = await fetch(`${API_URL}/user/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Client-ID': CLIENT_ID,
        },
        body: JSON.stringify({
          extra: {
            ...user.extra,
            address: updated,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.item); // 전역 상태 업데이트
      }
    } catch (err) {
      console.error('기본 배송지 설정 실패:', err);
    }
  };

  // 배송지 삭제
  const handleDeleteAddress = async (deleteId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address) || !token) return;

    const confirmDelete = window.confirm('이 배송지를 삭제하시겠습니까?');
    if (!confirmDelete) return;

    // 해당 ID 제외한 주소 목록 생성
    const updated = user.extra.address.filter(
  (addr) => Number(addr.id) !== Number(deleteId)
  );

    try {
      const res = await fetch(`${API_URL}/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Client-ID': CLIENT_ID,
        },
        body: JSON.stringify({
          extra: {
            ...user.extra,
            address: updated,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.item); // 전역 상태 업데이트
        await fetchAddresses(user._id.toString(), token); // 주소 목록 최신화
        closeAddressModal(); // 모달 닫기
        alert('배송지가 삭제되었습니다.'); // 알림 표시
      }
    } catch (err) {
      console.error('배송지 삭제 실패:', err);
    }
  };

  // 배송지 선택 상태 변경
  const handleSelectAddress = async (selectedId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address) || !token) return;

    const updated = user.extra.address.map((addr) => ({
      ...addr,
      isSelected: addr.id === selectedId,
    }));

    try {
      const res = await fetch(`${API_URL}/users/${user._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Client-ID': CLIENT_ID,
        },
        body: JSON.stringify({
          extra: {
            ...user.extra,
            address: updated,
          },
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.item); // 전역 상태 업데이트
      }
    } catch (err) {
      console.error('배송지 선택 실패:', err);
    }
  };

  // 최대 5개까지 등록 가능 여부 판단
  const isFull = addresses.length >= 5;

  return (
    <>
      {/* 배송지 카드 리스트 */}
      {addresses.length > 0 &&
       addresses.map((addr) => (
        <div
          key={addr.id}
          className={`border border-[var(--color-poten-gray-1)] bg-[var(--color-poten-snowgray1)] p-4 mb-4 ${radius}`}
        >
          {/* 카드 상단: 이름, 기본배송지/선택됨 표시 */}
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold" style={{ fontSize: text[0] }}>
                {addr.name}
              </p>
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
              <p
                className="font-semibold text-[var(--color-poten-red)]"
                style={{ fontSize: text[1] }}
              >
                ✔ 선택됨
              </p>
            )}
          </div>

          {/* 카드 본문: 주소 정보 */}
          <p className="text-black" style={{ fontSize: text[1] }}>
            {addr.value ?? '주소 정보 없음'}
          </p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>
            ({addr.addressNumber ?? '우편번호 없음'})
          </p>
          <p className="text-gray-400" style={{ fontSize: text[2] }}>
            수취인 {addr.phone || user?.phone || '미입력'}
          </p>

          {/* 버튼 그룹 */}
          <div
            className={`flex ${size === 'sm' ? 'justify-start' : 'justify-end'} gap-2 mt-3`}
          >
            {/* 삭제 버튼 */}
            <button
              onClick={() => handleDeleteAddress(addr.id)}
              className={`
                text-[12px] md:text-[14px]
                px-2 md:px-4
                py-[2px] md:py-[6px]
                border border-gray-300
                text-gray-600
                rounded-sm md:rounded
                whitespace-nowrap
                w-full md:w-auto
              `}
            >
              삭제
            </button>


            {/* 수정 버튼: 모달 열기 */}
            <button
              onClick={() => {
                setSelectedAddress(addr);
                openAddressModal();
              }}
              className={`
                text-[12px] md:text-[14px]
                px-2 md:px-4
                py-[2px] md:py-[6px]
                border border-black
                text-gray-800
                rounded-sm md:rounded
                whitespace-nowrap
                w-full md:w-auto
              `}
            >
              수정
            </button>

            {/* 기본배송지로 변경 버튼 */}
            {!addr.isDefault && (
              <button
                onClick={() => handleSetDefaultAddress(addr.id)}
                className={`
                  border border-[var(--color-poten-red)]
                  text-[12px] md:text-[14px]
                  px-2 md:px-4
                  py-[2px] md:py-[6px]
                  text-[var(--color-poten-red)]
                  rounded-sm md:rounded
                  whitespace-nowrap
                  w-full md:w-auto
                `}
              >
                기본배송지로 변경
              </button>
            )}

            {/* 선택 버튼 */}
            {!addr.isSelected && (
             <button
              onClick={() => handleSelectAddress(addr.id)}
              className={`
                text-[12px] md:text-[14px]
                px-2 md:px-4
                py-[2px] md:py-[6px]
                border border-blue-400
                text-blue-600
                rounded-sm md:rounded
                whitespace-nowrap
                w-full md:w-auto
              `}
            >
              선택
            </button>
            )}
          </div>
        </div>
      ))}

      {/* 신규 배송지 등록 버튼 */}
      <div className="flex justify-center md:justify-end mt-6">
        <button
          onClick={() => {
            setSelectedAddress(null); // 새로운 주소 등록을 위한 초기화
            openAddressModal(); // 모달 열기
          }}
          disabled={isFull}
          className={`w-full md:w-auto font-semibold rounded-sm py-3 px-6 text-[14px] ${
            isFull
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[var(--color-poten-red)] text-white'
          }`}
        >
          신규 배송지 등록하기
        </button>
      </div>

      {/* 주소 등록/수정 모달 컴포넌트 */}
      <AddressModal selectedAddress={selectedAddress} />
    </>
  );
}
