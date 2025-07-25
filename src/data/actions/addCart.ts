'use server';

import { ApiRes, ApiResPromise } from '@/types/api';
import { IcartItem } from '@/types/Cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function addCart(
  state: ApiRes<IcartItem[]> | null,
  formData: FormData,
): ApiResPromise<IcartItem[]> {
  const token = formData.get('token') as string;
  const body = {
    product_id: Number(formData.get('product_id')),
    quantity: Number(formData.get('quantity')),
  };

  let res: Response;
  let data: ApiRes<IcartItem[]>;

  try {
    res = await fetch(`${API_URL}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}
