import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';
import OrderStatusSection from '@/components/MyPage/MyPageOrder';
import RecentOrderSection from '@/components/MyPage/MyPageRecent';

export default function MyPage() {
  return (
    <>
      {/* 모바일 전용 버튼 그룹 */}
      <MobileMyPageNav />
      {/* 주문처리 현황 */}
      <OrderStatusSection />
      {/* 최근 주문 상품 */}
      <RecentOrderSection />
    </>
  );
}