'use client';

import { resetCart } from '@/data/functions/resetCart';
import useCartStore from '@/zustand/cartStore';

export default function CartCleanBtn() {
  const resetStore = useCartStore((state) => state.resetStore);
  const cleanHandle = async () => {
    const res = await resetCart();
    if (res.ok) {
      resetStore();
    }
  };
  return (
    <>
      <button className="bg-red-500 ml-auto" onClick={cleanHandle}>
        전체삭제
      </button>
    </>
  );
}
