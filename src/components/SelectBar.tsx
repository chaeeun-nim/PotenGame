'use client';

import '@/app/globals.css';
import Image from 'next/image';
import { useState } from 'react';
import rightIcon from '@/assets/icons/right.svg';
import useListStore from '@/zustand/listStore';
import { SortType } from '@/types/sort';

interface Category {
  type: string;
  value: string; // API 호출 시 사용 값
}

type SelectBarVariant = 'default' | 'itemDetail';

interface SelectBarProps {
  variant?: SelectBarVariant;
  categories?: Category[];
}

/* 
아래 page에 사용 되는 component 입니다.
- /list/[product] 
- /notice
*/

export default function SelectBar({ variant = 'default', categories }: SelectBarProps) {
  // Zustand store에서 상태, 액션 호출
  const { filters, sortBy, setFilters, setSortBy, resetFilters } = useListStore();

  // 로컬 상태 (카테고리 버튼 비활성화 상태)
  const [activeButton, setActiveButton] = useState<number>(0);

  const defaultLabels: Category[] = [
    { type: '중고 게임', value: 'used-game' },
    { type: '중고 게임기', value: 'used-console' },
    { type: '새제품 게임', value: 'new-game' },
    { type: '새제품 게임기', value: 'new-console' },
  ];

  const labels = categories || defaultLabels;

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

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (index: number, category: Category) => {
    setActiveButton(index);

    // 카테고리에 따른 필터 설정
    const newFilters: Partial<typeof filters> = {};

    if (category.value.includes('used')) {
      newFilters.condition = 'used';
    } else if (category.value.includes('new')) {
      newFilters.condition = 'new';
    }

    if (category.value.includes('game')) {
      newFilters.category = 'GAME';
    } else if (category.value.includes('console')) {
      newFilters.category = 'CONSOLE';
    }

    setFilters(newFilters);
  };

  // 정렬 변경 핸들러
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value as SortType;
    setSortBy(newSortBy);
  };

  // 필터 초기화 핸들러
  const handleResetFilters = () => {
    resetFilters();
    setActiveButton(0);
  };

  //상품 상세 페이지 '/list/[id]' 구조: 'itemDetail' (상품 상세 페이지 코드)
  if (variant === 'itemDetail') {
    return (
      <section className="flex flex-col pt-10 mb-5.5">
        <div className="mx-4 xl:w-[1200px] xl:mx-auto">
          <div className="flex items-center mb-3 md:mb-0">
            <h2 className="font-semibold pl-2 md:pl-3 mx-3 xl:pl-4 border-l-2 md:border-l-3 xl:border-l-4 border-l-poten-red text-sm md:text-base xl:text-lg">
              {filters.platform || '전체 상품'}
            </h2>

            <Image src={rightIcon} alt="" className="mr-2" />

            <select
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
            </select>
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
            {filters.platform || '전체 상품'}
          </h2>

          {/* 필터 초기화 버튼 */}
          {(Object.keys(filters).length > 0 || sortBy !== '-extra.releaseDate') && (
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
          {labels.map((label, index) => (
            <li
              key={index}
              className={
                activeButton === index
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
      {Object.keys(filters).length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-poten-gray-2">적용된 필터:</span>
          {filters.condition && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {filters.condition === 'used' ? '중고' : '새제품'}
              <button
                onClick={() => setFilters({ condition: undefined })}
                className="ml-1 hover:bg-red-700 rounded-full w-4 h-4 flex items-center justify-center">
                ×
              </button>
            </span>
          )}
          {filters.category && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {filters.category === 'GAME' ? '게임' : '게임기'}
              <button
                onClick={() => setFilters({ category: undefined })}
                className="ml-1 hover:bg-red-700 rounded-full w-4 h-4 flex items-center justify-center">
                ×
              </button>
            </span>
          )}
          {filters.platform && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-poten-red text-white">
              {filters.platform}
              <button
                onClick={() => setFilters({ platform: undefined })}
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
