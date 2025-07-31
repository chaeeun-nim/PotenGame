'use client';

import Image from 'next/image';
import { useState } from 'react';
import errorIcon from '@/assets/icons/erroricon.svg';
import { Iorder } from '@/types/payorder';
import useOrderSotre from '@/zustand/orderStore';

export default function PhonePay() {
  const [phonedNum, setPhonedNum] = useState(['', '']);
  const { updateOrder } = useOrderSotre();
  const [phoneNumError, setphoneNumError] = useState(true);
  const phoneNumHandle = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const onlyNumbers = e.currentTarget.value.replace(/[^0-9]/g, '');
    const newPhoneNum = [...phonedNum];
    newPhoneNum[i] = onlyNumbers;
    setPhonedNum(newPhoneNum);
    const isVailed = newPhoneNum.every((item) => item.length === 4);
    setphoneNumError(!isVailed);

    if (newPhoneNum.join(' ').length === 8) {
      updateOrder((prev: Iorder) => ({
        ...prev,
        payment: {
          ...prev.payment,
          pay_phone_num: `010${newPhoneNum.join(' ').slice(0, 3)}*****`,
        },
      }));
    }
  };
  return (
    <>
      <div className="w-full xl:max-w-[894px] mx-auto h-[300px] px-4 md:px-6 xl:px-0">
        <div className="max-w-[600px]">
          <p className="font-bold mt-6 mb-2">휴대폰 번호</p>
          <div className="flex flex-row gap-4  bg-white border-1 p-2 border-poten-gray-1 rounded-[8px] text-poten-black overflow-hidden">
            <input
              className="bg-white w-full px-[16px]"
              type="text "
              defaultValue="010"
              disabled
            />
            <span className="text-[22px] text-poten-gray-2 font-bold">-</span>
            <input
              className="bg-white w-full px-[16px]"
              type="text"
              maxLength={4}
              value={phonedNum[0]}
              onChange={(e) => {
                phoneNumHandle(e, 0);
              }}
            />
            <span className="text-[22px] text-poten-gray-2 font-bold">-</span>
            <input
              className="bg-white w-full px-[16px]"
              type="text"
              maxLength={4}
              value={phonedNum[1]}
              onChange={(e) => {
                phoneNumHandle(e, 1);
              }}
            />
          </div>
          {phoneNumError ? (
            <div className="flex gap-x-2 items-center">
              <Image
                className="w-4 pt-0.5"
                src={errorIcon}
                width={16}
                height={16}
                alt="에러아이콘"
              />
              <p className="text-poten-usedorange font-bold mt-1 text-[16px]">
                카드결제시, 카드번호는 필수 입력 사항입니다.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
