
import PostSection from '@/components/MyPage/Post/PostSection';
import MyPageSide from '@/components/MyPage/MyPageSide';
import MobileMyPageNav from '@/components/MyPage/MobileMyPageNav';

const qnaPosts = [
  { id: 1, title: '[질문] 배송이 너무 느려요', date: '2025.07.20', replied: true },
  { id: 2, title: '[질문] A/S 문의합니다', date: '2025.07.18', replied: true },
  { id: 3, title: '[질문] 침 구매했는데 작동이 안되요, 사기인가요?', date: '2025.07.18', replied: false },
  { id: 4, title: '[질문] 포장지 뜯었는데 반품 되나요?', date: '2025.07.16', replied: true },
];

const freePosts = [
  { id: 1, title: '이번 제품 너무 좋아요!', date: '2025.07.21', commentCount: 150 },
  { id: 2, title: '포켓몬 게임은 4세대부터 망했다!', date: '2025.07.20', commentCount: 3 },
  { id: 3, title: 'T1 경기 페이커는 여전히 전설이다!', date: '2025.07.18', commentCount: 5 },
];

export default function MyPostPage() {
  return (
    <>
      {/* 모바일 네비게이션 버튼 그룹 */}
      <MobileMyPageNav />
      
      {/* 모바일 전용 사이드바 */}
      <MyPageSide variant="mobileOnly" />

      {/* PC 전용 */}
      <section className="hidden xl:block bg-white rounded-lg -mt-2 mb-8 px-4">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="lg" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="lg" />
      </section>

      {/* 태블릿 전용 */}
      <section className="hidden md:block xl:hidden bg-white rounded-lg px-4 py-6">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="md" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="md" />
      </section>

      {/* 모바일 전용 */}
      <section className="block md:hidden bg-white rounded-lg px-4 py-6">
        <PostSection title="질의응답 게시판 / 작성한 글" posts={qnaPosts} size="sm" />
        <PostSection title="자유 게시판 / 작성한 글" posts={freePosts} size="sm" />
      </section>
    </>
  );
}
