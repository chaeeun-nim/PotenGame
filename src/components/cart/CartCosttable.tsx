'use client';

import useCartStore from '@/zustand/cartStore';

export default function CartCosttable() {
  const { cost } = useCartStore();

  return (
    <>
      <section className="bg-white w-full xl:hidden pb-[100px] md:hidden">
        <header className="w-full gap-4 xl:max-w-[1200px] px-[16px] md:px-[24px] xl:px-[0px] xl:mx-auto  my-[18px] md:my-[32px]">
          <div className="flex gap-4 border-b-2 border-poten-gray-1 pb-[14px] md:pb-[20px] justify-start items-center">
            <span className="block w-[5px] h-[20px] md:h-[24px] rounded-[2px] bg-poten-red"></span>
            <h1 className="font-bold text-[18px] xl:text-[22px]">결제예상 금액</h1>
          </div>
        </header>
        <div className="flex gap-1 flex-col">
          <div className="flex justify-between px-[16px] text-poten-black">
            <p>상품금액</p>
            <p className="font-bold text-[18px]">
              {cost?.products?.toLocaleString() ?? 0}원
            </p>
          </div>
          <div className="flex justify-between px-[16px] text-poten-black">
            <p>배송비</p>
            <p className="font-bold text-[18px]">
              {cost?.shippingFees?.toLocaleString() ?? 0}
            </p>
          </div>
          <div className="flex justify-between px-[16px] text-poten-black">
            <p>할인금액</p>
            <p className="font-bold text-[18px]">
              -
              {(
                (cost?.discount?.shippingFees ?? 0) + (cost?.discount?.products ?? 0)
              ).toLocaleString() ?? 0}
              원
            </p>
          </div>
          <p className="mx-4 my-2 bg-poten-bluegray text-poten-gray-2 font-medium text-center rounded-[4px] py-1">
            5만원 이상 구매시, 배송비는 무료입니다.
          </p>
        </div>
        <hr className="border-1 mx-4 border-poten-gray-1 my-[16px] " />
        <div className="flex justify-between px-[16px]">
          <p>총 결제금액</p>
          <p>{cost.total?.toLocaleString()}원</p>
        </div>
      </section>
    </>
  );
}
