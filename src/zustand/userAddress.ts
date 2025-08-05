import { create } from 'zustand';
import { MyAddress } from '@/types/MyAddress';

interface UserWithAddress {
  _id: string;
  phone?: string;
  extra?: {
    address?: MyAddress[];
    addressBook?: MyAddress[];
  };
}

type State = {
  addresses: MyAddress[];
  fetchAddresses: (userId: string, token: string) => Promise<void>;
};

export const useUserAddress = create<State>((set) => ({
  addresses: [],
  fetchAddresses: async (userId, token) => {
    try {
      const res = await fetch(`https://fesp-api.koyeb.app/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      const item = data.item as UserWithAddress | UserWithAddress[];

      const user = Array.isArray(item)
        ? item.find((u) => String(u._id) === String(userId))
        : item;

      const rawList = user?.extra?.address ?? user?.extra?.addressBook ?? [];

      console.log('API 응답:', data);
      console.log('user:', user);
      console.log('rawList:', rawList);

      const phone = user?.phone ?? '';
      const list: MyAddress[] = rawList.map((item) => ({
        id: item.id,
        name: item.name ?? '',
        value: item.value ?? '',
        addressNumber: String(item.addressNumber ?? ''),
        phone: item.phone ?? phone,
        isDefault: item.isDefault ?? false,
        isSelected: item.isSelected ?? false,
      }));

      set({ addresses: list });
    } catch (error) {
      console.error('주소 가져오기 실패:', error);
      set({ addresses: [] });
    }
  },
}));