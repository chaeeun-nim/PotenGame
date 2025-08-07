/* 
아래 page에 사용 되는 component 입니다.
- /list/[product] 
- /notice
*/
'use client';

import '@/app/globals.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import rightIcon from '@/assets/icons/right.svg';
import useListStore from '@/zustand/listStore';
import { SortType } from '@/types/sort';
import { usePathname } from 'next/navigation';

// 필터 유틸리티 함수들 import
import {
  Category,
  FilterState,
  DEFAULT_CATEGORIES,
  toggleFilter,
  getActiveButtonIndices,
  isFiltersEmpty,
  isLabelActive,
} from '@/utils/filterUtils';

// listStore의 실제 FilterState 타입 정의
interface ListStoreFilterState {
  platform?: string;
  condition?: string;
  priceMin?: number;
  priceMax?: number;
  search?: string;
  category?: string;
}

type SelectBarVariant = 'default' | 'itemDetail';

interface SelectBarProps {
  variant?: SelectBarVariant;
  categories?: Category[];
}

export default function SelectBar({ variant = 'default', categories }: SelectBarProps) {
  // Zustand store에서 상태, 액션 호출
  const { filters, sortBy, setFilters, setSortBy, resetFilters } = useListStore();
  // 로컬 상태 (카테고리 버튼 비활성화 상태)
  const [activeButtons, setActiveButton] = useState<Set<number>>(new Set());

  // 현재 경로 가져오기
  const pathname = usePathname();

  const navLabels = DEFAULT_CATEGORIES;
  // const labels = categories || DEFAULT_CATEGORIES;

  // 정렬 옵션 정의
  const sortOptions: { value: SortType; label: string }[] = [
    { value: '-extra.releaseDate', label: '최신 발매순' },
    { value: 'extra.releaseDate', label: '오래된 발매순' },
    { value: 'name', label: '상품명' },
    { value: 'price', label: '낮은가격' },
    { value: '-price', label: '높은가격' },
    { value: '-buyQuantity', label: '인기상품' },
    { value: '-replies', label: '리뷰순' },
  ];

  // URL에서 카테고리명 추출하는 함수
  const getCategoryFromPath = (): string | null => {
    const pathSegments = pathname.split('/');

    if (pathSegments.length >= 3 && pathSegments[1] === 'list') {
      const categoryParam = pathSegments[2];

      // 카테고리 매핑
      const categoryMap: { [key: string]: string } = {
        NINTENDONDS: '닌텐도 NDS',
        NINTENDO01: '닌텐도 스위치 1',
        NINTENDO02: '닌텐도 스위치 2',
        PLAYSTATION04: '플레이스테이션 4',
        PLAYSTATION05: '플레이스테이션 5',
      };

      return categoryMap[categoryParam] || null;
    }

    return null;
  };

  // 필터 상태에 따라 활성 버튼 동기화
  useEffect(() => {
    const compatibleFilters: FilterState = {
      platform: filters.platform,
      condition: (filters.condition as 'used' | 'new') || undefined,
      category: (filters.category as 'GAME' | 'HARDWARE') || undefined,
    };

    const activeIndices = getActiveButtonIndices(navLabels, compatibleFilters);
    setActiveButton(new Set(activeIndices));
  }, [filters, navLabels]);

  // 초기 활성 버튼 설정 (카테고리별 페이지 진입 시)
  useEffect(() => {
    if (!categories) {
      // 전체 페이지에서만 처음 3개 버튼 활성화
      setActiveButton(new Set([0, 1, 2]));
    }
  }, [categories]);

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (index: number, category: Category) => {
    // 플랫폼 필터 클릭 시 처리 방지
    if (category.value.startsWith('platform-')) {
      const newActiveButtons = new Set(activeButtons);
      const isCurrentlyActive = activeButtons.has(index);

      if (isCurrentlyActive) {
        newActiveButtons.delete(index);
      } else {
        newActiveButtons.add(index);
      }
      setActiveButton(newActiveButtons);
      return;
    }

    // listStore FilterState를 filterUtils FilterState로 변환
    const compatibleFilters: FilterState = {
      platform: filters.platform,
      condition: (filters.condition as 'used' | 'new') || undefined,
      category: (filters.category as 'GAME' | 'HARDWARE') || undefined,
    };

    // 현재 버튼이 활성화되어 있는지 확인
    const isCurrentlyActive = isLabelActive(category, compatibleFilters);

    // 필터 토글 적용
    const newFilters = toggleFilter(category, compatibleFilters, isCurrentlyActive);

    // listStore 형식으로 다시 변환하여 저장
    const listStoreFilters: Partial<ListStoreFilterState> = {
      platform: newFilters.platform,
      condition: newFilters.condition,
      category: newFilters.category,
    };

    // 활성 버튼 상태 업데이트
    const activeIndices = getActiveButtonIndices(navLabels, newFilters);
    setActiveButton(new Set(activeIndices));

    setFilters(listStoreFilters);
  };

  // 정렬 변경 핸들러
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value as SortType;
    setSortBy(newSortBy);
  };

  // 현 카테고리 텍스트 호출
  const getCurrentCategoryText = (): string => {
    // 1. URL에서 카테고리 추출 시도
    const categoryFromPath = getCategoryFromPath();
    if (categoryFromPath) {
      return categoryFromPath;
    }

    // 2. 필터에서 플랫폼 정보 확인
    if (filters.platform) {
      return filters.platform;
    }

    // 3. 기본값
    return '전체 상품';
  };

  // 필터 초기화 핸들러 개선
  const handleResetFilters = () => {
    resetFilters();
    setActiveButton(new Set());

    window.location.href = '/list';
  };

  // 개별 필터 제거 핸들러
  const handleRemoveFilter = (filterKey: keyof ListStoreFilterState) => {
    // 플랫폼 필터 제거 시 전체 상품 페이지로 이동
    if (filterKey === 'platform') {
      window.location.href = '/list';
      return;
    }

    const newFilters = { ...filters };
    // 타입 안전한 속성 제거
    if (filterKey in newFilters) {
      newFilters[filterKey] = undefined;
    }
    setFilters(newFilters);
  };

  //상품 상세 페이지 '/list/[id]' 구조: 'itemDetail' (상품 상세 페이지 코드)
  if (variant === 'itemDetail') {
    return (
      <section className="flex flex-col pt-10 mb-5.5">
        <div className="mx-4 xl:w-[1200px] xl:mx-auto">
          <div className="flex items-center mb-3 md:mb-0">
            <h2 className="font-semibold pl-2 md:pl-3 mx-3 xl:pl-4 border-l-2 md:border-l-3 xl:border-l-4 border-l-poten-red text-sm md:text-base xl:text-lg">
              {getCurrentCategoryText()}
            </h2>

            <Image src={rightIcon} alt="" className="mr-2" />

            {/* 개발 일정으로 기능구현 일시 중지 */}
            {/* <select
              name="product-filter"
              id="filter-option-select"
              value={sortBy}
              onChange={handleSortChange}
              className="border-1 border-poten-gray-1 pl-2 pr-15 py-1.5 md:pl-3 md:pr-26 md:py-2 xl:py-2 rounded-xs bg-white text-xs appearance-none bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:10px_10px]">
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select> */}
          </div>

          <hr className="mt-3 mb-0 xl:mt-5 border-poten-gray-1" />
        </div>
      </section>
    );
  }

  //상품 목록 페이지 '/list' 구조: 'default' (기본 코드)
  return (
    <>
      <div className="flex justify-between items-center mb-3 md:mb-0">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold pl-2 md:pl-3 mx-3 xl:pl-4 border-l-2 md:border-l-3 xl:border-l-4 border-l-poten-red text-sm md:text-base xl:text-lg">
            {getCurrentCategoryText()}
          </h2>

          {/* 필터 초기화 버튼 */}
          {(!isFiltersEmpty({
            platform: filters.platform,
            condition: (filters.condition as 'used' | 'new') || undefined,
            category: (filters.category as 'GAME' | 'HARDWARE') || undefined,
          } as FilterState) ||
            sortBy !== '-extra.releaseDate') && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-poten-gray-2 hover:text-poten-red border border-poten-gray-2 hover:border-poten-red px-2 py-1 rounded-sm transition-colors">
              초기화
            </button>
          )}
        </div>

        {/* 모바일 정렬 드롭다운 */}
        <select
          name="product-filter"
          id="filter-option-select-mobile"
          value={sortBy}
          onChange={handleSortChange}
          className="border-1 border-poten-gray-2 pl-2 pr-10 py-1.5 md:px-6 md:py-2 xl:px-10 xl:py-2 rounded-xs bg-poten-snowgray1 text-xs md:hidden appearance-none bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:10px_10px]">
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <hr className="my-3 md:my-4 xl:my-5 border-poten-gray-1" />

      <nav className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 mb-5">
        {/* 카테고리 필터 버튼들 */}
        <ul className="flex items-center overflow-x-auto gap-2 md:gap-3 xl:gap-0 scrollbar-hide pl-2 pr-2 -mr-2">
          {navLabels.map((label, index) => (
            <li
              key={index}
              className={
                activeButtons.has(index)
                  ? 'px-[18px] py-2 md:px-6 md:py-2 xl:px-10 xl:py-2 bg-[var(--color-poten-red)] rounded-2xl md:rounded-3xl xl:rounded-4xl text-white text-xs md:text-sm xl:text-base whitespace-nowrap flex-shrink-0 xl:mr-5 first:ml-0 last:mr-2'
                  : 'px-[18px] py-2 md:px-6 md:py-2 xl:px-10 xl:py-2 border-1 rounded-2xl md:rounded-3xl xl:rounded-4xl text-[var(--color-poten-black)] text-xs md:border-2 xl:border-2 border-[var(--color-poten-red)] md:text-sm xl:text-base whitespace-nowrap flex-shrink-0 xl:mr-5 first:ml-0 last:mr-2'
              }
              onClick={() => handleCategoryClick(index, label)}>
              {label.type}
            </li>
          ))}
        </ul>

        {/* 데스크톱/태블릿 정렬 드롭다운 */}
        <select
          name="product-filter"
          id="filter-option-select-desktop"
          value={sortBy}
          onChange={handleSortChange}
          className="hidden md:block border-1 border-poten-gray-2 py-1.5 md:pl-2 md:pr-17 md:py-2 xl:pl-2 xl:pr-20 xl:py-2 rounded-xs bg-poten-snowgray1 text-xs md:text-sm xl:text-base text-left appearance-none w-full md:w-auto bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:13px_13px]">
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </nav>

      {/* 현재 적용된 필터 표시 */}
      {!isFiltersEmpty({
        platform: filters.platform,
        condition: (filters.condition as 'used' | 'new') || undefined,
        category: (filters.category as 'GAME' | 'HARDWARE') || undefined,
      } as FilterState) && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-poten-gray-2">적용된 필터:</span>

          {/* 플랫폼 필터 */}
          {(filters as FilterState).platform && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {(filters as FilterState).platform}
              <button
                onClick={() => handleRemoveFilter('platform')}
                className="ml-1 hover:bg-red-700 rounded-full w-4 h-4 flex items-center justify-center"
                title="전체 상품으로 이동">
                ×
              </button>
            </span>
          )}

          {/* 컨디션 필터 */}
          {(filters as FilterState).condition && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {(filters as FilterState).condition === 'used' ? '중고' : '새제품'}
              <button
                onClick={() => handleRemoveFilter('condition')}
                className="ml-1 hover:bg-red-700 rounded-full w-4 h-4 flex items-center justify-center">
                ×
              </button>
            </span>
          )}

          {/* 카테고리 필터 */}
          {(filters as FilterState).category && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {(filters as FilterState).category === 'GAME' ? '게임' : '게임기'}
              <button
                onClick={() => handleRemoveFilter('category')}
                className="ml-1 hover:bg-red-700 rounded-full w-4 h-4 flex items-center justify-center">
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </>
  );
}
