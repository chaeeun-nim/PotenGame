import { ApiResPromise } from '@/types/api';
import { Iproduct } from '@/types/products';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 최신순으로 상품 조회
export async function rankingData(
  platform: string,
  category: string,
): ApiResPromise<Iproduct[]> {
  try {
    const res = await fetch(
      `${API_URL}/products?limit=10&page=1&custom={"extra.platform": "${platform}","extra.category":{"$all":["${category}"]}}&sort={"buyQuantity": -1}`,
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
