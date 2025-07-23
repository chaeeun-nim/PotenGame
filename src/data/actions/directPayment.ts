import { redirect } from 'next/navigation';

export default async function directPayment(formData: FormData) {
  const raw = formData.get('orderData');
  const encoded = encodeURIComponent(raw?.toString() || '');
  redirect(`/payment?data=${encoded}`);
}
