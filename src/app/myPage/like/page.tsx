import LikepageHeader from '@/components/LikePage/LikepageHeader';
import LikePageList from '@/components/LikePage/LikePageList';
import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';

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
