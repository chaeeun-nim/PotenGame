export const dynamic = 'force-dynamic';

import MainPromotion from '@/components/MainPromotion';
import LinkNav from '@/components/Payment/LinkNav';
import SectionHeader from '@/components/SectionHeader';

export default async function PaymentPage() {
  return (
    <>
      <MainPromotion />
      <SectionHeader>결제하기</SectionHeader>
      <main className="bg-poten-snowgray1 w-full flex pt-4">
        <LinkNav />
      </main>
    </>
  );
}
