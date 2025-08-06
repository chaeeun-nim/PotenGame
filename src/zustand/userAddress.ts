import { create } from 'zustand';
import { MyAddress } from '@/types/MyAddress';

// 직접 환경변수 선언 (config import 없이)
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

type AddressState = {
  addresses: MyAddress[];
  setAddresses: (addresses: MyAddress[]) => void;
  fetchAddresses: (userId: string, token: string) => Promise<void>;
};

export const useUserAddress = create<AddressState>((set) => ({
  addresses: [],

  // 전역 상태 설정 함수
  setAddresses: (addresses) => set({ addresses }),

  // API 호출 → 상태 저장
  fetchAddresses: async (userId, token) => {
    try {
      const res = await fetch(`${API_URL}/users/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Client-ID': CLIENT_ID,
        },
      });

      if (res.ok) {
        const data = await res.json();
        const addressList = data.item?.extra?.address ?? [];
        set({ addresses: addressList }); // 전역 상태에 저장
      } else {
        console.error('주소 조회 실패: ', res.status);
      }
    } catch (error) {
      console.error('주소 조회 중 오류:', error);
    }
  },
}));
