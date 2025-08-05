'use client';
import { useItemCardContext } from '@/components/list-ItemCard/ItemCardContext';
import useErrorStore from '@/zustand/errorStore';
import Image from 'next/image';
import ErrorImg from '@/assets/img/errorimg.png';
import { useState } from 'react';

// 이미지 Skeleton 컴포넌트
const ImageSkeleton = ({ variant }: { variant: 'default' | 'detailed' }) => {
  const getSkeletonSize = () => {
    switch (variant) {
      case 'detailed':
        return 'w-full h-[200px] md:h-[300px] xl:h-[400px]';
      default:
        return 'w-full min-h-[238px] md:min-h-[310px] xl:min-w-[300px] xl:min-h-[350px] flex flex-col rounded-[4px] md:rounded-[8px] overflow-hidden';
    }
  };

  return (
    <div
      className={`bg-gray-200 animate-pulse ${getSkeletonSize()} flex items-center justify-center rounded-md`}>
      <div className="text-gray-400 text-sm text-center px-4">
        이미지를 불러올 수 없습니다
      </div>
    </div>
  );
};

export default function ItemCardImage() {
  const { variant, productData } = useItemCardContext();
  const [localImageError, setLocalImageError] = useState(false);

  // 전역 에러 상태 관리
  const { incrementImageError, shouldShowSkeleton } = useErrorStore();
  const showSkeleton = shouldShowSkeleton();

  // 이미지 로딩 에러 핸들러
  const handleImageError = () => {
    setLocalImageError(true);
    incrementImageError();
    console.error('이미지 로딩 실패:', productData?.mainImages?.[0]?.path);
  };

  // 이미지, container CSS 설정
  const getImageStyles = () => {
    switch (variant) {
      case 'detailed':
        return 'w-full h-[200px] md:h-[300px] xl:h-[400px] object-contain rounded-lg';
      default:
        return 'w-full h-full object-contain';
    }
  };

  const getContainerStyles = () => {
    switch (variant) {
      case 'detailed':
        return 'w-full flex justify-center items-center md:justify-start xl:justify-start';
      default:
        return 'w-full h-[238px] md:h-[310px] xl:h-[350px] xl:w-[282px] object-cover flex-shrink-0';
    }
  };

  // 이미지 URL 생성  (productData가 있을 시 사용, 없을면 기본값)
  const imageUrl = productData?.mainImages?.[0]?.path
    ? `${productData.mainImages[0].path}`
    : ErrorImg;

  // 전역으로 5개의 에러 발생, 혹은 local에서 이미지 에러 발생 시
  if (showSkeleton || localImageError) {
    return (
      <div className={getContainerStyles()}>
        <ImageSkeleton variant={variant} />
      </div>
    );
  }

  const imageAlt =
    productData?.mainImages?.[0]?.name || productData?.name || 'item thumbnail';

  return (
    <div className={getContainerStyles()}>
      <Image
        src={imageUrl}
        alt={imageAlt || '상품 이미지'}
        width={variant === 'detailed' ? 400 : 200}
        height={variant === 'detailed' ? 400 : 200}
        className={getImageStyles()}
        onError={handleImageError}
        priority={variant === 'detailed'}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}
