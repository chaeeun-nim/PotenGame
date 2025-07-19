import { Iuser } from '@/types/user';
import { create } from 'zustand';

// Zustand의 상태 타입 정의
interface UserStore {
  user: Iuser | null;
  setUser: (user: Iuser) => void;
  resetUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  resetUser: () => set({ user: null }),
}));

export default useUserStore;
