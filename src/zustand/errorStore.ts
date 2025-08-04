// zustand/errorStore.ts

import { create } from 'zustand';

interface ErrorState {
  imageErrorCount: number;
  incrementImageError: () => void;
  resetImageErrors: () => void;
  shouldShowSkeleton: () => boolean;
}

const MAX_ERROR_COUNT = 5;

const useErrorStore = create<ErrorState>((set, get) => ({
  imageErrorCount: 0,

  incrementImageError: () =>
    set((state) => ({
      imageErrorCount: state.imageErrorCount + 1,
    })),

  resetImageErrors: () =>
    set({
      imageErrorCount: 0,
    }),

  shouldShowSkeleton: () => get().imageErrorCount >= MAX_ERROR_COUNT,
}));

export default useErrorStore;
