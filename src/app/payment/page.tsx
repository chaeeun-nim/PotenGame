'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const raw = searchParams.get('data');
  const data = decodeURIComponent(raw as string);
  console.log(data);
  return <></>;
}
