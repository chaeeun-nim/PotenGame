import { Metadata } from 'next';

import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';
import MyPageOrder from '@/components/MyPage/MyPageOrder';
import MyPageRecent from '@/components/MyPage/MyPageRecent';

export const metadata: Metadata = {
  title: '마이페이지',
  description: '나의 주문 정보, 관심상품을 확인할 수 있습니다.',
};

export default function MyPage() {
  return (
    <>
      <MobileMyPageNav />
      <MyPageOrder />
      <MyPageRecent />
    </>
  );
}
