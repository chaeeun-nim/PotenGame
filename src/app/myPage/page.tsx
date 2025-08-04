import { Metadata } from 'next';
import { cookies } from 'next/headers';

import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';
import MyPageOrder from '@/components/MyPage/MyPageOrder';
import MyPageRecent from '@/components/MyPage/MyPageRecent';
import { IRecentOrder } from '@/types/RecentOrder';

export const metadata: Metadata = {
  title: '마이페이지',
  description: '나의 주문 정보, 관심상품을 확인할 수 있습니다.',
};

export default async function MyPage() {
  // 토큰 비동기 방식으로 안전하게 가져오기
  const cookieStore = await cookies(); // ← 에러 방지
  const token = cookieStore.get('token')?.value;

  // 최근 주문 fetch
  let recentOrders: IRecentOrder[] = [];

  if (token) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/recent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
      });

      const json = await res.json();
      if (json.ok) recentOrders = json.item;
    } catch (err) {
      console.error('🚨 최근 주문 불러오기 실패:', err);
    }
  }

  return (
    <>
      <MobileMyPageNav />
      <MyPageOrder />
      <MyPageRecent recentOrders={recentOrders} />
    </>
  );
}
