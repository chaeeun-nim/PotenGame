'use client';

import useCartStore from '@/zustand/cartStore';
import usePayStore from '@/zustand/payStore';

export default function CartAllBtn() {
  const { cart, cost } = useCartStore();
  const { resetPayStore, setPayCart, setPayCost, allselectBtn, setAllselectBtn } =
    usePayStore();

  const allSelectHandle = () => {
    setAllselectBtn();
    setPayCart(cart);
    setPayCost(cost);
  };
  const allCleartHandle = () => {
    setAllselectBtn();
    resetPayStore();
  };

  return (
    <>
      {allselectBtn ? (
        <button onClick={allSelectHandle}>전체선택</button>
      ) : (
        <button onClick={allCleartHandle}>선택해제</button>
      )}
    </>
  );
}
