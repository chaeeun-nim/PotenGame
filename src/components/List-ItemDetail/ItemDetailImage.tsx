/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상세 이미지 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */
'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ItemDetailImageProps {
  productId?: string;
  category?: string;
}

export default function ItemDetailImage({ productId, category }: ItemDetailImageProps) {
  // 상세 이미지 열림, 닫힘 상태 관리 (초기값 false)
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // 더보기 혹은 닫기 버튼 click 시 상태 토글
  const handleToggleDetail = () => {
    setIsDetailOpen((prev) => !prev);
  };

  // 상품 상세 이미지 URL 생성 (productId 활용)
  const getDetailImageUrl = () => {
    if (productId) {
      return `https://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-${productId}-detail.webp`;
    }
    // 기본 이미지 (fallback)
    return "https://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-27-detail.webp";
  };

  return (
    <div className="w-full relative mb-12">
      {/* 이미지 래퍼 - 높이와 오버플로우 제어 */}
      <div
        className={`
          w-full relative transition-all duration-300 ease-in-out
          ${
            isDetailOpen
              ? 'h-auto overflow-y-auto'
              : 'h-[400px] md:h-[500px] xl:h-[600px] overflow-hidden'
          }
          `}>
        {/* 닫힘 상태일 떄 그라데이션 오버레이 */}
        {!isDetailOpen && (
          <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center z-10 bg-gradient-to-b from-transparent via-white/10 to-white pointer-events-none" />
        )}

        {/* 상품 상세 이미지 */}
        <div className="flex flex-col gap-2">
          <Image
            src={getDetailImageUrl()}
            alt={`${category || '상품'} 상세 이미지`}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onError={(e) => {
              // 이미지 로드 실패 시 기본 이미지로 변경
              const target = e.target as HTMLImageElement;
              target.src =
                'https://fesp-api.koyeb.app/market/files/febc13-final14-emjf/pro-27-detail.webp';
            }}
          />
        </div>
      </div>

      {/* 열기/닫기 버튼 */}
      <button
        onClick={handleToggleDetail}
        className="
          absolute bottom-0 left-0 right-0 z-20
          bg-white text-poten-gray3
          border border-poten-gray3 rounded
          py-4 px-6
          font-semibold text-base
          hover:bg-gray-50 hover:border-gray-400
          transition-all duration-200
          flex items-center justify-center gap-2
        ">
        {isDetailOpen ? (
          <>
            상품 상세 닫기
            <svg
              className="w-4 h-4 transform transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </>
        ) : (
          <>
            상품 상세 더보기
            <svg
              className="w-4 h-4 transform transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}
