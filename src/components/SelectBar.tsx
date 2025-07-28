'use client'

import '@/app/globals.css';
import Image from 'next/image';
import { useState } from 'react';
import rightIcon from '@/assets/icons/right.svg'; 

interface Category {
  type: string;
}

type SelectBarVariant = 'default' | 'itemDetail';

interface SelectBarProps {
  variant ?: SelectBarVariant;
  categories ?: Category []
}

/* 
아래 page에 사용 되는 component
- /list/[product] 
- /forum
*/

export default function SelectBar({ variant = 'default', categories}: SelectBarProps) {
  const [ activeButton, setActiveButton ] = useState<number>(0)

  const defaultLabels: Category[] = [
    { type: '소프트웨어' },
    { type: '주변기기' },
    { type: '액세서리' },
    { type: '아미보' }
  ];

  const labels = categories || defaultLabels;

  //상품 상세 페이지 '/list/[id]' 구조: 'itemDetail' (상품 상세 페이지 코드)
  if ( variant === 'itemDetail') {
    return (
      <section className='flex flex-col pt-10 mb-5.5'>
        <div className='mx-4 xl:w-[1200px] xl:mx-auto'>
          <div className='flex items-center mb-3 md:mb-0'>
            <h2 className="font-semibold pl-2 md:pl-3 mx-3 xl:pl-4 border-l-2 md:border-l-3 xl:border-l-4 border-l-poten-red text-sm md:text-base xl:text-lg">
              닌텐도 DS
            </h2>

            <Image src={rightIcon} alt='' className='mr-2'/>

            <select
              name="product-filter"
              id="filter-option-select"
              className="border-1 border-poten-gray-1 pl-2 pr-15 py-1.5 md:pl-3 md:pr-26 md:py-2 xl:py-2 rounded-xs bg-white text-xs appearance-none bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:10px_10px]">
              <option value="lastest">최신순</option>
              <option value="name-abc">상품명</option>
              <option value="lowest-price">낮은가격</option>
              <option value="highest-price">높은가격</option>
              <option value="most-likes">인기상품</option>
              <option value="most-reviews">리뷰순</option>
            </select>
          </div>
          
          <hr className="mt-3 mb-0 xl:mt-5 border-poten-gray-1" />
        </div>
      </section> 
    )
  }
  
  //상품 목록 페이지 '/list' 구조: 'default' (기본 코드)
  return (
    <>
      <div className='flex justify-between items-center mb-3 md:mb-0'>
        <h2 className="font-semibold pl-2 md:pl-3 mx-3 xl:pl-4 border-l-2 md:border-l-3 xl:border-l-4 border-l-poten-red text-sm md:text-base xl:text-lg">
          닌텐도 DS
        </h2>
        <select
          name="product-filter"
          id="filter-option-select"
          className="border-1 border-poten-gray-2 pl-2 pr-10 py-1.5 md:px-6 md:py-2 xl:px-10 xl:py-2 rounded-xs bg-poten-snowgray1 text-xs md:hidden appearance-none bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:10px_10px]">
          <option value="lastest">최신순</option>
          <option value="name-abc">상품명</option>
          <option value="lowest-price">낮은가격</option>
          <option value="highest-price">높은가격</option>
          <option value="most-likes">인기상품</option>
          <option value="most-reviews">리뷰순</option>
        </select>
      </div>
        
      <hr className="my-3 md:my-4 xl:my-5 border-poten-gray-1" />
    
      <nav className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 mb-5'>
        <ul className='flex items-center overflow-x-auto gap-2 md:gap-3 xl:gap-0 scrollbar-hide pl-2 pr-2 -mr-2'>
          { labels.map((label, index) => (
            <li
              key={ index }
              className={
                activeButton === index
                ? "px-[18px] py-2 md:px-6 md:py-2 xl:px-10 xl:py-2 bg-[var(--color-poten-red)] rounded-2xl md:rounded-3xl xl:rounded-4xl text-white text-xs md:text-sm xl:text-base whitespace-nowrap flex-shrink-0 xl:mr-5 first:ml-0 last:mr-2"
                : "px-[18px] py-2 md:px-6 md:py-2 xl:px-10 xl:py-2 border-1 rounded-2xl md:rounded-3xl xl:rounded-4xl text-[var(--color-poten-black)] text-xs md:border-2 xl:border-2 border-[var(--color-poten-red)] md:text-sm xl:text-base whitespace-nowrap flex-shrink-0 xl:mr-5 first:ml-0 last:mr-2"
              }
              onClick={()=> setActiveButton(index)}
            >
              {label.type}
            </li>
          ))}
        </ul>

        <select
          name="product-filter"
          id="filter-option-select"
          className="hidden md:block border-1 border-poten-gray-2 py-1.5 md:pl-2 md:pr-17 md:py-2 xl:pl-2 xl:pr-20 xl:py-2 rounded-xs bg-poten-snowgray1 text-xs md:text-sm xl:text-base text-left appearance-none w-full md:w-auto bg-[url('../assets/icons/selector-arrow.svg')] bg-no-repeat bg-[right_12px_center] bg-[length:13px_13px]">
          <option value="lastest">최신순</option>
          <option value="name-abc">상품명</option>
          <option value="lowest-price">낮은가격</option>
          <option value="highest-price">높은가격</option>
          <option value="most-likes">인기상품</option>
          <option value="most-reviews">리뷰순</option>
        </select>
      </nav>
    </>
  );
}
