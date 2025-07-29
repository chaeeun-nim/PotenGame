/* 상품 상세 페이지 '/list' 구현한 페이지 입니다. */
'use client';

import ItemCard from '@/components/List-ItemCard/ItemCard';
import MainPromotion from '@/components/MainPromotion';
import Pagination from '@/components/Pagination';
import SelectBar from '@/components/SelectBar';
import { useEffect } from 'react';
import useListStore from '@/zustand/listStore';
import { getProductList, ProductSearchParams } from '@/data/functions/listProducts';
import { SortType } from '@/types/sort';

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

export default function ProductList() {
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
  } = useListStore();

  // 상품 목록 조회 함수
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      // ProductSearchParams 타입에 맞게 파라미터 구성
      const searchParams: ProductSearchParams = {
        page: currentPage,
        sort: sortBy as SortType, // 명시적 타입 캐스팅
        ...filters,
      };

      const result = await getProductList(searchParams);

      if (result.ok === 1) {
        setProducts(result.item);
        if (result.pagination) {
          setTotalPages(result.pagination.totalPages);
        }
      } else {
        setError(result.message || '상품을 불러올 수 없습니다.');
        setProducts([]);
      }
    } catch (err) {
      console.error('API 호출 오류:', err);
      setError('네트워크 오류가 발생했습니다.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // 필터, 정렬, 페이지 변경 시 데이터 새로 조회
  useEffect(() => {
    fetchProducts();
  }, [filters, sortBy, currentPage]);

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
                총 <span className="font-bold text-poten-red">{products.length}</span>개의
                상품
              </p>
            </div>
          )}

          <ul className="xl:max-w-[1280px] xl:mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-[24px] place-items-stretch px-4 xl:px-0">
            {loading ? (
              // 로딩 상태
              <ProductListSkeleton />
            ) : error ? (
              // 에러 상태
              <ErrorState error={error} onRetry={fetchProducts} />
            ) : products.length === 0 ? (
              // 빈 상태
              <EmptyState />
            ) : (
              // 정상 상태
              products.map((product) => (
                <li key={product._id}>
                  <ItemCard productData={product} />
                </li>
              ))
            )}
          </ul>
        </section>

        {/* 페이지네이션 - 상품이 있을 때만 표시 */}
        {!loading && !error && products.length > 0 && totalPages > 1 && (
          <div className="pb-6 xl:max-w-[1280px] mx-auto flex justify-center">
            <Pagination />
          </div>
        )}
      </section>
    </>
  );
}
