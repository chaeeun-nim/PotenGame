/* 카테고리별 상품 목록 페이지 '/list/[category]' 구현한 페이지 에 쓰이는 component 입니다. */
'use client';

import ItemCard from '@/components/list-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';
import { useCallback, useEffect, useState } from 'react';
import useListStore from '@/zustand/listStore';
import { getProductList, ProductSearchParams } from '@/data/functions/listProducts';
import { SortType } from '@/types/sort';
import { Iproduct } from '@/types/products';
// 필터 유틸리티 함수 import
import { createDynamicCategories, FilterState } from '@/utils/filterUtils';

const ITEMS_PER_PAGE = 20; // 한 번에 보여줄 상품 수

// 로딩 스켈레톤 컴포넌트
function ProductListSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index} className="animate-pulse w-full">
          <div className="w-full min-h-[238px] md:min-h-[310px] xl:min-w-[300px] xl:min-h-[350px] flex flex-col rounded-[4px] md:rounded-[8px] overflow-hidden bg-white">
            <div className="bg-gray-200 h-[101px] md:h-[142px] xl:h-[182px] w-full"></div>
            <div className="p-3 flex-1 flex flex-col min-h-[99px] md:min-h-[98px] xl:min-h-[98px]">
              <div className="bg-gray-200 h-4 rounded mb-2 w-full"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-4"></div>
              <div className="mt-auto flex justify-between items-center">
                <div className="bg-gray-200 h-6 w-20 rounded"></div>
                <div className="bg-gray-200 h-6 w-16 rounded"></div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

// 에러 상태 컴포넌트
function ErrorState({ error, onRetry }: { error: string; onRetry: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-600 mb-4">
          상품을 불러올 수 없습니다
        </h2>
        <p className="text-gray-500 mb-6">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-poten-red text-white rounded-md hover:bg-red-700 transition-colors">
          다시 시도
        </button>
      </div>
    </div>
  );
}

// 빈 상태 컴포넌트
function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-600 mb-4">상품이 없습니다</h2>
        <p className="text-gray-500">조건에 맞는 상품을 찾을 수 없습니다.</p>
      </div>
    </div>
  );
}

interface CategoryProductListProps {
  category: string;
}

