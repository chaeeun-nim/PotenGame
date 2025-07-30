'use client';

import useOrderSotre from '@/zustand/orderStore';

export default function OrderBtnBar() {
  const { order } = useOrderSotre();

  const orderHandle = () => {
    console.log(order);
  };

  return (
    <>
      <div
        className="fixed w-full  h-[60px] md:h-[80px] bg-black rounded-t-lg bottom-0 z-[999999999] flex
      justify-center items-center transform-none md:rounded-none">
        <div className="md:flex md:w-full justify-end  xl:max-w-[1200px] mx-auto">
          <button
            onClick={orderHandle}
            className="items-end font-bold text-[18px] rounded-[50px] md:rounded-none
            text-white shrink-0 bg-poten-red py-2 px-10 xl:px-16
            disabled:bg-poten-gray-2
            ">
            결제하기
          </button>
        </div>
      </div>
    </>
  );
}
