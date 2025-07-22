'use client';

import { useEffect, useState } from 'react';
import useCartStore from '@/zustand/cartStore';
import AddCartBtn from './AddCartBtn';
import RemoveCartBtn from './RemoveCartBtn';

export default function CartBtn({ ItemId }: { ItemId: number }) {
  // DBinit 함수에서 저장한 전역상태 호출
  const { cart } = useCartStore();
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
    <>{!isInCart ? <AddCartBtn ItemId={ItemId} /> : <RemoveCartBtn ItemId={ItemId} />}</>
  );
}
