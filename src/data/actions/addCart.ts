'use client';

import { ApiRes, ApiResPromise } from '@/types/api';
import { IcartPostReq } from '@/types/Cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function addCart(formData: FormData): ApiResPromise<IcartPostReq> {
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: ApiRes<IcartPostReq>;

  try {
    res = await fetch(`${API_URL}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        // Authorization: `Bearer ${accesToken}`,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
    console.log('장바구니추가됨!!', data);
    return data;
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
