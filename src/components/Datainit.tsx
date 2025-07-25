'use client';

import { getCart } from '@/data/functions/getCart';
import useCartStore from '@/zustand/cartStore';
import useUserStore from '@/zustand/userStore';
import { useEffect } from 'react';

/*
로그인 유무에 따른 세션스토리지에 카트 품목을 추가하는 데이터 바인딩 전용 컴포넌트 입니다.
이거 외에 로그인 데이터와 찜 목록 데이터도 함께 받아오면 좋을 것 같습니다.
*/

export default function Datainit() {
  const user = useUserStore((state) => state.user);
  const { setCart, setCost, resetStore } = useCartStore(); // 카트 스토어에 제품을 셋팅하는 함수와 리셋 함수를 호출합니다.

  useEffect(() => {
    resetStore(); // 마운팅 이후, 카트 스토어를 한번 비워줍니다.
    useCartStore.persist.clearStorage(); // 스토어와 함께 세션스토리지도 비워줍니다.

    // 카트 목록을 호출하는 함수를 제작합니다.
    const fetchData = async () => {
      const res = await getCart(user?.token.accessToken as string);
      if (res.ok) {
        // 호출 이후 전역상태에 장바구니 목록과 금액을 저장해줍니다.
        setCart(res.item);
        setCost(res.cost);
      }
    };
    // 이후 로그인 이후에 해당 함수를 호출해줍니다.
    if (user !== null) {
      fetchData();
    } else return;
  }, []); // eslint경고문은 무시하셔도 됩니다. 해당 useEffect에 사용된 훅들을 의존성 하지 않아도되는지 그냥 걱정하는 경고문입니다.

  // 데이터 바인딩 목적임으로 아무것도 리턴하지 않습니다.
  return null;
}
