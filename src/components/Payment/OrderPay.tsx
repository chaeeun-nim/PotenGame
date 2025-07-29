'use client';

import { useState } from 'react';
import CreditCart from './CreditCart';
import PhonePay from './PhonePay';
import BankBookPay from './BankBookPay';

export default function OrderPay() {
  const [payState, setPayState] = useState([
    {
      payname: '신용카드',
      active: true,
    },
    {
      payname: '휴대폰',
      active: false,
    },
    {
      payname: '무통장 입금',
      active: false,
    },
  ]);

  const payBtnHandle = (i: number) => {
    setPayState((prev) =>
      prev.map((item, index) => {
        return { ...item, active: index === i };
      }),
    );
  };

  const payBtnList = payState.map((item, i) => (
    <button
      onClick={() => {
        payBtnHandle(i);
      }}
      key={i}
      className={` w-full text-center rounded-[4px] py-1 ${item.active ? 'bg-white text-poten-black' : 'bg-poten-inputgray text-poten-gray-2'}`}>
      {item.payname}
    </button>
  ));

  return (
    <>
      <div className="flex w-full md:max-w-[896px] mx-auto flex-row gap-[8px] p-[8px] rounded-[4px] border-1 border-poten-gray-1 bg-poten-inputgray">
        {payBtnList}
      </div>
      {payState.findIndex((item) => item.active) === 0 && <CreditCart />}
      {payState.findIndex((item) => item.active) === 1 && <PhonePay />}
      {payState.findIndex((item) => item.active) === 2 && <BankBookPay />}
    </>
  );
}
