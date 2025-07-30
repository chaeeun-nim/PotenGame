/* 상품 목록 '/list'에 적용되는 파일입니다 */

import { create } from 'zustand';
import { Iproduct } from '@/types/products';
import { persist } from 'zustand/middleware';
import { SortType } from '@/types/sort';

interface FilterState {
  platform?: string;
  condition?: string;
  priceMin?: number;
  priceMax?: number;
  search?: string;
  category?: string;
}

interface ListState {
  // 상태
  products: Iproduct[];
  loading: boolean;
  error: string | null;
  filters: FilterState;
  sortBy: SortType;
  currentPage: number;
  totalPages: number;

  // 액션
  setProducts: (products: Iproduct[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: FilterState) => void;
  setSortBy: (sort: SortType) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (totalPages: number) => void;
  resetFilters: () => void;
}

const useListStore = create<ListState>()(
  persist(
    (set) => ({
      // 초기 상태
      products: [],
      loading: false,
      error: null,
      filters: {},
      sortBy: '-extra.releaseDate',
      currentPage: 1,
      totalPages: 1,

      // 액션들
      setProducts: (products) => set({ products }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
          currentPage: 1, // 필터 변경 시 첫 페이지로
        })),
      setSortBy: (sortBy) => set({ sortBy, currentPage: 1 }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setTotalPages: (pages) => set({ totalPages: pages }),
      resetFilters: () =>
        set({
          filters: {},
          sortBy: '-extra.releaseDate',
          currentPage: 1,
        }),
    }),
    {
      name: 'list-store', // localStorage 키
      partialize: (state) => ({
        filters: state.filters,
        sortBy: state.sortBy,
      }), // 필터와 정렬만 저장
    },
  ),
);

export default useListStore;
