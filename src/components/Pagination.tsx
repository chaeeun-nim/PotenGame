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

export default function Pagination() {
  // const [activePage, setActivePage] = useState(1);
  // const handlePageClick = (pageNumber: number) => {
  //   setActivePage(pageNumber);
  // };

  return (
    <section className="flex flex-col items-center mt-4">
      <nav>
        <button
          className="block border-1 border-poten-red text-poten-red w-61 h-10 rounded-4xl"
          type="button">
          더보기
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
