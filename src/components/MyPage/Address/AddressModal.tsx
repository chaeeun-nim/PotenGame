'use client';

import { useState, useEffect } from 'react';
import type { MyAddress } from '@/types/MyAddress';
import type { MyAddressForm } from '@/types/MyAddressForm';
import { useMyModalStore } from '@/zustand/myModal';
import useUserStore from '@/zustand/userStore';
import { useUserAddress } from '@/zustand/userAddress';

type Props = {
  selectedAddress?: MyAddress | null;
};

export default function AddressModal({ selectedAddress }: Props) {
  // 모달 상태
  const { isAddressModalOpen, closeAddressModal } = useMyModalStore();

  // 유저 상태 및 setter
  const { user, setUser } = useUserStore();

  // 주소 리스트 fetch 함수
  const { fetchAddresses } = useUserAddress();

  // 입력 폼 상태 초기화
  const [form, setForm] = useState<MyAddressForm>({
    id: Date.now(),
    label: '',
    address: '',
    zip: '',
    phone: '',
    isDefault: false,
    isSelected: false,
  });

  // 수정 모드일 경우 기존 주소값으로 초기화
  useEffect(() => {
    if (selectedAddress) {
      setForm({
        id: selectedAddress.id,
        label: selectedAddress.name,
        address: selectedAddress.value,
        zip: String(selectedAddress.addressNumber),
        phone: selectedAddress.phone ?? '',
        isDefault: selectedAddress.isDefault ?? false,
        isSelected: selectedAddress.isSelected ?? false,
      });
    }
  }, [selectedAddress]);

  // 신규 등록 시, 유저 전화번호를 기본값으로 세팅
  useEffect(() => {
    if (!selectedAddress && user?.phone) {
      setForm((prev) => ({
        ...prev,
        phone: user.phone ?? '',
      }));
    }
  }, [selectedAddress, user]);

  // 모달 닫힐 때 폼 초기화
  useEffect(() => {
    if (!isAddressModalOpen && !selectedAddress) {
      setForm({
        id: Date.now(),
        label: '',
        address: '',
        zip: '',
        phone: '',
        isDefault: false,
        isSelected: false,
      });
    }
  }, [isAddressModalOpen, selectedAddress]);

  // 입력 변경 처리 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // zip 필드는 숫자만 허용
    if (name === 'zip' && /[^0-9]/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 저장 버튼 클릭 시 실행
  const handleSave = async () => {
    if (!user || !user.extra) return;

    const token = user?.token?.accessToken; // 전역 상태에서 토큰 추출

    // 필수 항목 체크
    const { label, address, zip, phone } = form;
    if (!label || !address || !zip || !phone) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    // MyAddress 타입으로 변환
    const converted: MyAddress = {
      id: form.id,
      name: form.label,
      value: form.address,
      addressNumber: form.zip,
      phone: form.phone,
      isDefault: form.isDefault,
      isSelected: form.isSelected,
    };

    // 기존 주소 리스트 가져오기
    const currentList = (user.extra.address ?? []) as unknown as MyAddress[];

    // 수정 또는 추가 여부에 따라 리스트 업데이트
    const updatedList = selectedAddress
      ? currentList.map((addr) => (addr.id === form.id ? converted : addr))
      : [...currentList, converted];

    // PATCH 요청으로 주소 저장
    const res = await fetch(`https://fesp-api.koyeb.app/user/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 전역 상태에서 꺼낸 토큰 사용
      },
      body: JSON.stringify({
        extra: {
          ...user.extra,
          address: updatedList,
        },
      }),
    });

    const data = await res.json();

    // 저장 성공 시 상태 업데이트 및 모달 닫기
    if (data.ok && data.item) {
      setUser(data.item);
      alert(selectedAddress ? '배송지가 수정되었습니다.' : '배송지가 등록되었습니다.');

      await fetchAddresses(`${user._id}`, token || '');

      closeAddressModal();
    } else {
      alert('배송지 저장에 실패했습니다.');
    }
  };

  // 모달 렌더링
  return (
    <div
      className={`${
        isAddressModalOpen ? 'fixed' : 'hidden'
      } top-0 left-0 w-full h-full bg-black/40 z-[99999] flex justify-center items-center`}
    >
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {selectedAddress ? '배송지 수정' : '신규 배송지 등록'}
        </h2>

        {/* 배송지 이름 */}
        <input
          type="text"
          name="label"
          value={form.label}
          onChange={handleChange}
          placeholder="배송지 이름 (예: 집, 회사)"
          className="w-full mb-3 p-2 border rounded"
        />

        {/* 주소 */}
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="주소"
          className="w-full mb-3 p-2 border rounded"
        />

        {/* 우편번호 */}
        <input
          type="text"
          name="zip"
          value={form.zip}
          onChange={handleChange}
          placeholder="우편번호"
          className="w-full mb-3 p-2 border rounded"
        />

        {/* 수취인 전화번호 */}
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="수취인 전화번호"
          className="w-full mb-4 p-2 border rounded"
        />

        {/* 버튼 영역 */}
        <div className="flex justify-end gap-2">
          <button onClick={closeAddressModal} className="px-4 py-2 border rounded">
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[var(--color-poten-red)] text-white rounded"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
