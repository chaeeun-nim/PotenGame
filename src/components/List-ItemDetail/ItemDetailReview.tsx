// src/components/List-ItemDetail/ItemDetailReview.tsx
/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */

import MainLoginModal from '@/components/MainLoginModal';
import { Iproduct } from '@/types/products';
import useLoginModal from '@/zustand/areyouLogin';
import useUserStore from '@/zustand/userStore';
import ReviewHelpfulCounter from '@/components/List-ItemDetail/ReviewHelpfulCounter';

interface ItemDetailReviewProps {
  productId?: string;
  productData?: Iproduct;
}

// 이미지 리뷰 스켈레톤 컴포넌트
function ImageReviewSkeleton() {
  return (
    <div>
      <div className="w-full aspect-square bg-poten-bluegray rounded-lg"></div>
    </div>
  );
}

export default function ItemDetailReview({
  productId,
  productData,
}: ItemDetailReviewProps) {
  //전역 상태 관리 추가
  const { user } = useUserStore();
  const { openViewModal } = useLoginModal();

  // 이미지 리뷰 로딩 상태 관리
  // const [imageReviewsLoading, setImageReviewsLoading] = useState(true);

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

  // 이미지 로딩 시뮬레이션 (실제로는 API 호출)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setImageReviewsLoading(false);
  //   }, 3000); // 3초 후 로딩 완료

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="flex flex-col space-y-6 py-8">
      {/* 리뷰 통계 */}
      <aside
        className="bg-gray-50 p-6 flex flex-col items-center"
        aria-labelledby="reviews-title">
        <h3 id="reviews-title" className="text-lg font-semibold">
          상품 후기
        </h3>
        <div className="flex flex-col items-center justify-between mb-4 rounded-lg">
          <div className="flex flex-row gap-2">
            <div
              className="flex text-yellow-400 text-sm md:text-lg"
              role="img"
              aria-label={`5점 만점에 ${averageRating}점`}>
              {'★'.repeat(Math.floor(Number(averageRating)))}
              {'☆'.repeat(5 - Math.floor(Number(averageRating)))}
            </div>
            <span className="text-lg font-bold" aria-label="평균 평점">
              {averageRating}
            </span>
          </div>
          <span className="text-gray-500 text-xs md:text-sm" aria-label="총 후기 수">
            (총 {reviews.length}개 리뷰)
          </span>
        </div>
      </aside>

      {/* 리뷰 목록 */}
      <section aria-labelledby="reviews-list">
        {/* 텍스트 리뷰 */}
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <article key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                <header className="flex items-center justify-between mb-3">
                  <div className="flex flex-col space-x-3">
                    <h4
                      id={`review-${review.id}`}
                      className="font-semibold text-gray-800">
                      {review.userName}
                    </h4>
                    <div
                      className="flex text-yellow-400 text-xs md:text-sm"
                      role="img"
                      aria-label={`5점 만점에 ${review.rating}점`}>
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    <time
                      dateTime={review.date}
                      className="text-gray-500 text-xs md:text-sm">
                      {review.date} 작성
                    </time>

                    <ReviewHelpfulCounter
                      helpfulCount={review.helpful}
                      reviewId={review.id}
                      onHelpfulClick={(reviewId, isHelpful) => {
                        console.log(
                          `리뷰 ${reviewId}에 ${isHelpful ? '도움됨' : '도움안됨'} 클릭`,
                        );
                        // 실제 API 호출 로직 추가 필요
                      }}
                    />
                  </div>
                </header>
                <p className="text-gray-700 mb-3 leading-relaxed">{review.content}</p>

                <div className="mt-4">
                  <div className="grid grid-cols-3 md:grid-cols-9 gap-2 justify-center">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <div
                        key={`review-${review.id}-image-skeleton-${index}`}
                        className="w-full aspect-square">
                        <ImageReviewSkeleton />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div
              className="text-center py-12 text-gray-500"
              role="status"
              aria-live="polite">
              <p className="text-lg mb-2">아직 작성된 후기가 없습니다.</p>
              <p className="text-sm">첫 번째 후기를 작성해보세요!</p>
            </div>
          )}
        </div>

        {/** 렌더링 확인 코드, 추후 컴포넌트에 추가 */}
        {/** //! 추후 사용, 스켈레톤 이미지 관련
        {imageReviewsLoading ? (
          // 9개 skelecton image
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={`image-skeleton-${index}`}
                className="w-full max-w-[100px]"
                style={{
                  width: '100%',
                  maxWidth: '100px',
                  aspectRatio: '1/1',
                }}>
                <ImageReviewSkeleton />
              </div>
            ))}
          </div>
        ) : (
          // 로딩 완료 후 실제 이미지 리뷰 또는 빈 상태
          <div
            className="text-center py-12 text-gray-500"
            role="status"
            aria-live="polite">
            <p className="text-lg mb-2">등록된 포토 후기가 없습니다.</p>
          </div>
        )}
        */}
      </section>

      {/* 리뷰 작성 버튼 */}
      <footer className="text-center">
        <button
          onClick={handleWriteReview}
          className="bg-poten-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          aria-describedby="login-requirement">
          {user ? '후기 작성하기' : '로그인 후 후기 작성하기'}
        </button>
        {!user && (
          <p id="login-requirement" className="sr-only">
            후기를 작성하려면 먼저 로그인이 필요합니다.
          </p>
        )}
      </footer>

      {/* 디버그 정보 (개발 중에만 표시) */}
      {/* {process.env.NODE_ENV === 'development' && productId && (
        <div className="mt-4 p-2 bg-gray-100 rounded text-xs text-gray-600">
          Debug: Product ID = {productId} | User: {user ? '로그인됨' : '로그인 안됨'}
        </div>
      )} */}
    </section>
  );
}
