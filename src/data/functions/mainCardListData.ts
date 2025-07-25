'use server';

import { ApiResPromise } from '@/types/api';
import { Iproduct } from '@/types/products';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export interface sortPrice {
  price: 1;
}

export interface sortNews {
  'extra.releaseDate': -1;
}

export type GameUsedType = ('GAME' | 'NEW')[];

// 최신순으로 상품 조회
export async function mainCardListData(
  sort: sortPrice | sortNews,
  gameType: GameUsedType,
): ApiResPromise<Iproduct[]> {
  try {
    const res = await fetch(
      `${API_URL}/products?limit=24&page=1&custom={"extra.category":{"$all":${JSON.stringify(gameType)}}}&sort=${JSON.stringify(sort)}`,
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
