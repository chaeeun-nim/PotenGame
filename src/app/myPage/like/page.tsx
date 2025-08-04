import LikepageHeader from '@/components/LikePage/LikepageHeader';
import LikePageList from '@/components/LikePage/LikePageList';
import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '찜 목록',
  description: '포텐게임 찜 목록 페이지',
  openGraph: {
    title: '찜 목록',
    description: '포텐게임 찜 목록 페이지',
  },
};

export default function LikePage() {
  return (
    <>
      {/* 모바일 전용 버튼 그룹 */}
      <MobileMyPageNav />
      <LikepageHeader />
      <LikePageList />
    </>
  );
}
