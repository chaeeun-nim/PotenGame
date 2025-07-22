import { IcartProductRes } from '@/types/Cart';
// import useUserStore from '@/zustand/loginTestStore';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 장바구니상품조회
export async function removeCart(
  _id: number,
): Promise<IcartProductRes | { ok: 0; message: string }> {
  // const accesToken = useUserStore.getState().user?.token.accessToken;
  // console.log('액세스토큰', accesToken);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJzZWxsZXIiLCJuYW1lIjoi64Sk7JikIiwiZW1haWwiOiJzMUBtYXJrZXQuY29tIiwiaW1hZ2UiOiJmaWxlcy9mZWJjMTMtZmluYWwxNC1lbWpmL3VzZXItbmVvLnBuZyIsImxvZ2luVHlwZSI6ImVtYWlsIiwiaWF0IjoxNzUzMTg1MTA3LCJleHAiOjE3NTMyNzE1MDcsImlzcyI6IkZFQkMifQ.Dba5Oj3rlHnMB7dgN8gQ88J1B5CS6UfTYh4-d1fL_jc';
  try {
    const res = await fetch(`${API_URL}/carts/${_id}`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-cache',
    });
    console.log('제거시도');
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
