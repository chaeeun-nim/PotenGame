'use server';

import { cookies } from 'next/headers';

export default async function paymentCookieDelete() {
  const cookiesStore = await cookies();
  cookiesStore.delete('can_payment');
}
