'use client';

import { useEffect, useState } from 'react';
import useCartStore from '@/zustand/cartStore';
import AddCartBtn from './AddCartBtn';
import RemoveCartBtn from './RemoveCartBtn';
import useUserStore from '@/zustand/userStore';
import useLoginModal from '@/zustand/areyouLogin';
import Image from 'next/image';
import addCartIcon from '@/assets/icons/cart-gray.svg';

export default function CartBtn({ ItemId }: { ItemId: number }) {
  // DBinit 함수에서 저장한 전역상태 호출
  const { cart } = useCartStore();
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();
  // 각 제품별 전역상태에 따라 카트 유무 판별 (카트에 있으면 true 없으면 false)
  const [isInCart, setIsIncart] = useState(
    cart.some((item) => item.product._id === ItemId),
  );

  /*
  초기셋팅을 전역상태에서 true/false 판별하여 넣어두더라도, mount가 되고 데이터를 받아오는 과정에서는 버튼 상태가 정상적으로 작동되지 않을 수있음
  이와같은 사유로 하단 useEffect를 통해 전역상태에 의존하여 다시한번 상태 설정
  */

  useEffect(() => {
    setIsIncart(cart.some((item) => item.product._id === ItemId));
  }, [cart]);
  // 태초에 mount시, 전역 상태(세션스토리지) 에 저장되어 있는 상태에 의존하여 useEffect로 상태 전환
  // 전역상태를 의존하는 useEffect 여도 useEffect 안에서 다시 전역상태를 갱신하지 않음으로 무한루프X

  return (
    <>
      {user === null ? (
        <button
          className="flex items-center w-[100px] md:w-[150px] xl:w-[200px] font-medium text-[16px] md:text-[18px] xl:text-[20px] text-poten-gray-2  flex-row place-content-center  h-[32px] xl:h-[36px] bg-white  rounded-sm gap-1 border-1 border-poten-gray-1"
          onClick={openViewModal}>
          담기
          <Image
            className="xl:w-[20px]"
            src={addCartIcon}
            alt="카트에 담기"
            width={18}
            height={18}
          />
        </button>
      ) : isInCart ? (
        <RemoveCartBtn ItemId={ItemId} />
      ) : (
        <AddCartBtn ItemId={ItemId} />
      )}
    </>
  );
}
