import { EmailCheckResponse } from "@/types/DupCheck";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function emailCheck(email: string):Promise<EmailCheckResponse>{
  try {
    const res = await fetch(`${API_URL}/users/email?email=${email}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache',
    });

    return await res.json();
    
    } catch (error) {
      // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }

}