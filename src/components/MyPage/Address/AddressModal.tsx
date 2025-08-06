'use client';

import { useEffect, useState } from 'react';
import { MyAddress } from '@/types/MyAddress';
import { MyAddressForm } from '@/types/MyAddressForm';
import { useMyModalStore } from '@/zustand/myModal';
import useUserStore from '@/zustand/userStore';
import { useUserAddress } from '@/zustand/userAddress';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type Props = {
  selectedAddress?: MyAddress | null;
};

export default function AddressModal({ selectedAddress }: Props) {
  const { isAddressModalOpen, closeAddressModal } = useMyModalStore();
  const { user, setUser } = useUserStore();
  const { fetchAddresses } = useUserAddress();

  const [form, setForm] = useState<MyAddressForm>({
    id: Date.now().toString(), // string
    label: '',
    address: '',
    zip: '',
    phone: '',
    isDefault: false,
    isSelected: false,
  });

  // 수정 모드일 경우 form 채우기
  useEffect(() => {
    if (selectedAddress) {
      setForm({
        id: selectedAddress.id.toString(),
        label: selectedAddress.name,
        address: selectedAddress.value,
        zip: selectedAddress.addressNumber,
        phone: selectedAddress.phone,
        isDefault: selectedAddress.isDefault ?? false,
        isSelected: selectedAddress.isSelected ?? false,
      });
    }
  }, [selectedAddress]);

  // 신규일 경우 기본 전화번호 입력
  useEffect(() => {
    if (!selectedAddress && user?.phone) {
      setForm((prev) => ({
        ...prev,
        phone: user.phone as string, // 명시적으로 string으로 처리
      }));
    }
  }, [selectedAddress, user?.phone]);

  // 모달 닫히면 초기화
  useEffect(() => {
    if (!isAddressModalOpen && !selectedAddress) {
      setForm({
        id: Date.now().toString(),
        label: '',
        address: '',
        zip: '',
        phone: '',
        isDefault: false,
        isSelected: false,
      });
    }
  }, [isAddressModalOpen, selectedAddress]);

  // 입력 핸들러 (zip은 숫자만 허용)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'zip' && /[^0-9]/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!user || !user.extra || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    const token = user.token.accessToken;
    const userId = user._id;
    const { label, address, zip, phone } = form;
    if (!label || !address || !zip || !phone) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    // 새로운 주소 객체 생성
    const newAddress: MyAddress = {
      id: Number(form.id),
      name: form.label,
      value: form.address,
      addressNumber: form.zip,
      phone: form.phone,
      isDefault: form.isDefault,
      isSelected: form.isSelected,
    };

    // 기존 주소 목록 가공 (불완전한 구조를 보완)
    const raw = (user.extra.address ?? []) as unknown as Partial<MyAddress>[];

    const currentList: MyAddress[] = raw.map((addr) => ({
      id: addr.id ?? 0,
      name: addr.name ?? '',
      value: addr.value ?? '',
      phone: addr.phone ?? user.phone ?? '',
      addressNumber: String(addr.addressNumber ?? ''),
      isDefault: addr.isDefault ?? false,
      isSelected: addr.isSelected ?? false,
    }));

    // 기본배송지나 선택배송지 설정 시 기존 주소 업데이트
    const updatedList = selectedAddress
      ? currentList.map((addr) =>
          addr.id === Number(form.id)
            ? newAddress
            : {
                ...addr,
                isDefault: form.isDefault ? false : addr.isDefault,
                isSelected: form.isSelected ? false : addr.isSelected,
              },
        )
      : [
          ...currentList.map((addr) => ({
            ...addr,
            isDefault: form.isDefault ? false : addr.isDefault,
            isSelected: form.isSelected ? false : addr.isSelected,
          })),
          newAddress,
        ];

    const body = {
      extra: {
        ...user.extra,
        address: updatedList,
      },
    };

    try {
      const res = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'Client-ID': CLIENT_ID,
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.item);
        await fetchAddresses(userId.toString(), token);
        alert(selectedAddress ? '배송지가 수정되었습니다.' : '배송지가 등록되었습니다.');
        closeAddressModal();
      } else {
        alert('저장 실패: 서버 오류');
      }
    } catch (error) {
      console.error('저장 오류:', error);
      alert('네트워크 오류로 저장에 실패했습니다.');
    }
  };

  return (
    <div
      className={`${
        isAddressModalOpen ? 'fixed' : 'hidden'
      } top-0 left-0 w-full h-full bg-black/40 z-[99999] flex justify-center items-center`}>
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {selectedAddress ? '배송지 수정' : '신규 배송지 등록'}
        </h2>

        <input
          type="text"
          name="label"
          value={form.label}
          onChange={handleChange}
          placeholder="배송지 이름 (예: 집, 회사)"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="주소"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="zip"
          value={form.zip}
          onChange={handleChange}
          placeholder="우편번호"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="수취인 전화번호"
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="flex justify-end gap-2">
          <button onClick={closeAddressModal} className="px-4 py-2 border rounded">
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[var(--color-poten-red)] text-white rounded">
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
