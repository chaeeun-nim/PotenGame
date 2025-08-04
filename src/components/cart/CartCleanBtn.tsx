'use client';

import { resetCart } from '@/data/functions/resetCart';
import useCartStore from '@/zustand/cartStore';
import useUserStore from '@/zustand/userStore';

export default function CartCleanBtn() {
  const resetStore = useCartStore((state) => state.resetCartStore);
  const { user } = useUserStore();

  const cleanHandle = async () => {
    const res = await resetCart(user?.token.accessToken as string);
    if (res.ok) {
      resetStore();
    }
  };

  return (
    <>
      <button
        className="text-poten-gray-2 text-[16px] md:bg-white md:border-1 md:px-[24px] md:py-[8px] md:rounded-[4px] mr-[16px] mb-[14px] ml-auto font-bold cursor-pointer border-poten-gray-2"
        onClick={cleanHandle}>
        전체삭제
      </button>
    </>
  );
}
