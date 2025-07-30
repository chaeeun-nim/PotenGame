'use client';

import { Iorder } from '@/types/order';
import useOrderSotre from '@/zustand/orderStore';

interface AddressChoice {
  addressValue: string;
  addressName: string;
  addressNumber: number;
  userName: string;
  userphone: string;
  ModalCloseHandle: () => void;
}

export default function AddressChoice({
  addressValue,
  addressName,
  addressNumber,
  userName,
  userphone,
  ModalCloseHandle,
}: AddressChoice) {
  const { updateOrder } = useOrderSotre();

  const AddressChangeHandle = () => {
    ModalCloseHandle();
    updateOrder((prev: Iorder) => ({
      ...prev,
      address: {
        addressNumber: addressNumber,
        name: addressName,
        value: addressValue,
      },
    }));
  };

  return (
    <>
      <div className="bg-poten-snowgray1 border-1 border-poten-gray-1 p-4 md:p-5 flex flex-col mb-[18px]">
        <h6 className="text-[18px] font-bold">{addressName}</h6>
        <p>{addressValue}</p>
        <p className="text-[14px] text-poten-gray-2">({addressNumber})</p>
        <p className="text-[16px] text-poten-gray-2">
          {userName} {userphone}
        </p>
        <button
          onClick={AddressChangeHandle}
          className="border-2 py-[4px] px-[14px] rounded-[4px] border-poten-gray-1 w-[60px] self-end bg-white">
          선택
        </button>
      </div>
    </>
  );
}
