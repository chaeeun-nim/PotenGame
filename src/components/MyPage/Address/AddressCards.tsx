'use client';

import { useState, useEffect } from 'react';
import type { MyAddress } from '@/types/MyAddress';
import useUserStore from '@/zustand/userStore';
import { useMyModalStore } from '@/zustand/myModal';
import AddressModal from './AddressModal';

type Props = {
  addresses: MyAddress[];
  size: 'lg' | 'md' | 'sm';
};

export default function AddressCards({ addresses, size }: Props) {
  const { user, setUser } = useUserStore();
  const { isAddressModalOpen, openAddressModal } = useMyModalStore();
  const [selectedAddress, setSelectedAddress] = useState<MyAddress | null>(null);

  // 전역 상태에서 accessToken 추출
  const token = user?.token?.accessToken;

  // 모달이 닫힐 때 선택된 주소 초기화
  useEffect(() => {
    if (!isAddressModalOpen) {
      setSelectedAddress(null);
    }
  }, [isAddressModalOpen]);

  // 텍스트 크기 설정
  const text = {
    lg: ['16px', '14px', '13px'],
    md: ['15px', '13px', '12px'],
    sm: ['14px', '12px', '11px'],
  }[size];

  // 버튼 padding 설정
  const buttonPad = {
    lg: 'px-4 py-1',
    md: 'px-3 py-[2px]',
    sm: 'px-2 py-[2px]',
  }[size];

  // 테두리 radius 설정
  const radius = {
    lg: 'rounded-[2px]',
    md: 'rounded-[2px]',
    sm: 'rounded-[1px]',
  }[size];

  // 기본 배송지 설정 처리 함수
  const handleSetDefaultAddress = async (selectedId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address)) return;

    const updated = user.extra.address.map((addr) => ({
      ...addr,
      isDefault: addr.id === selectedId,
    }));

    const res = await fetch(`https://fesp-api.koyeb.app/user/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 세션스토리지 대신 상태에서 가져온 토큰 사용
      },
      body: JSON.stringify({
        extra: {
          ...user.extra,
          address: updated,
        },
      }),
    });

    const data = await res.json();
    if (data.ok) {
      setUser(data.item); // 전역 상태 갱신
    }
  };

  // 배송지 삭제 처리 함수
  const handleDeleteAddress = async (deleteId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address)) return;

    const confirmDelete = window.confirm('이 배송지를 삭제하시겠습니까?');
    if (!confirmDelete) return;

    const updated = user.extra.address.filter((addr) => addr.id !== deleteId);

    const res = await fetch(`https://fesp-api.koyeb.app/user/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 상태에서 꺼낸 토큰 사용
      },
      body: JSON.stringify({
        extra: {
          ...user.extra,
          address: updated,
        },
      }),
    });

    const data = await res.json();
    if (data.ok) {
      setUser(data.item); // 상태 업데이트
      alert('배송지가 삭제되었습니다.');
    }
  };

  // 배송지 선택 처리 함수
  const handleSelectAddress = async (selectedId: number) => {
    if (!user || !user.extra || !Array.isArray(user.extra.address)) return;

    const updated = user.extra.address.map((addr) => ({
      ...addr,
      isSelected: addr.id === selectedId,
    }));

    const res = await fetch(`https://fesp-api.koyeb.app/user/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 상태에서 꺼낸 토큰 사용
      },
      body: JSON.stringify({
        extra: {
          ...user.extra,
          address: updated,
        },
      }),
    });

    const data = await res.json();
    if (data.ok) {
      setUser(data.item); // 선택 상태 반영
    }
  };

  // 최대 5개 배송지 제한 여부
  const isFull = addresses.length >= 5;

  return (
    <>
      {/* 배송지 카드 리스트 */}
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`border border-[var(--color-poten-gray-1)] bg-[var(--color-poten-snowgray1)] p-4 mb-4 ${radius}`}
        >
          {/* 상단: 이름 + 기본배송지/선택됨 표시 */}
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold" style={{ fontSize: text[0] }}>{addr.name}</p>
              {addr.isDefault && (
                <span className="px-2 py-[2px] rounded-full bg-[var(--color-poten-red)] text-white font-medium" style={{ fontSize: text[2] }}>
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

          {/* 본문: 주소 상세 정보 */}
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
          <div className={`flex ${size === 'sm' ? 'justify-start' : 'justify-end'} gap-2 mt-3`}>
            <button
              onClick={() => handleDeleteAddress(addr.id)}
              className={`border text-sm text-gray-500 border-poten-gray-1 ${buttonPad} ${radius}`}
            >
              삭제
            </button>

            <button
              onClick={() => {
                setSelectedAddress(addr);
                openAddressModal();
              }}
              className={`border text-sm text-gray-500 border-poten-black ${buttonPad} ${radius}`}
            >
              수정
            </button>

            {!addr.isDefault && (
              <button
                onClick={() => handleSetDefaultAddress(addr.id)}
                className={`border text-sm text-[var(--color-poten-red)] border-[var(--color-poten-red)] ${buttonPad} ${radius}`}
              >
                기본배송지로 변경
              </button>
            )}

            {!addr.isSelected && (
              <button
                onClick={() => handleSelectAddress(addr.id)}
                className={`border text-sm text-blue-600 border-blue-400 ${buttonPad} ${radius}`}
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
            setSelectedAddress(null);
            openAddressModal();
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

      {/* 배송지 등록/수정 모달 */}
      <AddressModal selectedAddress={selectedAddress} />
    </>
  );
}
