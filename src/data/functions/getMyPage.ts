
import { IOrderSummaryRes } from '@/types/myorder';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 마이페이지 주문 상태 요약 데이터를 가져옵니다
 */
export async function getMyPage(
  token: string,
): Promise<{ ok: 1; item: IOrderSummaryRes[] } | { ok: 0; message: string }> {
  try {
    const res = await fetch(`${API_URL}/orders/summary`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
    });
    return res.json();
  } catch (error) {
    console.error('마이페이지 주문 상태 조회 실패:', error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
