'use client';

import { useState } from 'react';
import CreditCart from './CreditCart';
import PhonePay from './PhonePay';
import BankBookPay from './BankBookPay';
import useOrderSotre from '@/zustand/orderStore';
import { Iorder } from '@/types/payorder';

export default function OrderPay() {
  const { updateOrder } = useOrderSotre();

  const [payState, setPayState] = useState([
    {
      payname: '신용카드',
      active: true,
    },
    {
      payname: '휴대폰 결제',
      active: false,
    },
    {
      payname: '무통장 입금',
      active: false,
    },
  ]);

  const payBtnHandle = (i: number) => {
    updateOrder((prev: Iorder) => ({
      ...prev,
      payment: {
        ...prev.payment,
        card_name: '',
        card_num: '',
        pay_phone_num: '',
        pay_method: payState[i].payname,
      },
    }));
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
      className={`cursor-pointer w-full text-center rounded-[4px] py-1 ${item.active ? 'bg-white text-poten-black' : 'bg-poten-inputgray text-poten-gray-2'}`}>
      {item.payname}
    </button>
  ));

  return (
    <>
      <div className="px-4 md:px-6 xl:px-0 ">
        <div className="flex w-full  xl:max-w-[896px] mx-auto flex-row gap-[8px] p-[8px] rounded-[4px] border-1 border-poten-gray-1 bg-poten-inputgray">
          {payBtnList}
        </div>
      </div>
      {payState.findIndex((item) => item.active) === 0 && <CreditCart />}
      {payState.findIndex((item) => item.active) === 1 && <PhonePay />}
      {payState.findIndex((item) => item.active) === 2 && <BankBookPay />}
    </>
  );
}
