import { ILoginRes } from "@/types/user";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

interface modifyUserType{
  name?: string;
  email?: string;
  phone?: number;
}

export async function modifyUser(id: number, data: Partial<modifyUserType>):Promise<ILoginRes>{
  try {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(data),
      cache: 'no-cache',
    });

    return await res.json();
    
    } catch (error) {
      // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, item: {
        _id: -1,
        email: '',
        name: '',
        type: 'user',
      }};
    }

}