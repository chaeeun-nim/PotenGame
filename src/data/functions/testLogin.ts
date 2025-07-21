import { Iuser } from '@/types/user';
import useUserStore from '@/zustand/loginTestStore';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export default async function testLogin() {
  const { setUser } = useUserStore.getState();
  const email = 's1@market.com';
  const password = '11111111';
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'force-cache',
    });

    const data = await res.json();

    if (data.ok) {
      const user: Iuser = data.item; // 구조만 잘 맞으면 그대로!
      console.log('로그인시작!');
      setUser(user); // 여기서 상태에 바로 저장!
      console.log('로그인성공?');
    }
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
