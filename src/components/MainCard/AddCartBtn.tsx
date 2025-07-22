'use client';

import { addCart } from '@/data/actions/addCart';
import useCartStore from '@/zustand/cartStore';
import { useActionState, useEffect } from 'react';

export default function AddCartBtn({ ItemId }: { ItemId: number }) {
  // 카트 추가하는 서버액션
  const [state, formAction] = useActionState(addCart, null);
  // 전역상태를 갱신하는 함수
  const { setCart } = useCartStore();

  // 서버액션이 종료되면, 종료 이후 받은 데이터를 전역상태에 저장
  useEffect(() => {
    if (state?.ok === 1) {
      setCart(state.item);
    }
  }, [state]);
  // 전역 상태가 변경되었음으로, 그에 따른 버튼의 상태변화로 연결

  return (
    <>
      <form action={formAction}>
        {/* 제품의 ID값을 전달하기 위한 숨겨진 input */}
        <input type="number" name="product_id" hidden defaultValue={ItemId} />
        {/* 제품의 갯수 전달하기 위한 숨겨진 input */}
        <input type="number" name="quantity" hidden defaultValue={1} />
        <button className="border-1 rounded-[2px] border-poten-gray-1 " type="submit">
          담기
        </button>
      </form>
    </>
  );
}