export default function CategoryProductList({ category }: CategoryProductListProps) {
  const {
    loading,
    error,
    filters,
    sortBy,
    currentPage,
    totalPages,
    setProducts,
    setLoading,
    setError,
    setTotalPages,
    setCurrentPage,
    setFilters,
    resetFilters,
  } = useListStore();

  // 로컬 상태 관리
  const [displayedProducts, setDisplayedProducts] = useState<Iproduct[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allProducts, setAllProducts] = useState<Iproduct[]>([]);
  const [currentDisplayCount, setCurrentDisplayCount] = useState(ITEMS_PER_PAGE);

  // 카테고리 코드에 따른 플랫폼 값 반환
  const getCategoryValue = useCallback((categoryCode: string): string => {
    const categoryMap: { [key: string]: string } = {
      NINTENDONDS: '닌텐도 NDS',
      NINTENDO01: '닌텐도 스위치 1',
      NINTENDO02: '닌텐도 스위치 2',
      PLAYSTATION04: '플레이스테이션 4',
      PLAYSTATION05: '플레이스테이션 5',
    };

    return categoryMap[categoryCode] || '전체 상품';
  }, []);

  // 초기 상품 목록 조회 함수
  const fetchInitialProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    setCurrentPage(1);

    try {
      // 카테고리별 필터링을 위한 파라미터 구성
      const searchParams: ProductSearchParams = {
        page: 1,
        sort: sortBy as SortType,
        platform: getCategoryValue(category), // 카테고리별 플랫폼 필터
        ...filters,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1) {
        const products = result.item || [];
        // 카테고리별 필터링 (서버에서 지원하지 않는 경우를 위한 클라이언트 필터링)
        const filteredProducts = products.filter((product) =>
          product.extra?.category?.includes(category),
        );

        setProducts(filteredProducts);
        setAllProducts(filteredProducts);

        // 첫 20개 표시
        setDisplayedProducts(filteredProducts.slice(0, ITEMS_PER_PAGE));
        setCurrentDisplayCount(ITEMS_PER_PAGE);

        // 더 보여줄 상품 있는지 확인
        setHasMore(filteredProducts.length > ITEMS_PER_PAGE);

        if (result.pagination) {
          setTotalPages(result.pagination.totalPages);
        }
      } else {
        setError(result.message || '상품을 불러올 수 없습니다.');
        setProducts([]);
        setAllProducts([]);
        setDisplayedProducts([]);
        setHasMore(false);
      }
    } catch (err) {
      console.error('API 호출 오류:', err);
      setError('네트워크 오류가 발생했습니다.');
      setProducts([]);
      setAllProducts([]);
      setDisplayedProducts([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [
    category,
    sortBy,
    filters,
    getCategoryValue,
    setLoading,
    setError,
    setCurrentPage,
    setProducts,
    setTotalPages,
  ]);

  // 추가 상품 로드 함수 (서버에서 다음 페이지 호출)
  const fetchMoreProducts = useCallback(async () => {
    if (loadingMore) return;

    setLoadingMore(true);

    try {
      const nextPage = currentPage + 1;
      const searchParams: ProductSearchParams = {
        page: nextPage,
        sort: sortBy as SortType,
        platform: getCategoryValue(category),
        ...filters,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1 && result.item) {
        const newProducts = result.item;
        const filteredNewProducts = newProducts.filter((product) =>
          product.extra?.category?.includes(category),
        );
        const updatedAllProducts = [...allProducts, ...filteredNewProducts];

        setAllProducts(updatedAllProducts);
        setCurrentPage(nextPage);

        // 현재 표시 갯수에서 + 20 더 표시
        const newDisplayCount = currentDisplayCount + ITEMS_PER_PAGE;
        setDisplayedProducts(updatedAllProducts.slice(0, newDisplayCount));
        setCurrentDisplayCount(newDisplayCount);

        // 더 가져올 페이지 확인
        setHasMore(nextPage < totalPages || updatedAllProducts.length > newDisplayCount);
      }
    } catch (err) {
      console.error('추가 상품 로드 오류:', err);
    } finally {
      setLoadingMore(false);
    }
  }, [
    loadingMore,
    currentPage,
    sortBy,
    category,
    filters,
    allProducts,
    currentDisplayCount,
    totalPages,
    getCategoryValue,
    setCurrentPage,
  ]);

  // 로컬에서 더 보기 (이미 로드된 상품 중에서)
  const showMoreFromLocal = useCallback(() => {
    const newDisplayCount = currentDisplayCount + ITEMS_PER_PAGE;
    setDisplayedProducts(allProducts.slice(0, newDisplayCount));
    setCurrentDisplayCount(newDisplayCount);

    // 로컬에 더 표시할 상품이 있는지 또는 서버에서 더 가져올지 확인
    setHasMore(allProducts.length > newDisplayCount || currentPage < totalPages);
  }, [currentDisplayCount, allProducts, currentPage, totalPages]);

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = useCallback(() => {
    // 현재 표시된 개수가 로드된 전체 상품 개수보다 적을 시 로컬에서 보기
    if (currentDisplayCount < allProducts.length) {
      showMoreFromLocal();
    }
    // 그렇지 않을 시 서버에서 다음 페이지 호출
    else if (currentPage < totalPages) {
      fetchMoreProducts();
    }
  }, [
    currentDisplayCount,
    allProducts.length,
    currentPage,
    totalPages,
    showMoreFromLocal,
    fetchMoreProducts,
  ]);

  // 컴포넌트 마운트 시 카테고리별 기본 필터 설정 및 데이터 조회
  useEffect(() => {
    // 카테고리별 기본 필터 설정 (플랫폼, 중고, 게임)
    const platformValue = getCategoryValue(category);
    resetFilters();

    // 기본 필터 3개 동시 적용: 플랫폼, 중고, 게임
    const defaultFilters: FilterState = {
      platform: platformValue,
      condition: 'used',
      category: 'GAME',
    };

    setFilters(defaultFilters);
  }, [category, getCategoryValue, resetFilters, setFilters]);

  // 필터, 정렬 변경 시 데이터 새로 조회
  useEffect(() => {
    fetchInitialProducts();
  }, [fetchInitialProducts]);

  // 전체 상품 수 계산 (로드된 상품 기준)
  const totalProductsCount = allProducts.length;

  return (
    <>
      <MainPromotion />

      <div className="mx-4 xl:max-w-[1280px] xl:mx-auto my-8">
        {/* SelectBar에 동적 카테고리 전달 */}
        <SelectBar categories={createDynamicCategories(category)} />
      </div>
      <section className="flex flex-col pt-10 pb-20">
        <div className="mx-4 xl:w-[1200px] xl:mx-auto">
          {/* 상품 목록 그리드 */}
          <div className="w-full">
            {loading && displayedProducts.length === 0 ? (
              <ul className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                <ProductListSkeleton />
              </ul>
            ) : error ? (
              <ErrorState error={error} onRetry={fetchInitialProducts} />
            ) : displayedProducts.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <ul className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                  {displayedProducts.map((product) => (
                    <ItemCard key={product._id} productData={product} />
                  ))}
                </ul>
                {/* 더보기 버튼 */}
                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="px-8 py-3 bg-poten-red text-white rounded-md hover:bg-red-700 disabled:bg-gray-400 transition-colors">
                      {loadingMore ? '로딩 중...' : '더보기'}
                    </button>
                  </div>
                )}
                {/* 페이지네이션 (옵션) */}
                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination
                      onLoadMore={handleLoadMore}
                      loading={loadingMore}
                      hasMore={hasMore}
                    />
                  </div>
                )}
                {/* 상품 수 표시 */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  전체 {totalProductsCount}개 상품 중 {displayedProducts.length}개 표시
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
