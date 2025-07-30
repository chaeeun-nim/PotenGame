'use server';

import { Iuser } from "@/types/user";
import { ApiRes, ApiResPromise, } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function login(state: ApiRes<Iuser> | null, formData: FormData): ApiResPromise<Iuser> {
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: ApiRes<Iuser>;

  try{
    // 로그인 API 호출
    res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();

  }catch(error){ // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }
  
  return data;
}