'use client';

import { ApiRes, ApiResPromise } from '@/types/api';
import { IcartPostReq } from '@/types/Cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function addCart(
  state: ApiRes<IcartPostReq> | null,
  formData: FormData,
): ApiResPromise<IcartPostReq> {
  const body = {
    product_id: Number(formData.get('product_id')),
    quantity: Number(formData.get('quantity')),
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJzZWxsZXIiLCJuYW1lIjoi64Sk7JikIiwiZW1haWwiOiJzMUBtYXJrZXQuY29tIiwiaW1hZ2UiOiJmaWxlcy9mZWJjMTMtZmluYWwxNC1lbWpmL3VzZXItbmVvLnBuZyIsImxvZ2luVHlwZSI6ImVtYWlsIiwiaWF0IjoxNzUzMTYwNTQ1LCJleHAiOjE3NTMyNDY5NDUsImlzcyI6IkZFQkMifQ.LBiGPBppEydcFU5DySbgkr_EvPUS010Jo6KfIxA5s1s';
  let res: Response;
  let data: ApiRes<IcartPostReq>;

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

    return data;
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
