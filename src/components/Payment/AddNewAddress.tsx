'use client';

import useOrderSotre from '@/zustand/orderStore';
import { useState } from 'react';
import { Iorder } from '@/types/order';

export default function AddNewAddress({
  ModalCloseHandle,
  formRef,
}: {
  ModalCloseHandle: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}) {
  const [addressInputError, setAddressInputError] = useState(false);
  const [addressNumberInputError, setAddressNumberInputError] = useState(false);
  const { updateOrder } = useOrderSotre();

  const submitAddressHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAddress = formData.get('newAddress')?.toString().trim();
    const newAddressNumber = formData.get('newAddressNumber')?.toString().trim();
    const newAddressName = formData.get('newAddressName')?.toString().trim();

    if (!newAddress || newAddress.length === 0) {
      setAddressInputError(true);
      console.log('주소실패');
    } else {
      setAddressInputError(false);
    }

    if (
      !newAddressNumber ||
      !/^\d+$/.test(newAddressNumber) ||
      newAddressNumber.length > 6
    ) {
      setAddressNumberInputError(true);
    } else {
      setAddressInputError(false);
    }

    if (
      newAddressNumber &&
      /^\d+$/.test(newAddressNumber) &&
      newAddressNumber.length <= 6 &&
      newAddress &&
      newAddress.length > 0
    ) {
      updateOrder((prev: Iorder) => ({
        ...prev,
        address: {
          addressNumber: Number(newAddressNumber),
          name: newAddressName as string,
          value: newAddress as string,
        },
      }));
      if (formRef) formRef.current?.reset();
      ModalCloseHandle();
    }
  };

  return (
    <>
      <form onSubmit={submitAddressHandle} className="flex flex-col gap-4" ref={formRef}>
        <input type="hidden" name="newAddressName" defaultValue="신규배송지" />
        <div className="flex flex-col">
          <label htmlFor="newAddress" className="text-4 font-bold mb-2">
            주소<span className="text-poten-red">*</span>
          </label>
          <input
            type="text"
            id="newAddress"
            name="newAddress"
            placeholder="도착 배송주소를 입력해주세요."
            className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[16px]
                placeholder:text-poten-gray-2 text-poten-black"
          />
          {addressInputError ? (
            <p>도착 배송지의 주소를 입력해주세요.</p>
          ) : (
            <span className="h-[24px]"></span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="newAddressNumber" className="text-4 font-bold mb-2">
            우편번호<span className="text-poten-red">*</span>
          </label>
          <input
            type="text"
            id="newAddressNumber"
            name="newAddressNumber"
            placeholder="도착 배송지의 우편번호를 입력해주세요."
            className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[16px]
                placeholder:text-poten-gray-2 text-poten-black appearance-none "
          />
          {addressNumberInputError ? (
            <p>우편번호 숫자 최대 6글자 이상 입력해주세요.</p>
          ) : (
            <span className="h-[24px]"></span>
          )}
        </div>
        <button
          type="submit"
          className="border-2 py-[4px] px-[14px] self-end w-[60px] rounded-[4px] border-poten-gray-1">
          저장
        </button>
      </form>
    </>
  );
}
