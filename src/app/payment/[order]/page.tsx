import Image from 'next/image';
import Link from 'next/link';
import Right from '@/assets/icons/right.svg';
import SectionHeader from '@/components/SectionHeader';

import OrderOk from '@/components/Payment/OrderOk';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '결제완료',
  description: '포텐게임 결제완료 페이지',
  openGraph: {
    title: '결제완료',
    description: '포텐게임 결제완료 페이지',
  },
};

export default async function PaymentOrder({
  params,
}: {
  params: Promise<{ order: string }>;
}) {
  const orderId = (await params).order;

  return (
    <>
      <SectionHeader>구매완료</SectionHeader>
      <main className="bg-poten-snowgray1 w-full flex flex-col pt-4 text-poten-black pb-[100px]">
        <div className="w-full pr-4 md:pr-6 xl:pr-0 xl:max-w-[1200px] ml-auto mx-auto justify-end  text-[16px] flex gap-4 font-medium   text-poten-gray-2">
          <Link href="/cart">장바구니</Link>
          <Image src={Right} alt="화살표" />
          <p>주문/결제</p>
          <Image src={Right} alt="화살표" />
          <p className="text-poten-black font-bold">결제완료</p>
        </div>

        <OrderOk id={orderId} />
      </main>
    </>
  );
}
