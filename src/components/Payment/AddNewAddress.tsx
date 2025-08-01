'use client';

import useOrderSotre from '@/zustand/orderStore';
import { useEffect, useState } from 'react';
import { Iorder } from '@/types/payorder';
import Image from 'next/image';
import errorIcon from '@/assets/icons/erroricon.svg';

export default function AddNewAddress({
  ModalCloseHandle,
  formRef,
  addressModal,
}: {
  ModalCloseHandle: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  addressModal: boolean;
}) {
  const [addressInputError, setAddressInputError] = useState(false);
  const [addressInput, setAddressInput] = useState('');
  const [addressNumberInputError, setAddressNumberInputError] = useState(false);
  const [addressNumberInput, setAddressNumberInput] = useState('');
  const { updateOrder } = useOrderSotre();

  useEffect(() => {
    setAddressInputError(false);
    setAddressNumberInputError(false);
    setAddressInput('');
    setAddressNumberInput('');
  }, [addressModal]);

  const submitAddressHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAddress = formData.get('newAddress')?.toString().trim();
    const newAddressNumber = formData.get('newAddressNumber')?.toString().trim();
    const newAddressName = formData.get('newAddressName')?.toString().trim();

    if (!newAddress || newAddress.length === 0) {
      setAddressInputError(true);
    } else {
      setAddressInputError(false);
    }

    if (
      !newAddressNumber ||
      !/^\d+$/.test(newAddressNumber) ||
      newAddressNumber.length <= 5
    ) {
      setAddressNumberInputError(true);
    } else {
      setAddressNumberInputError(false);
    }

    if (
      newAddressNumber &&
      /^\d+$/.test(newAddressNumber) &&
      newAddressNumber.length >= 5 &&
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
      setAddressInput('');
      setAddressNumberInput('');
      ModalCloseHandle();
    }
  };

  const addressInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressInput(value);
    setAddressInputError(value.trim().length === 0);
  };
  const addressNumberInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNumbers = value.replace(/[^0-9]/g, '').slice(0, 6);
    setAddressNumberInput(onlyNumbers);
    setAddressNumberInputError(value.trim().length < 5);
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
            value={addressInput}
            onChange={(e) => {
              addressInputHandler(e);
            }}
            placeholder="도착 배송주소를 입력해주세요."
            className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[16px]
                placeholder:text-poten-gray-2 text-poten-black"
          />
          {addressInputError ? (
            <div className="flex gap-x-2 items-center">
              <Image
                className="w-4 pt-0.5"
                src={errorIcon}
                width={16}
                height={16}
                alt="에러아이콘"
              />
              <p className="text-poten-usedorange font-bold mt-1 text-[16px]">
                도착 배송지의 주소를 입력해주세요.
              </p>
            </div>
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
            value={addressNumberInput}
            onChange={(e) => {
              addressNumberInputHandler(e);
            }}
            placeholder="도착 배송지의 우편번호를 입력해주세요."
            className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[16px]
                placeholder:text-poten-gray-2 text-poten-black appearance-none "
          />
          {addressNumberInputError ? (
            <div className="flex gap-x-2 items-center">
              <Image
                className="w-4 pt-0.5"
                src={errorIcon}
                width={16}
                height={16}
                alt="에러아이콘"
              />
              <p className="text-poten-usedorange font-bold mt-1 text-[16px]">
                우편번호 숫자 최대 5글자 이상 입력해주세요.
              </p>
            </div>
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
