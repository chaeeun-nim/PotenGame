import { signUpRes } from "@/types/signUp";
import { ApiRes, ApiResPromise, } from "@/types/api";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function signUp(state: ApiRes<signUpRes> | null, formData: FormData): ApiResPromise<signUpRes> {
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: ApiRes<signUpRes>;

  try {
    res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });
    
    data = await res.json();

    } catch (error) {
      console.error(error);
      return {
       ok: 0,
       message: "네트워크 오류가 발생했습니다.",
       errors: {}
      };
    }

    return data;

}