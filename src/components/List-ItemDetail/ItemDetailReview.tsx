// src/components/List-ItemDetail/ItemDetailReview.tsx
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */

import MainLoginModal from '@/components/MainLoginModal';
import { Iproduct } from '@/types/products';
import useLoginModal from '@/zustand/areyouLogin';
import useUserStore from '@/zustand/userStore';
import thumb from '@/assets/icons/thumb-up-svgrepo-com.svg'
import Image from 'next/image';

interface ItemDetailReviewProps {
  productId?: string;
  productData?: Iproduct;
}

export default function ItemDetailReview({
  productId,
  productData,
}: ItemDetailReviewProps) {
  //전역 상태 관리 추가
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();

  // 상품명 가져오기 (productData 우선 사용)
  const productName = productData?.name || '상품';

  // 샘플 리뷰 데이터 (실제로 productId를 사용해서 API에서 호출)
  const reviews = [
    {
      id: 1,
      userName: '게임러버',
      rating: 5,
      date: '2024.07.20',
      content:
        '정말 재미있는 게임입니다! 오픈월드의 자유도가 환상적이고 그래픽도 아름다워요.',
      helpful: 12,
    },
    {
      id: 2,
      userName: '젤다팬',
      rating: 4,
      date: '2024.07.18',
      content: '중고지만 상태가 매우 좋네요. 포장도 깔끔하게 되어있었습니다.',
      helpful: 8,
    },
    {
      id: 3,
      userName: '닌텐도마니아',
      rating: 5,
      date: '2024.07.15',
      content: '아이가 너무 좋아해요. 빠른 배송 감사합니다!',
      helpful: 15,
    },
  ];

  // 평균 별점 계산
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        ).toFixed(1)
      : '0.0';

  // 리뷰 작성 핸들러 - 로그인 체크 추가
  const handleWriteReview = () => {
    if (!user) {
      openViewModal(); // 로그인 모달 열기
      <MainLoginModal />;
      return;
    }

    const currentProductId = productData?._id || productId;
    if (currentProductId) {
      console.log(
        `상품 ${currentProductId}(${productName})에 대한 리뷰 작성 페이지로 이동`,
      );
    }
  };

  return (
    <div className="flex flex-col space-y-6 py-8">
      <h3 className="text-2xl font-bold text-center mb-6">상품 후기</h3>

      {/* 리뷰 통계 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold">고객 만족도</h4>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400 text-lg">
              {'★'.repeat(Math.floor(Number(averageRating)))}
              {'☆'.repeat(5 - Math.floor(Number(averageRating)))}
            </div>
            <span className="text-lg font-bold">{averageRating}</span>
            <span className="text-gray-500">(총 {reviews.length}개 후기)</span>
          </div>
        </div>
      </div>

      {/* 리뷰 목록 */}
      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-800">{review.userName}</span>
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                  <span className="text-gray-500 text-sm">{review.date}</span>

                  {/* 아래 파트 컴포넌트로 업데이트할 예정 */}
                  <span className="text-gray-500 text-sm flex flex-row gap-1">
                    <Image 
                      src={thumb}
                      alt='리뷰 추천 수'
                      width={15}
                      height={15}
                    />
                    {review.helpful}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">{review.content}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg mb-2">아직 작성된 후기가 없습니다.</p>
            <p className="text-sm">첫 번째 후기를 작성해보세요!</p>
          </div>
        )}
      </div>

      {/* 리뷰 작성 버튼 */}
      <div className="text-center">
        <button
          onClick={handleWriteReview}
          className="bg-poten-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
          {user ? '후기 작성하기' : '로그인 후 후기 작성하기'}
        </button>
      </div>

      {/* 디버그 정보 (개발 중에만 표시) */}
      {/* {process.env.NODE_ENV === 'development' && productId && (
        <div className="mt-4 p-2 bg-gray-100 rounded text-xs text-gray-600">
          Debug: Product ID = {productId} | User: {user ? '로그인됨' : '로그인 안됨'}
        </div>
      )} */}
    </div>
  );
}
