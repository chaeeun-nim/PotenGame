import { IbookmarksItem } from '@/types/bookmarks';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  Like: IbookmarksItem[];
  likeNum: number[];
  setLike: (dataItems: IbookmarksItem[]) => void;
  resetLikeStore: () => void;
  removeLikeStore: (productId: number) => void;
  addLikeStore: (item: IbookmarksItem[]) => void;
  addLikeNum: (productId: number) => void;
  removeLikeNum: (productId: number) => void;
};

const useLikeStore = create<Store>()(
  persist(
    (set) => ({
      Like: [],
      likeNum: [],
      addLikeNum: (productId: number) => {
        set((state) => {
          if (state.likeNum.includes(productId)) return state; // 중복 방지
          return { likeNum: [...state.likeNum, productId] };
        });
      },
      removeLikeNum: (productId: number) => {
        set((state) => ({
          likeNum: state.likeNum.filter((id) => id !== productId),
        }));
      },

      setLike: (dataItems: IbookmarksItem[]) => {
        set({ Like: dataItems });
      },
      removeLikeStore: (productId: number) => {
        set((state) => ({
          Like: state.Like.filter((item) => item.product._id !== productId),
        }));
      },
      addLikeStore: (item: IbookmarksItem[]) => {
        set((state) => ({
          Like: [...state.Like, ...item],
        }));
      },
      resetLikeStore: () => {
        set({ Like: [], likeNum: [] });
        useLikeStore.persist.clearStorage();
      },
    }),
    {
      name: 'Like-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useLikeStore;
