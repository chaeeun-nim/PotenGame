
import { Iuser } from '@/types/user';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 마이페이지 사용자 정보를 가져옵니다
 */
export async function getUserInfo(
  token: string,
): Promise<{ ok: 1; item: Iuser } | { ok: 0; message: string }> {
  try {
    const res = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
    });
    return res.json();
  } catch (error) {
    console.error('사용자 정보 조회 실패:', error);
    return { ok: 0, message: '일시적인 네트워크 문제로 사용자 정보 조회에 실패했습니다.' };
  }
}
