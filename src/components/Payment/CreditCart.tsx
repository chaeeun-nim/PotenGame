'use client';

import ArrowIcon from '@/assets/icons/down.svg';
import Image from 'next/image';
import { useState } from 'react';
import checkedIcon from '@/assets/icons/checkedicon.svg';
import useOrderSotre from '@/zustand/orderStore';
import errorIcon from '@/assets/icons/erroricon.svg';

export default function CreditCart() {
  const [cardClassification, setcardClassification] = useState('Individual');
  const { order, updateOrder } = useOrderSotre();
  const [cardNum, setCardNum] = useState(['', '', '', '']);
  const [cardNumError, setCardNumError] = useState(true);
  const [cardError, setCardError] = useState(order.payment.card_name.length !== 0);

  const radioHanddle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcardClassification(e.target.value);
  };

  const cardNumHandle = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const onlyNumbers = e.currentTarget.value.replace(/[^0-9]/g, '');
    const newCardNum = [...cardNum];
    newCardNum[i] = onlyNumbers;
    setCardNum(newCardNum);
    const isVailed = newCardNum.every((item) => item.length === 4);
    setCardNumError(!isVailed);
    if (newCardNum.join(' ').length === 16) {
      updateOrder((prev) => ({
        ...prev,
        payment: {
          ...prev.payment,
          card_num: `${newCardNum.join(' ').slice(0, 3)}*************`,
        },
      }));
    }
  };

  const cardChoiceHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateOrder((prev) => ({
      ...prev,
      payment: {
        ...prev.payment,
        card_name: e.target.value,
      },
    }));
    setCardError(e.target.value.length !== 0);
  };

  return (
    <>
      <div className="w-full xl:max-w-[894px] mx-auto h-[300px] px-4 md:px-6 xl:px-0">
        <fieldset className="flex gap-4 my-2 px-2">
          <div className="relative">
            <input
              className="appearance-none pl-5"
              type="radio"
              id="Individual"
              name="card"
              value="Individual"
              checked={cardClassification === 'Individual'}
              onChange={radioHanddle}
            />
            <label htmlFor="Individual">개인</label>
            {cardClassification === 'Individual' ? (
              <Image
                className="w-4 absolute top-1/2 -translate-y-1/2 left-0"
                src={checkedIcon}
                width={24}
                height={24}
                alt="개인카드 체크"
              />
            ) : (
              <div className="w-4 h-4 bg-poten-gray3 rounded-3xl absolute top-1/2 -translate-y-1/2 left-0"></div>
            )}
          </div>
          <div className="relative">
            <input
              className="appearance-none pl-5"
              type="radio"
              id="Corporate"
              name="card"
              value="Corporate"
              checked={cardClassification === 'Corporate'}
              onChange={radioHanddle}
            />
            <label htmlFor="Corporate">법인</label>
            {cardClassification === 'Corporate' ? (
              <Image
                className="w-4 absolute top-1/2 -translate-y-1/2 left-0"
                src={checkedIcon}
                width={24}
                height={24}
                alt="법인카드 체크"
              />
            ) : (
              <div className="w-4 h-4 bg-poten-gray3 rounded-3xl absolute top-1/2 -translate-y-1/2 left-0"></div>
            )}
          </div>
        </fieldset>
        <div className="relative px-4 md:px-0">
          <label htmlFor="payAddress" className="sr-only">
            카드를 선택해주세요
          </label>
          <select
            onChange={cardChoiceHandle}
            name="payAddress"
            id="payAddress"
            className="cursor-pointer appearance-none w-full px-4 py-4 border bg-white border-poten-gray-1 text-poten-gray-2 font-semibold rounded-[4px] leading-[14px] text-4">
            <option value="">카드를 선택해주세요</option>
            <option className="text-poten-black" value="신한">
              신한
            </option>
            <option className="text-poten-black" value="현대">
              현대
            </option>
            <option className="text-poten-black" value="비씨">
              비씨
            </option>
            <option className="text-poten-black" value="KB국민">
              KB국민
            </option>
            <option className="text-poten-black" value="삼성">
              삼성
            </option>
            <option className="text-poten-black" value="롯데">
              롯데
            </option>
            <option className="text-poten-black" value="하나">
              하나
            </option>
            <option className="text-poten-black" value="NH">
              NH
            </option>
            <option className="text-poten-black" value="우리">
              우리
            </option>
            <option className="text-poten-black" value="광주">
              광주
            </option>
            <option className="text-poten-black" value="씨티">
              씨티
            </option>
            <option className="text-poten-black" value="전북">
              전북
            </option>
            <option className="text-poten-black" value="카카오뱅크">
              카카오뱅크
            </option>
            <option className="text-poten-black" value="케이뱅크">
              케이뱅크
            </option>
          </select>
          <Image
            src={ArrowIcon}
            width={16}
            height={16}
            className="absolute right-8 md:right-4 bottom-4 pointer-events-none"
            alt="카드선택"
          />
        </div>
        {cardError ? null : (
          <div className="flex gap-x-2 items-center">
            <Image
              className="w-4 pt-0.5"
              src={errorIcon}
              width={16}
              height={16}
              alt="에러아이콘"
            />
            <p className="text-poten-usedorange font-bold mt-1 text-[16px]">
              카드결제시, 카드사는 필수 선택 사항입니다.
            </p>
          </div>
        )}
        <div className="max-w-[600px]">
          <p className="font-bold mt-6 mb-2">카드번호</p>
          <div className="flex flex-row gap-4  bg-white border-1 p-2 border-poten-gray-1 rounded-[8px] text-poten-black overflow-hidden">
            <input
              className="bg-white w-full px-[16px]"
              type="text"
              maxLength={4}
              value={cardNum[0]}
              onChange={(e) => {
                cardNumHandle(e, 0);
              }}
            />
            <span className="text-[22px] text-poten-gray-2 font-bold">-</span>
            <input
              className="bg-white w-full px-[16px]"
              type="text "
              maxLength={4}
              value={cardNum[1]}
              onChange={(e) => {
                cardNumHandle(e, 1);
              }}
            />
            <span className="text-[22px] text-poten-gray-2 font-bold">-</span>
            <input
              className="bg-white w-full px-[16px]"
              type="text "
              maxLength={4}
              value={cardNum[2]}
              onChange={(e) => {
                cardNumHandle(e, 2);
              }}
            />
            <span className="text-[22px] text-poten-gray-2 font-bold">-</span>
            <input
              className="bg-white w-full px-[16px]"
              type="text "
              maxLength={4}
              value={cardNum[3]}
              onChange={(e) => {
                cardNumHandle(e, 3);
              }}
            />
          </div>
          {cardNumError ? (
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
