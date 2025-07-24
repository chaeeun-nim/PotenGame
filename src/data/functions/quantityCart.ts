// 카트 수량을 변경하는 함수
import { IcartProductRes } from '@/types/Cart';
// import useUserStore from '@/zustand/loginTestStore';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 수량변경
export async function quantityCart(
  token: string,
  quantity: number,
  cartId: number,
): Promise<IcartProductRes | { ok: 0; message: string }> {
  // const accesToken = useUserStore.getState().user?.token.accessToken;
  const body = { quantity: quantity };

  try {
    const res = await fetch(`${API_URL}/carts/${cartId}`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      cache: 'no-cache',
    });
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
