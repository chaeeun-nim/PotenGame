export const dynamic = 'force-dynamic';

import CartAllBtn from '@/components/cart/CartAllBtn';
import CartCleanBtn from '@/components/cart/CartCleanBtn';
import CartCosttable from '@/components/cart/CartCosttable';
import CartList from '@/components/cart/CartList';
import PaymentBar from '@/components/cart/PaymentBar';
import MainPromotion from '@/components/MainPromotion';

/*
로직정리
1.카트 내용을 조회한다...
2.처음에 전체 선택된 상태에서 보여준다
(전체가 선택되어있을때만 체크표시 -> 전체 체크 아닐때는 전체 선택 체크 X안되어야하며
체크 된 상품들만) 
3.하단 플롯팅바에서 선택상품금액, 배송비, 단골할인등 할인이 들어간다.

- 닫기버튼 로직
X버튼을 누르면 즉시 장바구니 자체에서 삭제되면서 다시 렌더링이되고..
1번부터 - 3번 까지 다시시작

-전체 삭제를 누르면..
장바구니 전체가 비워진다.

- 수량변경 -> 장바구니에있는 제품 수량을 변경한다.. (직접 서버에있는 장바구니제품수량을 직접 수정한다.)
- 결제하기 버튼을 누르면 선택된 제품만 선별하여 결제창으로 넘어간다

*/

export default async function CartPage() {
  return (
    <>
      <MainPromotion />
      <section>
        <header className="  w-full gap-4 xl:max-w-[1200px] px-[16px] md:px-[24px] xl:px-[0px] xl:mx-auto  my-[18px] md:my-[32px]">
          <div className="flex gap-4 border-b-2 border-poten-gray-1 pb-[14px] md:pb-[20px] justify-start items-center">
            <span className="block w-[5px] h-[20px] md:h-[24px] rounded-[2px] bg-poten-red"></span>
            <h1 className="font-bold text-[18px] xl:text-[22px]">장바구니</h1>
          </div>
        </header>
        <div className="w-full bg-poten-snowgray1 pt-[10px] md:px-[24px] pb-[24px] md:pt-[30px] xl:pt-[50px] md:pb-[100px] ">
          <div className="flex justify-end mx-auto xl:max-w-[1200px]">
            <CartAllBtn />
            <CartCleanBtn />
          </div>
          <CartList />
        </div>
      </section>
      <CartCosttable />
      <PaymentBar />
    </>
  );
}
