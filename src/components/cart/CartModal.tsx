'use client';
// src/components/cart/CartModal.tsx
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function CartModal({ isOpen, onClose, productName }: CartModalProps) {
  const router = useRouter();

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // 모달이 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleContinueShopping = () => {
    onClose();
  };

  const handleGoToCart = () => {
    router.push('/cart');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md" onClick={onClose} />

      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-lg p-6 mx-4 max-w-md w-full shadow-xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="닫기">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 모달 내용 */}
        <div className="text-center">
          {/* 체크 아이콘 */}
          <div className="mx-auto mb-4 w-12 h-12 bg-poten-green rounded-full flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 메시지 */}
          <h3 className="text-lg font-bold mb-2">장바구니 추가 완료</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">{productName}</span>이(가)
          </p>
          <p className="text-gray-600 mb-6">장바구니에 추가되었습니다.</p>
          <p className="text-gray-800 font-medium mb-8">계속 쇼핑하시겠습니까?</p>

          {/* 버튼들 */}
          <div className="flex gap-3">
            <button
              onClick={handleContinueShopping}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              계속 쇼핑하기
            </button>
            <button
              onClick={handleGoToCart}
              className="flex-1 px-4 py-3 bg-poten-red text-white rounded-md font-medium hover:bg-red-600 transition-colors">
              장바구니로 이동
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
