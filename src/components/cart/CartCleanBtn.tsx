'use client';

import { resetCart } from '@/data/functions/resetCart';
import useCartStore from '@/zustand/cartStore';
import useUserStore from '@/zustand/userStore';

export default function CartCleanBtn() {
  const resetStore = useCartStore((state) => state.resetStore);
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
        className="text-poten-gray-2 ml-auto font-bold cursor-pointer border-poten-gray-2"
        onClick={cleanHandle}>
        전체삭제
      </button>
    </>
  );
}
