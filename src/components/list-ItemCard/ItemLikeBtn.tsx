'use client';
import { useState } from 'react';
import likeUnchecked from '@/assets/icons/heart-gray.svg';
import likeChecked from '@/assets/icons/heart-red.svg';
import Image from 'next/image';

export interface ItemLikeBtnProps {
  className?: string;
}

export default function ItemLikeBtn({ className }: ItemLikeBtnProps) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <button onClick={handleLikeClick}>
      <Image
        src={isLiked ? likeChecked : likeUnchecked}
        alt={isLiked ? '상품 찜하지 않기' : '상품 찜하기'}
        className={className || 'w-5 h-5'}
      />
    </button>
  );
}
