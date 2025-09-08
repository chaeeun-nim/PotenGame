// src/components/List-ItemDetail/ReviewHelpfulCounter.tsx
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기에 속한 컴포넌트입니다.(상품 상세 페이지 하단부) */
/* 리뷰 도움됨/안됨 버튼 컴포넌트 */
import { useState } from 'react';
import ThumbUpIcon from '@/components/icons/ThumbUpIcon';
import ThumbDownIcon from '@/components/icons/ThumbDownIcon';

type VoteState = 'helpful' | 'unhelpful' | null;

interface ReviewHelpfulCounterProps {
  helpfulCount: number;
  reviewId: number;
  onHelpfulClick?: (reviewId: number, voteType: VoteState, countChange: number) => void;
}

export default function ReviewHelpfulCounter({
  helpfulCount,
  reviewId,
  onHelpfulClick,
}: ReviewHelpfulCounterProps) {
  const [userVote, setUserVote] = useState<VoteState>(null);
  const [currentHelpfulCount, setCurrentHelpfulCount] = useState(helpfulCount);

  const handleThumbUpClick = () => {
    let countChange = 0;
    let newVoteState: VoteState = null;

    if (userVote === null) {
      // 처음으로 도움됨 클릭
      newVoteState = 'helpful';
      countChange = 1;
    } else if (userVote === 'helpful') {
      // 도움됨 취소
      newVoteState = null;
      countChange = -1;
    } else if (userVote === 'unhelpful') {
      // 도움 안됨에서 도움됨으로 변경
      newVoteState = 'helpful';
      countChange = 2;
    }

    setUserVote(newVoteState);
    setCurrentHelpfulCount(currentHelpfulCount + countChange);
    onHelpfulClick?.(reviewId, newVoteState, countChange);
  };

  const handleThumbDownClick = () => {
    let countChange = 0;
    let newVoteState: VoteState = null;

    if (userVote === null) {
      // 처음으로 도움됨 클릭
      newVoteState = 'unhelpful';
      countChange = -1;
    } else if (userVote === 'unhelpful') {
      // 도움됨 취소
      newVoteState = null;
      countChange = 1;
    } else if (userVote === 'helpful') {
      // 도움 안됨에서 도움됨으로 변경
      newVoteState = 'unhelpful';
      countChange = -2;
    }

    setUserVote(newVoteState);
    setCurrentHelpfulCount(currentHelpfulCount + countChange);
    onHelpfulClick?.(reviewId, newVoteState, countChange);
  };

  return (
    <div className="text-gray-500 text-xs md:text-sm flex flex-row gap-1 items-center">
      <span aria-label="도움이 된 사용자 수">{currentHelpfulCount} 명에게 도움됨</span>
      <div className="flex flex-row" role="group" aria-label="후기 평가">
        <button
          type="button"
          aria-label="이 후기가 도움이 되었습니다"
          onClick={handleThumbUpClick}
          className={`transition-all 
          ${userVote === 'helpful' ? 'opacity-100 scale-110' : 'opacity-60'}
          `}>
          <ThumbUpIcon filled={userVote === 'helpful'} size={25} />
        </button>

        <button
          type="button"
          aria-label="이 후기가 도움이 되지 않았습니다"
          onClick={handleThumbDownClick}
          className={`transition-all ${
            userVote === 'unhelpful' ? 'opacity-100 scale-110' : 'opacity-60'
          }`}>
          <ThumbDownIcon filled={userVote === 'unhelpful'} size={25} />
        </button>
      </div>
    </div>
  );
}
