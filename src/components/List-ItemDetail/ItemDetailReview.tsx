/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 상품 후기 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */

export default function ItemDetailReview() {
  // 샘플 리뷰 데이터
  const reviews = [
    {
      id: 1,
      userName: "게임러버",
      rating: 5,
      date: "2024.07.20",
      content: "정말 재미있는 게임입니다! 오픈월드의 자유도가 환상적이고 그래픽도 아름다워요.",
      helpful: 12
    },
    {
      id: 2,
      userName: "젤다팬",
      rating: 4,
      date: "2024.07.18",
      content: "중고지만 상태가 매우 좋네요. 포장도 깔끔하게 되어있었습니다.",
      helpful: 8
    },
    {
      id: 3,
      userName: "닌텐도마니아",
      rating: 5,
      date: "2024.07.15",
      content: "아이가 너무 좋아해요. 빠른 배송 감사합니다!",
      helpful: 15
    }
  ];

  return (
    <div className='flex flex-col space-y-6 py-8'>
      <h3 className="text-2xl font-bold text-center mb-6">상품 후기</h3>
      
      {/* 리뷰 통계 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold">고객 만족도</h4>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(5)}
            </div>
            <span className="text-lg font-bold">4.7</span>
            <span className="text-gray-500">(총 {reviews.length}개 후기)</span>
          </div>
        </div>
      </div>

      {/* 리뷰 목록 */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">{review.userName}</span>
                <div className="flex text-yellow-400 text-sm">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                </div>
              </div>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <p className="text-gray-700 mb-3">{review.content}</p>
            <div className="flex items-center justify-between">
              <button className="text-sm text-gray-500 hover:text-poten-nintendo transition-colors">
                도움됨 {review.helpful}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 리뷰 작성 버튼 */}
      <div className="text-center">
        <button className="bg-poten-nintendo text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
          후기 작성하기
        </button>
      </div>
    </div>
  );
}