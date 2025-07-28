import MainPromotion from '@/components/MainPromotion';

import LinkNav from '@/components/Payment/LinkNav';
import OrderSetup from '@/components/Payment/OrderSetup';
import SectionHeader from '@/components/SectionHeader';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function PaymentPage() {
  const cookiesStore = await cookies();
  const canPayment = cookiesStore.get('can_payment');

  if (!canPayment) {
    redirect('/cart');
  }

  return (
    <>
      <MainPromotion />
      <SectionHeader>결제하기</SectionHeader>
      <main className="bg-poten-snowgray1 w-full flex flex-col pt-4 text-poten-black">
        <LinkNav />
        <OrderSetup />
      </main>
    </>
  );
}
