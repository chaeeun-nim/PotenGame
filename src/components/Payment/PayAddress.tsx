'use client';

import useOrderSotre from '@/zustand/orderStore';
import useUserStore from '@/zustand/userStore';
import Image from 'next/image';
import ArrowIcon from '@/assets/icons/down.svg';
import AddressChoice from './AddressChoice';
import { useRef, useState } from 'react';
import Noaddress from './Noaddress';

import AddNewAddress from './AddNewAddress';

export default function PayAddress() {
  const { order, updateOrder } = useOrderSotre();
  const { user } = useUserStore();
  const [addressModal, setAddressModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const addressMemoHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateOrder((prev) => ({
      ...prev,
      extra: {
        ...prev.extra,
        parcelmemo: e.target.value,
      },
    }));
  };

  const ModalCloseHandle = () => {
    setAddressModal(false);
    document.body.style.overflow = '';
  };

  const ModalOpenHandle = () => {
    setAddressModal(true);
    document.body.style.overflow = 'hidden';
  };

  const userAddressList = user?.extra?.address.map((item) => (
    <AddressChoice
      key={item.id}
      addressName={item.name}
      userName={user.name}
      userphone={user.phone as string}
      addressNumber={item.addressNumber}
      addressValue={item.value}
      ModalCloseHandle={ModalCloseHandle}
    />
  ));

  if (!order && !user) return null;

  return (
    <>
      {/* 배송지 입력 모달 구간 */}
      <div
        className={`${addressModal ? 'fixed' : 'hidden'}   w-full z-[99999] h-full flex flex-col justify-center items-center top-0 left-0 bg-black/20`}>
        <div className="text-[18px] w-full md:w-[640px]  bg-poten-red font-bold text-white text-center py-2 md:py-4 md:rounded-t-[8px]">
          도착 배송지 설정
        </div>
        <div className="bg-white w-full md:w-[640px] mx-auto md:rounded-b-[8px] px-[16px] md:px-[26px] py-[24px] md:py-[40px]">
          <h5 className="font-bold text-[18px] md:text-[20px] mb-[16px]">
            신규 배송지 입력
          </h5>
          <AddNewAddress ModalCloseHandle={ModalCloseHandle} formRef={formRef} />

          <h5 className="font-bold text-[18px] md:text-[20px] mb-[10px] md:mb-[16px]">
            기존배송지 선택
          </h5>
          {user?.extra?.address.length && user?.extra?.address.length > 0 ? (
            <div className="overflow-y-scroll md:max-h-[200px] max-h-[150px]  shadow-inner bg-poten-snowgray2 p-2 md:p-4">
              {userAddressList}
            </div>
          ) : (
            <Noaddress />
          )}

          <button
            type="button"
            className="bg-poten-red text-white font-bold text-[18px] px-8 py-1 mt-4 block mx-auto rounded-[4px]"
            onClick={ModalCloseHandle}>
            닫기
          </button>
        </div>
      </div>

      {/* 배송지 */}
      <article
        className="xl:max-w-[894px] flex flex-col gap-[6px] leading-tight border-y-1 xl:border-1 border-poten-gray-1 bg-white mx-auto w-full
      py-6 px-4 md:p-[18px] xl:p-[28px]">
        <div className="w-full flex justify-between items-center">
          <h4 className="text-[18px] font-bold">
            {order.address.name ? order.address.name : '도착지'}({user?.name})
          </h4>
          <button
            onClick={ModalOpenHandle}
            className="border-2 py-[4px] px-[14px] rounded-[4px] border-poten-gray-1">
            {user?.extra?.address ? '변경' : '등록'}
          </button>
        </div>
        <p className="text-[14px] font-medium text-poten-gray-2">
          휴대폰 번호 {user?.phone}
        </p>
        {order.address.value ? (
          <p className="text-4 font-medium">{order.address.value}</p>
        ) : (
          <p>배송지를 등록해주세요.</p>
        )}

        {order.address.addressNumber ? (
          <p className="text-[14px] font-medium text-poten-gray-2">
            ({order.address.addressNumber})
          </p>
        ) : null}

        {/* -----< 배송메모 >----- */}
        <div className="relative">
          <label htmlFor="payAddress" className="sr-only">
            배송메모를 선택해주세요
          </label>
          <select
            name="payAddress"
            id="payAddress"
            onChange={addressMemoHandle}
            className="appearance-none mt-[16px] w-full px-4 py-4 border border-poten-gray-1 text-poten-gray-2 font-semibold rounded-[4px] leading-[14px] text-4">
            <option value="">배송 메모를 선택해주세요</option>
            <option value="부재 시 문 앞에 놓아주세요">부재 시 문 앞에 놓아주세요</option>
            <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
            <option value="배송 전 연락 주세요">배송 전 연락 주세요</option>
            <option value="벨 누르지 말아주세요">벨 누르지 말아주세요</option>
            <option value="택배함에 넣어주세요">택배함에 넣어주세요</option>
          </select>
          <Image
            src={ArrowIcon}
            width={16}
            height={16}
            className="absolute right-4 bottom-4 pointer-events-none"
            alt="배송 메모 선택"
          />
        </div>
      </article>

      {/* 배송지 */}
    </>
  );
}
