export const dynamic = 'force-dynamic';

import CartCleanBtn from '@/components/cart/CartCleanBtn';
import CartCosttable from '@/components/cart/CartCosttable';
import CartList from '@/components/cart/CartList';
import PaymentBar from '@/components/cart/PaymentBar';
import MainPromotion from '@/components/MainPromotion';
import SectionHeader from '@/components/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장바구니',
  description: '포텐게임 장바구니 페이지',
  openGraph: {
    title: '장바구니',
    description: '포텐게임 장바구니 페이지',
  },
};

export default async function CartPage() {
  return (
    <>
      <MainPromotion />
      <section>
        <SectionHeader>장바구니</SectionHeader>
        <div className="w-full bg-poten-snowgray1 pt-[10px] md:px-[24px] pb-[24px] md:pt-[30px] xl:pt-[50px] md:pb-[100px] ">
          <div className="flex justify-end mx-auto xl:max-w-[1200px]">
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
