'use client';

import useOrderSotre from '@/zustand/orderStore';
import useUserStore from '@/zustand/userStore';
import Image from 'next/image';
import ArrowIcon from '@/assets/icons/down.svg';

export default function PayAddress() {
  const { order, updateOrder } = useOrderSotre();
  const { user } = useUserStore();
  console.log('제이지폰번호', user);

  const addressMemoHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateOrder((prev) => ({
      ...prev,
      extra: {
        ...prev.extra,
        parcelmemo: e.target.value,
      },
    }));
  };

  if (!order && !user) return null;

  return (
    <>
      <div className="fixed w-full z-[99999] h-full flex flex-col justify-center items-center top-0 left-0 bg-black/20">
        <div className="text-[18px] w-[640px]  bg-poten-red font-bold text-white text-center py-4 rounded-t-[8px]">
          도착 배송지 설정
        </div>
        <div className="bg-white w-[640px] mx-auto rounded-b-[8px]">
          <form className="flex flex-col px-[26px] py-[40px]">
            <label htmlFor="newAddress" className="text-4 font-bold">
              주소<span className="text-poten-red">*</span>
            </label>
            <input
              type="text"
              id="newAddress"
              name="newAddress"
              placeholder="도착 배송주소를 입력해주세요."
              className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[20px] py-[16px]
              placeholder:text-poten-gray-2 text-poten-black"
              required
            />
            <label htmlFor="newAddressNumber" className="text-4 font-bold">
              우편번호<span className="text-poten-red">*</span>
            </label>
            <input
              type="text"
              id="newAddressNumber"
              name="newAddressNumber"
              placeholder="도착 배송지의 우편번호를 입력해주세요."
              className="placeholder:font-bold font-medium bg-poten-inputgray rounded-[4px] px-[20px] py-[16px]
              placeholder:text-poten-gray-2 text-poten-black appearance-none"
            />
            <button type="submit">저장</button>
          </form>
        </div>
      </div>
      <article
        className="xl:max-w-[894px] flex flex-col gap-[6px] leading-tight border-y-1 xl:border-1 border-poten-gray-1 bg-white mx-auto w-full
      py-6 px-4 md:p-[18px] xl:p-[28px]">
        <div className="w-full flex justify-between items-center">
          <h4 className="text-[18px] font-bold">
            {order.address.name ? order.address.name : '도착지'}({user?.name})
          </h4>
          <button className="border-2 py-[4px] px-[14px] rounded-[4px] border-poten-gray-1">
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
    </>
  );
}
