// src/components/List-ItemDetail/ReviewHelpfulCounter.tsx
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기에 속한 컴포넌트입니다.(상품 상세 페이지 하단부) */
/* 리뷰 도움됨/안됨 버튼 컴포넌트 */
import Image from 'next/image';
import thumbUp from '@/assets/icons/thumb-up-svgrepo-com.svg';
import thumbDown from '@/assets/icons/thumb-down-svgrepo-com.svg';

interface ReviewHelpfulCounterProps {
  helpfulCount: number;
  reviewId: number;
  onHelpfulClick?: (reviewId: number, isHelpful: boolean) => void;
}

export default function ReviewHelpfulCounter({
  helpfulCount,
  reviewId,
  onHelpfulClick,
}: ReviewHelpfulCounterProps) {
  const handleThumbUpClick = () => {
    onHelpfulClick?.(reviewId, true);
  };

  const handleThumbDownClick = () => {
    onHelpfulClick?.(reviewId, false);
  };

  return (
    <div className="text-gray-500 text-xs md:text-sm flex flex-row gap-1 items-center">
      <span aria-label="도움이 된 사용자 수">{helpfulCount} 명에게 도움됨</span>
      <div className="flex flex-row" role="group" aria-label="후기 평가">
        <button
          type="button"
          aria-label="이 후기가 도움이 되었습니다"
          onClick={handleThumbUpClick}
          className="hover: opacity-70 transition-opacity">
          <Image src={thumbUp} alt="도움이 되요 버튼" width={25} height={25} />
        </button>

        <button
          type="button"
          aria-label="이 후기가 도움이 되지 않았습니다"
          onClick={handleThumbDownClick}
          className="hover: opacity-70 transition-opacity">
          <Image src={thumbDown} alt="도움이 안되요 버튼" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}
