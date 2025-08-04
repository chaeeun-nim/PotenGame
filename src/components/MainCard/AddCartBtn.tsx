'use client';

import { addCart } from '@/data/actions/addCart';
import useCartStore from '@/zustand/cartStore';
import { useActionState, useEffect } from 'react';
import addCartIcon from '@/assets/icons/cart-gray.svg';
import Image from 'next/image';
import LoadingRing from './LoadingRing';
import { getCart } from '@/data/functions/getCart';
import useUserStore from '@/zustand/userStore';

export default function AddCartBtn({ ItemId }: { ItemId: number }) {
  // 카트 추가하는 서버액션
  // 전역상태를 갱신하는 함수
  const { setCart, setCost } = useCartStore();
  const [state, formAction, isLoading] = useActionState(addCart, null);
  const { user } = useUserStore();

  // 서버액션이 종료되면, 종료 이후 받은 데이터를 전역상태에 저장
  useEffect(() => {
    if (state?.ok === 1) {
      setCart(state.item);
      (async () => {
        const res = await getCart(user?.token.accessToken as string);
        if (res.ok) {
          setCost(res.cost);
        }
      })();
    }
  }, [state]); // eslinkt 경고는 무시하셔도됩니다
  // 전역 상태가 변경되었음으로, 그에 따른 버튼의 상태변화로 연결

  return (
    <>
      <form action={formAction}>
        {/* 제품의 ID값을 전달하기 위한 숨겨진 input */}
        <input type="number" name="product_id" hidden defaultValue={ItemId} />
        {/* 제품의 갯수 전달하기 위한 숨겨진 input */}
        <input type="number" name="quantity" hidden defaultValue={1} />
        <input
          type="string"
          name="token"
          hidden
          defaultValue={user?.token.accessToken as string}
        />
        <button
          className="flex items-center w-[100px] md:w-[150px] xl:w-[200px] font-medium text-[16px] md:text-[18px] xl:text-[20px] text-poten-gray-2  flex-row place-content-center  h-[32px] xl:h-[36px] bg-white  rounded-sm gap-1 border-1 border-poten-gray-1"
          disabled={isLoading}
          type="submit">
          {/* 버튼 상태변화 딜레이가 있어, 데이터 통신상태를 시각적으로 표현 */}
          {isLoading ? (
            <LoadingRing />
          ) : (
            <>
              담기
              <Image
                className="xl:w-[20px]"
                src={addCartIcon}
                alt="카트에 담기"
                width={18}
                height={18}
              />
            </>
          )}
        </button>
      </form>
    </>
  );
}
