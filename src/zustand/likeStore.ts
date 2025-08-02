import { IbookmarksItem } from '@/types/bookmarks';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  Like: IbookmarksItem[];

  setLike: (dataItems: IbookmarksItem[]) => void;

  resetLikeStore: () => void;
};

const useLikeStore = create<Store>()(
  persist(
    (set) => ({
      Like: [],
      setLike: (dataItems: IbookmarksItem[]) => {
        set({ Like: dataItems });
      },
      resetLikeStore: () => {
        set({ Like: [] });
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
