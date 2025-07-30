'use client';
/* 
아래 page에 사용 되는 pagination component 입니다
- /list/[product] 
- /forum
*/

// import { useState } from 'react';
// import Image from 'next/image';
// import doubleLeftIcon from '@/assets/icons/doubleLeft.svg';
// import leftIcon from '@/assets/icons/left.svg';
// import doubleRightIcon from '@/assets/icons/doubleRight.svg';
// import rightIcon from '@/assets/icons/right.svg';
// import Link from 'next/link';

interface PaginationProps {
  onLoadMore?: () => void;
  loading?: boolean;
  hasMore?: boolean;
}

export default function Pagination({
  onLoadMore,
  loading = false,
  hasMore = true,
}: PaginationProps) {
  // const [activePage, setActivePage] = useState(1);
  // const handlePageClick = (pageNumber: number) => {
  //   setActivePage(pageNumber);
  // };

  const handleLoadMore = () => {
    if (onLoadMore && !loading && hasMore) {
      onLoadMore();
    }
  };

  return (
    <section className="flex flex-col items-center mt-4">
      <nav>
        <button
          className={`block border-1 border-poten-red text-poten-red w-61 h-10 rounded-4xl transition-all duration-200 ${
            loading
              ? 'opacity-50 cursor-not-allowed'
              : hasMore
                ? 'hover:bg-poten-red hover:text-white'
                : 'opacity-50 cursor-not-allowed'
          }`}
          type="button"
          onClick={handleLoadMore}
          disabled={loading || !hasMore}>
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-poten-red"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              로딩중...
            </span>
          ) : hasMore ? (
            '더보기'
          ) : (
            '모든 상품을 확인했습니다'
          )}
        </button>
      </nav>

      {/*//! 숫자형 pagination 기능 개발 일시정지, 현재 사용 안 함 */}
      {/*<nav className="hidden xl:flex-row items-center">
        <button className="h-7.5 mr-1.5" type="button">
          <Link href={'/list'}>
            <Image src={doubleLeftIcon} alt="first page" />
          </Link>
        </button>
        <button className="h-7.5 mr-1.5" type="button">
          <Image src={leftIcon} alt="previous page" />
        </button>
        <ul className="text-poten-gray-2 flex flex-row">
          <li
            onClick={() => handlePageClick(1)}
            className={`w-7.5 h-7.5 flex items-center justify-center 
                ${activePage === 1 ? 'bg-poten-gray3 text-white' : ''}`}>
            <a>1</a>
          </li>
          <li
            onClick={() => handlePageClick(2)}
            className={`w-7.5 h-7.5 flex items-center justify-center 
                ${activePage === 2 ? 'bg-poten-gray3 text-white' : ''}`}>
            <a>2</a>
          </li>
          <li
            onClick={() => handlePageClick(3)}
            className={`w-7.5 h-7.5 flex items-center justify-center 
                ${activePage === 3 ? 'bg-poten-gray3 text-white' : ''}`}>
            <a>3</a>
          </li>
          <li
            onClick={() => handlePageClick(4)}
            className={`w-7.5 h-7.5 flex items-center justify-center 
                ${activePage === 4 ? 'bg-poten-gray3 text-white' : ''}`}>
            <a>4</a>
          </li>
          <li
            onClick={() => handlePageClick(5)}
            className={`w-7.5 h-7.5 flex items-center justify-center 
                ${activePage === 5 ? 'bg-poten-gray3 text-white' : ''}`}>
            <a>5</a>
          </li>
          <li className="w-7.5 h-7.5 flex items-center justify-center">
            <span>...</span>
          </li>
        </ul>
        <button className="h-7.5 ml-1.5" type="button">
          <Image src={rightIcon} alt="next page" />
        </button>
        <button className="h-7.5 ml-1.5" type="button">
          <Image src={doubleRightIcon} alt="last page" />
        </button>
      </nav>*/}
    </section>
  );
}
