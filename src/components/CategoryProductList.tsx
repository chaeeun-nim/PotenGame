/* 카테고리별 상품 목록 페이지 '/list/[category]' 구현한 페이지 에 쓰이는 component 입니다. */
'use client';

import ItemCard from '@/components/list-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import useListStore from '@/zustand/listStore';
import { getProductList, ProductSearchParams } from '@/data/functions/listProducts';
import { SortType } from '@/types/sort';
import { Iproduct, PlatformName } from '@/types/products';
// 필터 유틸리티 함수 import
import { createDynamicCategories } from '@/utils/filterUtils';

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
    resetFilters,
  } = useListStore();

  // 로컬 상태 관리
  const [displayedProducts, setDisplayedProducts] = useState<Iproduct[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allProducts, setAllProducts] = useState<Iproduct[]>([]);
  const [currentDisplayCount, setCurrentDisplayCount] = useState(ITEMS_PER_PAGE);

  // API 호출 중복 방지 및 초기화 상태 관리
  const isLoadingRef = useRef(false);
  const currentCategoryRef = useRef<string>('');
  const hasInitializedRef = useRef(false);

  // 카테고리 코드에 따른 플랫폼 값 반환
  const getCategoryValue = useCallback(
    (categoryCode: string): PlatformName | '전체 상품' => {
      const categoryMap: Record<string, PlatformName> = {
        NINTENDONDS: '닌텐도 NDS',
        NINTENDO01: '닌텐도 스위치 1',
        NINTENDO02: '닌텐도 스위치 2',
        PLAYSTATION04: '플레이스테이션 4',
        PLAYSTATION05: '플레이스테이션 5',
      };

      return categoryMap[categoryCode] || '전체 상품';
    },
    [],
  );

  const fetchInitialProducts = useCallback(async () => {
    // 중복 호출 방지
    if (isLoadingRef.current) {
      console.log('이미 로딩 중, API 호출 스킵');
      return;
    }

    isLoadingRef.current = true;
    setLoading(true);
    setError(null);
    setCurrentPage(1);

    try {
      // API 호출
      const searchParams: ProductSearchParams = {
        page: 1,
        sort: sortBy as SortType,
      };

      console.log('⭐ 수정된 API 호출 파라미터:', searchParams);
      const result = await getProductList(searchParams);
      console.log('⭐ API 응답:', result);

      if (result.ok === 1) {
        const products = result.item || [];
        console.log('⭐ 받은 상품 수:', products.length);

        // 백엔드 데이터 구조에 맞는 필터링
        const filteredProducts = products.filter((product) => {
          // 백엔드 데이터: extra.category 배열에서 카테고리 코드 확인
          const productCategories = product.extra?.category || [];

          console.log(
            '🔥 상품명:',
            product.name,
            '카테고리 배열:',
            productCategories,
            '찾는 카테고리:',
            category,
          );

          // extra.category 배열에 현재 카테고리 코드가 포함되어 있는지 확인
          return productCategories.includes(category);
        });

        console.log('필터링된 상품 수:', filteredProducts.length);

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
        console.warn('API 응답 오류:', result.message);
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
      isLoadingRef.current = false;
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
    if (loadingMore || isLoadingRef.current) return;

    setLoadingMore(true);
    isLoadingRef.current = true;

    try {
      const nextPage = currentPage + 1;
      const searchParams: ProductSearchParams = {
        page: nextPage,
        sort: sortBy as SortType,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1 && result.item) {
        const newProducts = result.item;

        // 클라이언트 사이드 필터링 적용
        const filteredNewProducts = newProducts.filter((product) => {
          const productCategories = product.extra?.category || [];
          return productCategories.includes(category);
        });

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
      isLoadingRef.current = false;
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
    setCurrentPage,
    getCategoryValue,
  ]);

  // 로컬에서 더 보기 (이미 로드된 상품 중에서)
  const showMoreFromLocal = useCallback((): void => {
    const newDisplayCount = currentDisplayCount + ITEMS_PER_PAGE;
    setDisplayedProducts(allProducts.slice(0, newDisplayCount));
    setCurrentDisplayCount(newDisplayCount);

    // 로컬에 더 표시할 상품이 있는지 또는 서버에서 더 가져올지 확인
    setHasMore(allProducts.length > newDisplayCount || currentPage < totalPages);
  }, [currentDisplayCount, allProducts, currentPage, totalPages]);

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = useCallback((): void => {
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
    // category 변경 확인
    if (currentCategoryRef.current !== category) {
      console.log('카테고리 변경 감지:', currentCategoryRef.current, '->', category);
      currentCategoryRef.current = category;
      hasInitializedRef.current = false;

      // 이전 카테고리 완전 초기화
      resetFilters();
      setDisplayedProducts([]);
      setAllProducts([]);
      setCurrentDisplayCount(ITEMS_PER_PAGE);
      setHasMore(true);
      hasInitializedRef.current = true;

      // 즉시 API 호출
      fetchInitialProducts();
    }
  }, [category, resetFilters, fetchInitialProducts]);

  // 필터/정렬 변경 시에만 API 호출
  useEffect(() => {
    // 초기화가 완료되었고, 카테고리가 현재 카테고리와 일치할 때만 API 호출
    if (hasInitializedRef.current) {
      console.log('필터/정렬 변경으로 인한 API 호출');
      fetchInitialProducts();
    }
  }, [filters, sortBy, fetchInitialProducts]);

  // 전체 상품 수 계산 (로드된 상품 기준)
  const totalProductsCount: number = allProducts.length;

  // 카테고리별 동적 라벨 생성
  const dynamicCategories = createDynamicCategories(category);

  return (
    <>
      <MainPromotion />

      <header className="mx-4 xl:max-w-[1280px] xl:mx-auto my-8">
        <SelectBar categories={dynamicCategories} />
      </header>

      <section className="bg-poten-snowgray1 xl:px-10 xl:mx-auto">
        <section className="py-8 flex flex-col justify-center">
          <h1 id="product-list-heading" className="sr-only">
            상품목록
          </h1>

          {/* 상품 개수 표시 */}
          {!loading && !error && displayedProducts.length > 0 && (
            <div className="xl:max-w-[1280px] mx-auto px-4 xl:px-0 mb-4">
              <p className="text-sm text-gray-600">
                총 <span className="font-bold text-poten-red">{totalProductsCount}</span>
                개의 상품
                {totalProductsCount > displayedProducts.length && (
                  <span className="ml-2">
                    (현재 <span className="font-bold">{displayedProducts.length}</span>개
                    표시)
                  </span>
                )}
              </p>
            </div>
          )}

          <ul className="xl:max-w-[1280px] xl:mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-[24px] place-items-stretch px-4 xl:px-0">
            {loading ? (
              // 초기 로딩 상태
              <ProductListSkeleton />
            ) : error ? (
              // 에러 상태
              <ErrorState error={error} onRetry={fetchInitialProducts} />
            ) : displayedProducts.length === 0 ? (
              // 빈 상태
              <EmptyState />
            ) : (
              // 정상 상태 - 표시할 상품들만 렌더링
              displayedProducts.map((product) => (
                <li key={product._id}>
                  <ItemCard productData={product} />
                </li>
              ))
            )}
          </ul>

          {/* 더보기 로딩 스켈레톤 */}
          {loadingMore && (
            <ul className="xl:max-w-[1280px] xl:mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-[24px] place-items-stretch px-4 xl:px-0 mt-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <li key={`loading-${index}`} className="animate-pulse w-full">
                  <div className="w-full min-h-[200px] md:min-h-[240px] xl:min-w-[300px] xl:min-h-[280px] flex flex-col rounded-[4px] md:rounded-[8px] overflow-hidden bg-white">
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
            </ul>
          )}
        </section>

        {/* 더보기 버튼 - 상품이 있고 더 보여줄 상품이 있을 때만 표시 */}
        {!loading && !error && displayedProducts.length > 0 && hasMore && (
          <div className="pb-6 xl:max-w-[1280px] mx-auto flex justify-center">
            <Pagination
              onLoadMore={handleLoadMore}
              loading={loadingMore}
              hasMore={hasMore}
            />
          </div>
        )}
      </section>
    </>
  );
}
