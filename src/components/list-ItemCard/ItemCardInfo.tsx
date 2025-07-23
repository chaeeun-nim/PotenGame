'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import cart from '@/assets/icons/cart.svg';
import cartAdded from '@/assets/icons/addcart.svg';
import usedTag from '@/assets/icons/used-tag.svg';
import filledHeart from '@/assets/icons/heart-filled.svg';
import { useItemCardContext } from '@/components/List-ItemCard/ItemCardContext';
import ItemLikeBtn from '@/components/List-ItemCard/ItemLikeBtn';
import ItemNumInput from '@/components/List-ItemCard/ItemNumInput';
// import newTag from '@/assets/icons/new-tag.svg'

//TODO 서버 데이터 도입, info 교체
export default function ItemCardInfo() {
  const { variant } = useItemCardContext();
  const [isInCart, setIsInCart] = useState(false);
  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  // variant가 'detailed'일 경우 해당 HTML 구조 반환
  if (variant === 'detailed') {
    return (
      <>
        <article className="flex flex-col flex-1 mx-3">
          <div className='ml-2'>
            <h3 className={'font-bold my-2 text-[22px] xl:text-[32px]'}>
              젤다의 전설 야생의 숨결
            </h3>
            <section className="mb-2" aria-labelledby="price-info">
              <span id="price-info" className="sr-only">
                가격 정보
              </span>
              <div className="text-poten-gray-2 font-bold text-xs xl:text-[28px] line-through flex justify-between w-[130px] xl:w-[225px]">
                <span>정가</span>
                1,000,000원
              </div>
              <div className="font-bold flex justify-between items-center w-[152px] xl:w-[246px]">
                <span className="xl:text-[28px]">할인가</span>
                <div className="flex flex-row items-center xl:text-[28px]">
                  <span className="text-poten-nintendo xl:text-[40px]">89,900</span>원
                </div>
              </div>
            </section>
          </div>

          <hr className="border-1 border-poten-gray-1 ml-[-10px] xl:ml-[-15px] mt-2 mb-3.5 xl:mt-2 xl:mb-4" />

          <div className='ml-2'>
            {/* TODO 추후 API 수량 기입 필요 */}
            <section className="hidden xl:flex flex-row gap-8 mb-6">
              <div className="flex flex-row items-center">
                <Image
                  src={filledHeart}
                  alt="좋아요 갯수"
                  className="w-[18px] h-[18px] mr-0.5"
                />
                <span>좋아요 240개</span>
              </div>
              <div className="flex flex-row items-center">
                <Image
                src={cart}
                alt="남은 상품 수량"
                className="w-[18px] h-[18px] mr-0.5"
                />
                <span>남은수량 5개</span>
              </div>
            </section>

            <section aria-labelledby="product-info">
              <ul className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-x-12">
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-1">
                  <span className="text-poten-gray-2 font-bold text-sm">제품상태</span>
                  <p className="text-sm col-span-2">미사용 중고</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-3">
                  <span className="text-poten-gray-2 font-bold text-sm">발매일</span>
                  <p className="text-sm col-span-2">2008.05.24</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-5">
                  <span className="text-poten-gray-2 font-bold text-sm">플랫폼</span>
                  <p className="text-sm col-span-2">Nintendo DSI</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-2">
                  <span className="text-poten-gray-2 font-bold text-sm">이용등급</span>
                  <p className="text-sm col-span-2">전체 이용가</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-4">
                  <span className="text-poten-gray-2 font-bold text-sm">언어/원산지</span>
                  <p className="text-sm col-span-2">음성-영어,일본어 / 자막-한국어</p>
                </li>
                <li className="grid grid-cols-3 my-1 xl:my-2 xl:order-6">
                  <span className="text-poten-gray-2 font-bold text-sm">배송비</span>
                  <p className="text-sm col-span-2">일반 4,000원</p>
                </li>
              </ul>
            </section>
          </div>
          
          <div className='hidden xl:grid h-full rounded-md border-1 border-poten-gray-1 bg-white xl:col-span-2'>
          <ItemNumInput />
          </div>
        </article>

        <div className='rounded-md mt-4 md:mt-4 xl:hidden h-full border-1 border-poten-gray-1 bg-white md:col-span-2 xl:col-span-2'>
          <ItemNumInput />
        </div>
      </>
    );
  }

  // 기본 variant 'default' HTML 구조
  return (
    <article className="flex flex-col justify-start flex-1 m-3">
      <header className="flex flex-row gap-1.5 text-[10px] md:text-sm xl:text-base">
        <span className="items-center flex flex-row gap-0.5 font-bold italic text-poten-usedorange">
          <Image src={usedTag} alt="new item" className="w-4 h-4" />
          S급 중고
        </span>
        <time dateTime="2025-06-05">발매 25.06.05</time>
      </header>

      <Link href={'/list/1'}>
        <h3 className={'font-bold my-2 text-sm md:text-xl xl:text-[22px] line-clamp-1'}>
          젤다의 전설 야생의 숨결
        </h3>
      </Link>

      <section className="mb-2" aria-labelledby="price-info">
        <span id="price-info" className="sr-only">
          가격 정보
        </span>
        <p className="text-poten-gray-2 font-bold text-xs xl:text-[13px] line-through">
          <span className="sr-only">정가</span>
          1,000,000원
        </p>
        <p className="text-poten-nintendo font-bold">
          <span className="sr-only">할인가</span>
          89,900원
        </p>
      </section>

      <footer className="flex flex-row justify-between">
        <button
          onClick={handleCartClick}
          className={`items-center flex flex-row place-content-center sm:text-xs w-[95px] h-[26px] md:w-[152px] md:h-[28px] xl:w-[152px] xl:h-[32px] rounded-sm gap-1 border-1 ${!isInCart ? 'border-poten-gray-2' : ''}`}>
          <span className={!isInCart ? 'text-poten-gray-2' : ''}>
            {isInCart ? '장바구니' : '담기'}
          </span>
          <Image
            src={isInCart ? cartAdded : cart}
            alt={isInCart ? '장바구니에서 제거' : '장바구니에 추가'}
            className="w-5 h-5"
            style={
              !isInCart
                ? {
                    filter:
                      'brightness(0) saturate(100%) invert(69%) sepia(6%) saturate(365%) hue-rotate(181deg) brightness(92%) contrast(86%)',
                  }
                : {}
            }
          />
        </button>

        <ItemLikeBtn />
      </footer>
    </article>
  );
}
