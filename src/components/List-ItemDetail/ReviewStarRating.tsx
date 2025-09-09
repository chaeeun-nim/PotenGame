// src/components/List-ItemDetail/ReviewStarRating.tsx
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */
/* 별점 평가 component (SVG icon 적용) */

import Image from 'next/image';
import filledStar from '@/assets/icons/iconoir_star-solid.svg';
import unFilledStar from '@/assets/icons/iconoir_star-solid-1.svg';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ReviewStarRating({ rating, size = 'md' }: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const filledCount = Math.floor(Number(rating));
  const emptyCount = 5 - filledCount;

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`5점 만점에 ${rating}점`}>
      {/* 채워진 별 */}
      {Array.from({ length: filledCount }).map((_, index) => (
        <Image
          key={`filled-${index}`}
          src={filledStar}
          alt=""
          width={16}
          height={16}
          className={sizeClasses[size]}
        />
      ))}

      {/* 빈 별 */}
      {Array.from({ length: emptyCount }).map((_, index) => (
        <Image
          key={`empty-${index}`}
          src={unFilledStar}
          alt=""
          width={16}
          height={16}
          className={sizeClasses[size]}
        />
      ))}
    </div>
  );
}
