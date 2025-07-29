'use client';

import ArrowIcon from '@/assets/icons/down.svg';
import Image from 'next/image';
import { useState } from 'react';
import checkedIcon from '@/assets/icons/checkedicon.svg';

export default function CreditCart() {
  const [cardClassification, setcardClassification] = useState('Individual');

  const radioHanddle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcardClassification(e.target.value);
  };

  return (
    <>
      <div className="w-full xl:max-w-[896px] mx-auto h-[300px]">
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
        <div className="relative">
          <label htmlFor="payAddress" className="sr-only">
            배송메모를 선택해주세요
          </label>
          <select
            name="payAddress"
            id="payAddress"
            className="appearance-none w-full px-4 py-4 border border-poten-gray-1 text-poten-gray-2 font-semibold rounded-[4px] leading-[14px] text-4">
            <option value="">카드를 선택해주세요</option>
            <option value="신한">신한</option>
            <option value="현대">현대</option>
            <option value="비씨">비씨</option>
            <option value="KB국민">KB국민</option>
            <option value="삼성">삼성</option>
            <option value="롯데">롯데</option>
            <option value="하나">하나</option>
            <option value="NH">NH</option>
            <option value="우리">우리</option>
            <option value="광주">광주</option>
            <option value="씨티">씨티</option>
            <option value="전북">전북</option>
            <option value="카카오뱅크">카카오뱅크</option>
            <option value="케이뱅크">케이뱅크</option>
          </select>
          <Image
            src={ArrowIcon}
            width={16}
            height={16}
            className="absolute right-4 bottom-4 pointer-events-none"
            alt="배송 메모 선택"
          />
        </div>
      </div>
    </>
  );
}
