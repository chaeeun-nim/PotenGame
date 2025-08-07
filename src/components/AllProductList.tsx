/* /list page.tsx의 컴포넌트 입니다. */
/* 전체 상품 목록을 보여주는 클라이언트 컴포넌트 */
'use client';

import ItemCard from '@/components/list-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';
import { useEffect, useState } from 'react';
import useListStore from '@/zustand/listStore';
import { getProductList, ProductSearchParams } from '@/data/functions/listProducts';
import { SortType } from '@/types/sort';
import { Iproduct } from '@/types/products';

const ITEMS_PER_PAGE = 20; // 한 번에 보여줄 상품 수

// 로딩 스켈레톤 컴포넌트
function ProductListSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <li key={index} className="animate-pulse w-full">
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

export default function AllProductList() {
  const {
    products,
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
    // setFilters,
    resetFilters,
  } = useListStore();

  // 로컬 상태 관리
  const [displayedProducts, setDisplayedProducts] = useState<Iproduct[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allProducts, setAllProducts] = useState<Iproduct[]>([]);
  const [currentDisplayCount, setCurrentDisplayCount] = useState(ITEMS_PER_PAGE);

  // 초기 상품 목록 조회 함수
  const fetchInitialProducts = async () => {
    setLoading(true);
    setError(null);
    setCurrentPage(1);

    try {
      // 전체 상품을 위한 파라미터 구성
      const searchParams: ProductSearchParams = {
        page: 1,
        sort: sortBy as SortType,

        condition: filters.condition,
        productType: filters.category as 'GAME' | 'HARDWARE', // filters.category를 productType으로 매핑
        priceMin: filters.priceMin,
        priceMax: filters.priceMax,
        search: filters.search,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1) {
        const products = result.item || [];
        setProducts(products);
        setAllProducts(products);

        // 첫 20개 표시
        setDisplayedProducts(products.slice(0, ITEMS_PER_PAGE));
        setCurrentDisplayCount(ITEMS_PER_PAGE);

        // 더 보여줄 상품 있는지 확인
        setHasMore(products.length > ITEMS_PER_PAGE);

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
  };

  // 추가 상품 로드 함수 (서버에서 다음 페이지 가져오기)
  const fetchMoreProducts = async () => {
    if (loadingMore) return;

    setLoadingMore(true);

    try {
      const nextPage = currentPage + 1;
      const searchParams: ProductSearchParams = {
        page: nextPage,
        sort: sortBy as SortType,
        
        condition: filters.condition,
        productType: filters.category as 'GAME' | 'HARDWARE', // filters.category를 productType으로 매핑
        priceMin: filters.priceMin,
        priceMax: filters.priceMax,
        search: filters.search,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1 && result.item) {
        const newProducts = result.item;
        const updatedAllProducts = [...allProducts, ...newProducts];

        setAllProducts(updatedAllProducts);
        setProducts(updatedAllProducts);
        setCurrentPage(nextPage);

        // 현재까지 표시된 갯수 + 20개 더 표시
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
  };

  // 로컬에서 더 보기 (이미 로드된 상품 중에서)
  const showMoreFromLocal = () => {
    const newDisplayCount = currentDisplayCount + ITEMS_PER_PAGE;
    setDisplayedProducts(allProducts.slice(0, newDisplayCount));
    setCurrentDisplayCount(newDisplayCount);

    // 로컬에 더 표시할 상품이 있는지 또는 서버에서 더 가져올지 확인
    setHasMore(allProducts.length > newDisplayCount || currentPage < totalPages);
  };

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    // 현재 표시된 개수가 로드된 전체 상품 개수보다 적으면 로컬에서 더 보기
    if (currentDisplayCount < allProducts.length) {
      showMoreFromLocal();
    }
    // 그렇지 않을 시 서버에서 다음 페이지 호출
    else if (currentPage < totalPages) {
      fetchMoreProducts();
    }
  };

  // 컴포넌트 마운트 시 데이터 조회
  useEffect(() => {
    resetFilters();
    fetchInitialProducts();
  }, [resetFilters]);

  // 필터, 정렬 변경 시 데이터 새로 조회
  useEffect(() => {
    fetchInitialProducts();
  }, [filters, sortBy]);

  // 전체 상품 수 계산 (로드된 상품 기준)
  const totalProductsCount = allProducts.length;

  return (
    <>
      <MainPromotion />

      <header className="mx-4 xl:max-w-[1280px] xl:mx-auto my-8">
        <SelectBar variant="default" />
      </header>

      <section className="bg-poten-snowgray1 xl:px-10 xl:mx-auto">
        <section className="py-8 flex flex-col justify-center">
          <h1 id="product-list-heading" className="sr-only">
            상품목록
          </h1>

          {/* 상품 개수 표시 */}
          {!loading && !error && products.length > 0 && (
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
