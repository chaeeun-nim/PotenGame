'use server';

import { ApiResPromise } from '@/types/api';
import { Iproduct } from '@/types/products';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type TplatForm = 'PlayStation' | 'Nintendo Switch';

// 최신순으로 상품 조회
export async function getMainBest(platform: TplatForm): ApiResPromise<Iproduct[]> {
  try {
    const res = await fetch(
      `${API_URL}/products?limit=5&page=1&custom={"extra.platform": "${platform}","extra.category":{"$all":["GAME"]}}&sort={"buyQuantity": -1}`,
      {
        headers: {
          'Client-Id': CLIENT_ID,
        },
        cache: 'force-cache',
      },
    );
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
