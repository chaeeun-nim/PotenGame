import { ILoginRes } from '@/types/user';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

interface modifyUserType {
  name?: string;
  email?: string;
  phone?: string;
}

export async function modifyUser(
  token: string | undefined,
  id: number,
  data: modifyUserType,
): Promise<ILoginRes | { ok: 0; message: string }> {
  try {
    console.log('츄라이');
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    });

    return await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
