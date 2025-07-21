'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import cart from '@/assets/icons/cart.svg';
import cartAdded from '@/assets/icons/addcart.svg';
import usedTag from '@/assets/icons/used-tag.svg';
import { useItemCardContext } from '@/components/list-ItemCard/ItemCardContext';
import ItemLikeBtn from '@/components/list-ItemCard/ItemLikeBtn';
// import newTag from '@/assets/icons/new-tag.svg'

//TODO 서버 데이터 도입, info 교체
export default function ItemCardInfo() {
  const { variant } = useItemCardContext();

  const getInfoStyles = () => {
    switch (variant) {
      case 'detailed': 
        return {
          container: "flex flex-row justify-between items-center flex-1 mx-3",
          title: "text-sm md:text-base",
          showDetails: true,
        };
      default:
        return {
          container: "flex flex-col justify-start flex-1 m-3",
          title: "text-sm md:text-xl xl:text-[22px] line-clamp-1",
          showDetails: true
        };
      };
  };

  const styles = getInfoStyles();

  const [isInCart, setIsInCart] = useState(false);
  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <article className={styles.container}>
      {/* variant에 따라 조건부 렌더링 */}
      {styles.showDetails && (
        <header className="flex flex-row gap-1.5 text-[10px] md:text-sm xl:text-base">
          <span className="items-center flex flex-row gap-0.5 font-bold italic text-poten-usedorange">
            <Image src={usedTag} alt="new item" className="w-4 h-4" />
            S급 중고
          </span>
          <time dateTime='2025-06-05'>발매 25.06.05</time>
        </header>
      )}

      <Link href={'/list/1'}>
        <h3 className={`font-bold my-2 ${styles.title}`}>
          젤다의 전설 야생의 숨결
        </h3>
      </Link>

      <section className="mb-2" aria-labelledby='price-info'>
        <span id='price-info' className='sr-only'>가격 정보</span>
        <p className="text-poten-gray-2 font-bold text-xs xl:text-[13px] line-through">
          <span className='sr-only'>정가</span>
          1,000,000원
        </p>
        <p className="text-poten-nintendo font-bold">
          <span className='sr-only'>할인가</span>
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
            className='w-5 h-5'
            style={!isInCart ? { filter: 'brightness(0) saturate(100%) invert(69%) sepia(6%) saturate(365%) hue-rotate(181deg) brightness(92%) contrast(86%)' } : {}}
          />
        </button>

        <ItemLikeBtn />
      </footer>
    </article>
  );
}
